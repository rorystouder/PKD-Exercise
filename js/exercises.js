// ===== EXERCISES PAGE =====
function renderExercises() {
  var search = (document.getElementById('exercise-search')?.value || '').toLowerCase();
  var container = document.getElementById('exercise-list');
  container.innerHTML = '';

  var allExercises = [].concat(E.flow, E.push, E.pull, E.legs, E.bodyweight, E.compound, E.yoga, E.stretch, E.kb, E.glute, E.senior||[]);
  var filtered = allExercises.filter(function(ex) {
    if (activeCat !== 'all' && ex.category !== activeCat) return false;
    if (search && !ex.name.toLowerCase().includes(search) && !ex.muscles.toLowerCase().includes(search)) return false;
    return true;
  });

  var catLabels = { flow:'🐻 Animal Flow', push:'💪 Push', pull:'🔙 Pull', legs:'🦵 Legs', bodyweight:'🏃 Bodyweight', compound:'🔥 Compound', yoga:'🧘‍♀️ Yoga', stretch:'🧘 Stretch', kb:'🔔 Kettlebell', glute:'🍑 Glute/Hip', senior:'🌿 Senior' };
  var lastCat = '';

  filtered.forEach(function(ex) {
    if (ex.category !== lastCat) {
      lastCat = ex.category;
      if (activeCat === 'all') {
        var h = document.createElement('h3');
        h.className = 'font-bold text-fire-400 mt-4 mb-2';
        h.textContent = catLabels[ex.category] || ex.category;
        container.appendChild(h);
      }
    }
    var card = document.createElement('div');
    card.className = 'bg-navy-800 rounded-xl p-4 mb-2';
    var isWeighted = ex.rest;
    card.innerHTML =
      '<div class="font-semibold">' + ex.name + ' ' + (ex.video ? '<a href="'+ex.video+'" target="_blank" class="text-xs text-cyan-400 font-normal ml-1">🎥 Demo</a>' : '') + '</div>' +
      '<div class="text-xs text-slate-400">' + ex.muscles + '</div>' +
      '<div class="text-sm text-fire-400 mt-1">' + (isWeighted ? ex.sets+'×'+ex.reps : ex.sets+' '+ex.reps) + (ex.rest ? ' • Rest '+ex.rest+'s' : '') + '</div>' +
      '<p class="text-xs text-slate-400 mt-2">' + ex.tips + '</p>';
    container.appendChild(card);
  });

  if (filtered.length === 0) {
    container.innerHTML = '<p class="text-slate-500 text-center py-8">No exercises found</p>';
  }
}

function filterExercises() { renderExercises(); }
function filterCategory(cat) {
  activeCat = cat;
  document.querySelectorAll('.cat-btn').forEach(function(b) {
    b.className = b.dataset.cat === cat
      ? 'cat-btn bg-fire-500 text-white px-3 py-1.5 rounded-lg text-sm whitespace-nowrap font-semibold'
      : 'cat-btn bg-slate-700 text-slate-300 px-3 py-1.5 rounded-lg text-sm whitespace-nowrap';
  });
  renderExercises();
}
