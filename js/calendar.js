// ===== WEEK =====
var expandedDay = null;

function getEquipment(sched) {
  var equip = new Set();
  sched.sections.forEach(function(sec) {
    sec.exercises.forEach(function(ex) {
      var cat = ex.category;
      var name = ex.name.toLowerCase();
      if (cat === 'kb' || name.includes('kettlebell')) equip.add('🔔 Kettlebell');
      if (cat === 'push' || cat === 'pull' || cat === 'legs' || cat === 'compound' || name.includes('dumbbell') || name.includes('db ') || name.includes('goblet') || name.includes('romanian') || name.includes('renegade')) equip.add('🏋️ Dumbbells');
      if (name.includes('pull-up') || name.includes('pull up')) equip.add('🪜 Pull-up Bar');
      if (name.includes('bench') || name.includes('incline') || name.includes('bulgarian')) equip.add('🪑 Bench');
    });
  });
  if (equip.size === 0) equip.add('🧘 Bodyweight Only');
  return Array.from(equip);
}

function renderDayPreview(sched) {
  var equipment = getEquipment(sched);
  var html =
    '<div class="mt-3 pt-3 border-t border-slate-700">' +
      '<div class="flex items-center justify-between mb-3">' +
        '<span class="text-sm font-bold text-cyan-400">👁️ Preview</span>' +
        '<span class="text-xs text-slate-500">' + sched.est + '</span>' +
      '</div>' +
      '<div class="flex flex-wrap gap-1.5 mb-3">' +
        equipment.map(function(e) { return '<span class="text-xs bg-slate-700 px-2 py-1 rounded-lg">' + e + '</span>'; }).join('') +
      '</div>';
  sched.sections.forEach(function(sec) {
    html += '<div class="mb-3">' +
      '<div class="flex items-center justify-between mb-1.5">' +
        '<h4 class="text-sm font-bold text-fire-400">' + sec.name + '</h4>' +
        '<span class="text-xs text-slate-500">' + sec.time + '</span>' +
      '</div>';
    sec.exercises.forEach(function(ex) {
      var isWeighted = ex.rest && !isNaN(parseInt(ex.sets)) && parseInt(ex.sets) <= 10;
      html += '<div class="bg-navy-950/50 rounded-lg p-2.5 mb-1.5">' +
        '<div class="font-semibold text-sm">' + ex.name + ' ' + (ex.video ? '<a href="'+ex.video+'" target="_blank" onclick="event.stopPropagation()" class="text-xs text-cyan-400 font-normal ml-1">🎥 Demo</a>' : '') + '</div>' +
        '<div class="text-xs text-slate-400">' + ex.muscles + '</div>' +
        '<div class="text-xs text-fire-400 mt-0.5">' + (isWeighted ? ex.sets+'×'+ex.reps+(ex.rest ? ' • Rest '+ex.rest+'s' : '') : ex.sets+' '+ex.reps) + '</div>' +
        '<details onclick="event.stopPropagation()"><summary class="text-xs text-slate-500 cursor-pointer mt-1">Form Tips</summary>' +
          '<p class="text-xs text-slate-400 mt-1">' + ex.tips + '</p>' +
        '</details>' +
      '</div>';
    });
    html += '</div>';
  });
  html += '</div>';
  return html;
}

function renderWeek() {
  var container = document.getElementById('week-grid');
  container.innerHTML = '';
  var today = new Date().getDay();
  var data = loadData();
  var info = getCycleInfo();
  var schedule = getCurrentSchedule();

  var banner = document.createElement('div');
  banner.className = 'rounded-xl p-3 mb-4 text-center font-bold ' + (info.isRecovery ? 'bg-purple-900/40 border border-purple-700/50 text-purple-300' : 'bg-fire-500/20 border border-fire-500/40 text-fire-400');
  banner.textContent = info.label;
  container.appendChild(banner);

  var now = new Date();
  var mondayOffset = (now.getDay() === 0 ? -6 : 1) - now.getDay();

  [1,2,3,4,5].forEach(function(d) {
    var date = new Date(now);
    date.setDate(now.getDate() + mondayOffset + d - 1);
    var dk = date.toISOString().slice(0,10);
    var done = data[dk]?.workoutDone;
    var isToday = d === today;
    var isExpanded = expandedDay === d;

    var el = document.createElement('div');
    el.className = 'bg-navy-800 rounded-xl p-4 cursor-pointer active:scale-[0.99] transition ' + (isToday ? 'ring-2 ring-fire-500' : '') + ' ' + (done ? 'opacity-70' : '');
    el.onclick = function() { expandedDay = expandedDay === d ? null : d; renderWeek(); };
    el.innerHTML =
      '<div class="flex items-center justify-between">' +
        '<div>' +
          '<div class="font-bold ' + (isToday ? 'text-fire-500' : '') + '">' + schedule[d].title.split(' — ')[0] + ' ' + (isToday ? '← Today' : '') + '</div>' +
          '<div class="text-sm text-slate-400">' + schedule[d].subtitle + '</div>' +
          '<div class="text-xs text-slate-500 mt-0.5">' + schedule[d].est + ' • ' + schedule[d].sections.reduce(function(s,sec) { return s + sec.exercises.length; }, 0) + ' exercises</div>' +
        '</div>' +
        '<div class="flex items-center gap-2">' +
          '<div class="text-2xl">' + (done ? '✅' : isToday ? '🔥' : '⬜') + '</div>' +
          '<div class="text-slate-500 text-sm transition ' + (isExpanded ? 'rotate-180' : '') + '">' + (isExpanded ? '▲' : '▼') + '</div>' +
        '</div>' +
      '</div>' +
      (isExpanded ? renderDayPreview(schedule[d]) : '');
    container.appendChild(el);
  });

  var we = document.createElement('div');
  we.className = 'bg-navy-800/50 rounded-xl p-4';
  we.innerHTML = '<div class="text-slate-500 text-center">🛋 <strong>Weekend</strong> — Rest or light walking</div>';
  container.appendChild(we);
}

// ===== PROGRESS =====
function renderProgress() {
  var data = loadData();
  var tk = todayKey();

  var streak = 0;
  var d = new Date();
  while(true) {
    var key = d.toISOString().slice(0,10);
    var dow = d.getDay();
    if (dow === 0 || dow === 6) { d.setDate(d.getDate()-1); continue; }
    if (data[key]?.workoutDone) { streak++; d.setDate(d.getDate()-1); }
    else if (key === tk) { d.setDate(d.getDate()-1); }
    else break;
  }
  document.getElementById('stat-streak').textContent = streak;

  var now = new Date();
  var mondayOffset = (now.getDay() === 0 ? -6 : 1) - now.getDay();
  var weekDone = 0;
  for (var i = 0; i < 5; i++) {
    var wd = new Date(now);
    wd.setDate(now.getDate() + mondayOffset + i);
    if (data[wd.toISOString().slice(0,10)]?.workoutDone) weekDone++;
  }
  document.getElementById('stat-week').textContent = Math.round(weekDone/5*100) + '%';

  var total = Object.values(data).filter(function(v) { return v?.workoutDone; }).length;
  document.getElementById('stat-total').textContent = total;

  renderWater();

  var heatmap = document.getElementById('heatmap');
  heatmap.innerHTML = '';
  for (var j = 89; j >= 0; j--) {
    var hd = new Date();
    hd.setDate(hd.getDate() - j);
    var hk = hd.toISOString().slice(0,10);
    var hdone = data[hk]?.workoutDone;
    var cell = document.createElement('div');
    cell.className = 'heatmap-cell ' + (hdone ? 'bg-fire-500' : 'bg-slate-800');
    cell.title = hk + (hdone ? ' ✅' : '');
    heatmap.appendChild(cell);
  }

  var sel = document.getElementById('weight-exercise');
  if (sel.options.length === 0) {
    var weighted = [].concat(E.push, E.pull, E.legs, E.bodyweight, E.compound, E.kb, E.glute, E.senior||[]);
    weighted.forEach(function(ex) {
      var opt = document.createElement('option');
      opt.value = ex.id; opt.textContent = ex.name;
      sel.appendChild(opt);
    });
  }

  renderWeightHistory();
}

function renderWater() {
  var data = loadData();
  var tk = todayKey();
  var glasses = data[tk]?.water || 0;
  var container = document.getElementById('water-glasses');
  container.innerHTML = '';
  for (var i = 0; i < 8; i++) {
    var g = document.createElement('div');
    g.className = 'w-6 h-8 rounded-sm ' + (i < glasses ? 'bg-cyan-500' : 'bg-slate-700');
    container.appendChild(g);
  }
  document.getElementById('water-count').textContent = glasses + '/8';
}

function addWater() {
  var data = loadData();
  var tk = todayKey();
  if (!data[tk]) data[tk] = {};
  data[tk].water = Math.min((data[tk].water || 0) + 1, 8);
  saveData(data);
  beep(520, 80);
  renderWater();
}

function resetWater() {
  var data = loadData();
  var tk = todayKey();
  if (data[tk]) data[tk].water = 0;
  saveData(data);
  renderWater();
}

function logWeight() {
  var exId = document.getElementById('weight-exercise').value;
  var val = parseFloat(document.getElementById('weight-value').value);
  if (!exId || !val) return;
  var data = loadData();
  if (!data.weights) data.weights = [];
  data.weights.push({ date: todayKey(), exercise: exId, weight: val });
  saveData(data);
  document.getElementById('weight-value').value = '';
  beep(660, 80);
  renderWeightHistory();
}

function renderWeightHistory() {
  var data = loadData();
  var container = document.getElementById('weight-history');
  var allEx = [].concat(E.push, E.pull, E.legs, E.bodyweight, E.compound, E.kb, E.glute, E.senior||[]);
  var nameMap = {};
  allEx.forEach(function(e) { nameMap[e.id] = e.name; });
  var setLogs = (data.setLog || []).slice(-30).reverse();
  var oldWeights = (data.weights || []).slice(-10).reverse();
  var html = '';
  if (setLogs.length) {
    html += '<p class="text-xs text-slate-500 mb-1 font-semibold">Recent Sets</p>';
    html += setLogs.map(function(s) {
      return '<div class="flex justify-between text-xs"><span>' + (nameMap[s.exercise]||s.exercise) + '</span><span class="text-fire-400">' + s.weight + 'lb × ' + s.reps + '</span><span class="text-slate-500">' + s.date + '</span></div>';
    }).join('');
  }
  if (oldWeights.length) {
    html += '<p class="text-xs text-slate-500 mb-1 mt-2 font-semibold">Weight Log</p>';
    html += oldWeights.map(function(w) {
      return '<div class="flex justify-between text-xs"><span>' + (nameMap[w.exercise]||w.exercise) + '</span><span class="text-fire-400">' + w.weight + ' lbs</span><span class="text-slate-500">' + w.date + '</span></div>';
    }).join('');
  }
  container.innerHTML = html || '<p class="text-slate-500">No weights logged yet. Track sets during your workout!</p>';
}
