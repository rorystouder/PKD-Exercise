// ===== TODAY =====
function renderToday() {
  renderBanner();
  updateProfileBadge();
  var day = new Date().getDay();
  document.getElementById('header-date').textContent = new Date().toLocaleDateString('en-US',{weekday:'long',month:'short',day:'numeric'});

  if (day === 0 || day === 6) {
    document.getElementById('today-rest-day').classList.remove('hide');
    document.getElementById('today-content').classList.add('hide');
    return;
  }
  document.getElementById('today-rest-day').classList.add('hide');
  document.getElementById('today-content').classList.remove('hide');

  var info = getCycleInfo();
  var profile = getProfile();
  var isSenior = profile && profile.age === 'senior';
  var schedule = getCurrentSchedule();
  var sched = schedule[day];
  document.getElementById('today-title').textContent = sched.title;
  document.getElementById('today-subtitle').textContent = info.label + ' • ' + sched.subtitle;
  document.getElementById('today-est-time').textContent = sched.est;

  var pkdNotice = document.getElementById('pkd-notice');
  if (isSenior) {
    pkdNotice.innerHTML = '<p class="text-blue-300">🌿 <strong>Gentle Reminder:</strong> Listen to your body. Use a chair for support. No rushing — slow and controlled wins. Stay hydrated and breathe naturally.</p>';
  } else {
    pkdNotice.innerHTML = '<p class="text-blue-300">⚠️ <strong>PKD Reminder:</strong> Moderate weight, perfect form. Avoid heavy straining & valsalva. Breathe through every rep. Burpees: step back, no jump, no push-up.</p>';
  }

  var data = loadData();
  var tk = todayKey();
  todayCompleted = new Set(data[tk]?.completed || []);

  var totalExercises = sched.sections.reduce(function(s,sec) { return s + sec.exercises.length; }, 0);
  var completedCount = todayCompleted.size;
  document.getElementById('today-progress-text').textContent = completedCount + '/' + totalExercises + ' done';

  var btn = document.getElementById('complete-workout-btn');
  if (completedCount >= totalExercises && !data[tk]?.workoutDone) {
    btn.classList.remove('hide');
  } else {
    btn.classList.add('hide');
  }

  var container = document.getElementById('today-sections');
  container.innerHTML = '';
  var exIndex = 0;

  sched.sections.forEach(function(sec, secIdx) {
    var secEl = document.createElement('div');
    secEl.className = 'mb-6';
    
    var sectionExIds = sec.exercises.map(function(ex, i) { return secIdx + '-' + i + '-' + ex.id; });
    var sectionDone = sectionExIds.every(function(id) { return todayCompleted.has(id); });
    
    secEl.innerHTML =
      '<div class="flex items-center justify-between mb-2 cursor-pointer" onclick="toggleSectionCollapse(' + secIdx + ')">' +
        '<h3 class="font-bold ' + (sectionDone ? 'text-green-500' : 'text-fire-400') + '">' + sec.name + ' ' + (sectionDone ? '✅' : '') + '</h3>' +
        '<div class="flex items-center gap-2">' +
          '<span class="text-xs text-slate-500">' + sec.time + '</span>' +
          '<span id="section-chevron-' + secIdx + '" class="text-slate-500 text-xs">' + (sectionDone ? '▶' : '▼') + '</span>' +
        '</div>' +
      '</div>' +
      '<div id="section-content-' + secIdx + '" class="' + (sectionDone ? 'hide' : '') + '"></div>';
    container.appendChild(secEl);
    
    var sectionContent = document.getElementById('section-content-' + secIdx);

    sec.exercises.forEach(function(ex, exInSecIdx) {
      exIndex++;
      var uniqueId = secIdx + '-' + exInSecIdx + '-' + ex.id;
      var done = todayCompleted.has(uniqueId);
      if (exIndex % 3 === 0 && exIndex > 0 && !hydrationDismissed) {
        var hydDiv = document.createElement('div');
        hydDiv.className = 'bg-cyan-900/20 border border-cyan-800/30 rounded-lg p-2 mb-2 text-center text-sm text-cyan-400';
        hydDiv.textContent = '💧 Drink some water!';
        sectionContent.appendChild(hydDiv);
      }

      var card = document.createElement('div');
      card.className = 'exercise-card bg-navy-800 rounded-xl p-4 mb-2 ' + (done ? 'completed' : '');
      var isWeighted = !sec.isFlow && !sec.isStretch && ex.rest;
      var isTimed = sec.isFlow || sec.isStretch || (ex.sets && (ex.sets.includes('s') || ex.sets.includes('min'))) || (ex.reps && (ex.reps.includes('s ') || ex.reps.includes('s/') || ex.reps.match(/^\d+s$/) || ex.reps.includes('s hold') || ex.reps.includes('min')));
      var timedSeconds = parseTimedValue(ex.sets);
      if (timedSeconds === 0 && ex.reps) timedSeconds = parseTimedValue(ex.reps);
      card.innerHTML =
        '<div class="flex items-start justify-between">' +
          '<div class="flex-1 mr-3">' +
            '<div class="font-semibold ' + (done ? 'line-through text-slate-500' : '') + '">' + ex.name + ' ' + (ex.video ? '<a href="'+ex.video+'" target="_blank" class="text-xs text-cyan-400 font-normal ml-1">🎥 Demo</a>' : '') + '</div>' +
            '<div class="text-xs text-slate-400 mt-0.5">' + ex.muscles + '</div>' +
            '<div class="text-sm text-fire-400 mt-1">' + (isWeighted ? (isSenior ? ex.sets+'×'+ex.reps : applyAgeMod(ex.sets,'sets')+'×'+applyAgeMod(ex.reps,'reps')) : (isSenior ? ex.sets+' '+ex.reps : applyAgeMod(ex.sets,'hold')+' '+applyAgeMod(ex.reps,'reps'))) + '</div>' +
            (getProfile()?.age === 'adult' ? '<details class="mt-2"><summary class="text-xs text-cyan-500 cursor-pointer">💡 Form Tips (prioritized)</summary><p class="text-xs text-cyan-300 mt-1">⚠️ Focus on controlled form over speed. '+ex.tips+'</p></details>' : '<details class="mt-2"><summary class="text-xs text-slate-500 cursor-pointer">Form Tips</summary><p class="text-xs text-slate-400 mt-1">'+ex.tips+'</p></details>') +
          '</div>' +
          '<button onclick="toggleExercise(\'' + uniqueId + '\', this)" class="min-w-[48px] min-h-[48px] flex items-center justify-center rounded-xl text-2xl ' + (done ? 'bg-green-700' : 'bg-slate-700') + ' active:scale-90 transition">' +
            (done ? '✅' : '⬜') +
          '</button>' +
        '</div>' +
        (isWeighted ? '<div class="mt-2">' +
          '<div class="flex gap-2 mb-2">' +
            '<input type="number" id="wt-' + ex.id + '" placeholder="lbs" class="bg-slate-700 rounded-lg px-2 py-1.5 text-sm w-16 text-center" value="' + getLastWeight(ex.id) + '">' +
            '<input type="number" id="rp-' + ex.id + '" placeholder="reps" class="bg-slate-700 rounded-lg px-2 py-1.5 text-sm w-16 text-center" value="' + getLastReps(ex.id) + '">' +
            '<button onclick="logSet(\'' + ex.id + '\')" class="text-xs bg-fire-600 px-3 py-1.5 rounded-lg active:scale-95 font-semibold">+ Set</button>' +
            '<button onclick="startRest(' + (ex.rest||30) + ')" class="text-xs bg-slate-700 px-3 py-1.5 rounded-lg active:scale-95">⏱ ' + (ex.rest||30) + 's</button>' +
          '</div>' +
          '<div id="sets-' + ex.id + '" class="text-xs text-slate-400 flex flex-wrap gap-1">' + renderSetBadges(ex.id) + '</div>' +
        '</div>' : '') +
        (isTimed && timedSeconds > 0 ? '<div class="mt-2">' +
          '<button onclick="startExerciseTimer(' + timedSeconds + ', \'' + ex.name.replace(/'/g, "\\'") + '\')" class="text-sm bg-fire-600 hover:bg-fire-500 px-4 py-2 rounded-lg active:scale-95 font-semibold">▶️ Start ' + timedSeconds + 's Timer</button>' +
        '</div>' : '');
      sectionContent.appendChild(card);
    });
  });
}

function toggleExercise(id, btn) {
  beep(660, 80);
  var data = loadData();
  var tk = todayKey();
  if (!data[tk]) data[tk] = { completed: [] };

  if (todayCompleted.has(id)) {
    todayCompleted.delete(id);
    data[tk].completed = data[tk].completed.filter(function(x) { return x !== id; });
  } else {
    todayCompleted.add(id);
    if (!data[tk].completed.includes(id)) data[tk].completed.push(id);
  }
  saveData(data);
  renderToday();
}

function toggleSectionCollapse(secIdx) {
  var content = document.getElementById('section-content-' + secIdx);
  var chevron = document.getElementById('section-chevron-' + secIdx);
  if (content.classList.contains('hide')) {
    content.classList.remove('hide');
    chevron.textContent = '▼';
  } else {
    content.classList.add('hide');
    chevron.textContent = '▶';
  }
}

function completeWorkout() {
  tripleBeep();
  // Stop the workout timer (but don't clear it so they can see duration)
  if (timerRunning) {
    clearInterval(timerInterval);
    timerRunning = false;
    timerStartTimestamp = null;
    _saveTimerState();
    document.getElementById('timer-btn').textContent = '▶️';
    document.getElementById('timer-btn').classList.remove('timer-active');
  }
  var data = loadData();
  var tk = todayKey();
  if (!data[tk]) data[tk] = {};
  data[tk].workoutDone = true;
  data[tk].duration = timerSeconds; // save workout duration
  saveData(data);
  document.getElementById('complete-workout-btn').classList.add('hide');
  var m = Math.floor(timerSeconds/60);
  var s = timerSeconds%60;
  var timeStr = timerSeconds > 0 ? ' Time: ' + m + 'm ' + s + 's' : '';
  alert('🎉 Workout complete!' + timeStr + ' Great job!');
}

function dismissHydration() {
  hydrationDismissed = true;
  document.getElementById('hydration-reminder').classList.add('hide');
}

function getLastWeight(exId) {
  var data = loadData();
  var sets = (data.setLog || []).filter(function(s) { return s.exercise === exId; });
  return sets.length ? sets[sets.length - 1].weight : '';
}

function getLastReps(exId) {
  var data = loadData();
  var sets = (data.setLog || []).filter(function(s) { return s.exercise === exId; });
  return sets.length ? sets[sets.length - 1].reps : '';
}

function logSet(exId) {
  var wt = parseFloat(document.getElementById('wt-' + exId).value);
  var rp = parseInt(document.getElementById('rp-' + exId).value);
  if (!wt && !rp) return;
  var data = loadData();
  if (!data.setLog) data.setLog = [];
  data.setLog.push({ date: todayKey(), exercise: exId, weight: wt || 0, reps: rp || 0, time: Date.now() });
  saveData(data);
  beep(660, 80);
  var badgeEl = document.getElementById('sets-' + exId);
  if (badgeEl) badgeEl.innerHTML = renderSetBadges(exId);
}

function renderSetBadges(exId) {
  var data = loadData();
  var tk = todayKey();
  var todaySets = (data.setLog || []).filter(function(s) { return s.exercise === exId && s.date === tk; });
  if (!todaySets.length) return '';
  return todaySets.map(function(s, i) {
    return '<span class="bg-slate-700 px-2 py-0.5 rounded text-fire-400">S' + (i+1) + ': ' + s.weight + 'lb × ' + s.reps + '</span>';
  }).join('');
}
