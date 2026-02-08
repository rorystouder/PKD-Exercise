// ===== TIMER STATE =====
var timerRunning = false;
var timerSeconds = 0;
var timerInterval = null;
var restInterval = null;

// ===== TIMER =====
function toggleTimer() {
  if (timerRunning) {
    clearInterval(timerInterval);
    timerRunning = false;
    document.getElementById('timer-btn').textContent = '▶️';
    document.getElementById('timer-btn').classList.remove('timer-active');
    document.getElementById('rest-timer-section').classList.add('hide');
  } else {
    timerRunning = true;
    document.getElementById('timer-btn').textContent = '⏸';
    document.getElementById('timer-btn').classList.add('timer-active');
    document.getElementById('rest-timer-section').classList.remove('hide');
    document.getElementById('header-timer').classList.remove('hide');
    timerInterval = setInterval(function() {
      timerSeconds++;
      updateTimerDisplay();
    }, 1000);
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
  timerSeconds = 0;
  updateTimerDisplay();
  document.getElementById('timer-btn').textContent = '▶️';
  document.getElementById('timer-btn').classList.remove('timer-active');
  document.getElementById('rest-timer-section').classList.add('hide');
  document.getElementById('header-timer').classList.add('hide');
}

function updateTimerDisplay() {
  var m = Math.floor(timerSeconds/60).toString().padStart(2,'0');
  var s = (timerSeconds%60).toString().padStart(2,'0');
  document.getElementById('timer-display').textContent = m + ':' + s;
  document.getElementById('header-timer-display').textContent = m + ':' + s;
}

function startRest(seconds) {
  beep(440, 100);
  clearInterval(restInterval);
  var remaining = seconds;
  var display = document.getElementById('rest-display');
  document.getElementById('rest-timer-section').classList.remove('hide');
  display.textContent = remaining + 's';
  display.classList.add('text-fire-400');
  restInterval = setInterval(function() {
    remaining--;
    display.textContent = remaining + 's';
    if (remaining <= 3 && remaining > 0) beep(660, 80);
    if (remaining <= 0) {
      clearInterval(restInterval);
      tripleBeep();
      display.textContent = 'GO!';
      display.classList.remove('text-fire-400');
      display.classList.add('text-green-400');
      setTimeout(function() {
        display.textContent = '--';
        display.classList.remove('text-green-400');
        display.classList.add('text-fire-400');
      }, 2000);
    }
  }, 1000);
}

function startExerciseTimer(seconds, exerciseName) {
  beep(440, 100);
  clearInterval(restInterval);
  var remaining = seconds;
  var display = document.getElementById('rest-display');
  document.getElementById('rest-timer-section').classList.remove('hide');
  document.getElementById('timer-label').textContent = exerciseName;
  display.textContent = remaining + 's';
  display.classList.add('text-fire-400');
  display.classList.remove('text-green-400');
  restInterval = setInterval(function() {
    remaining--;
    display.textContent = remaining + 's';
    if (remaining <= 3 && remaining > 0) beep(660, 80);
    if (remaining <= 0) {
      clearInterval(restInterval);
      tripleBeep();
      display.textContent = 'DONE!';
      display.classList.remove('text-fire-400');
      display.classList.add('text-green-400');
      document.getElementById('timer-label').textContent = 'Workout Timer';
      setTimeout(function() {
        display.textContent = '--';
        display.classList.remove('text-green-400');
        display.classList.add('text-fire-400');
      }, 3000);
    }
  }, 1000);
}

// ===== TIMER POPUP =====
var timerPopupOpen = false;
var timerPopupMinimized = false;

function openTimerPopup() {
  timerPopupOpen = true;
  timerPopupMinimized = false;
  document.getElementById('timer-popup').classList.remove('hide');
  document.getElementById('timer-popup-card').classList.remove('hide');
  document.getElementById('timer-popup-pill').classList.add('hide');
}

function closeTimerPopup() {
  timerPopupOpen = false;
  timerPopupMinimized = false;
  document.getElementById('timer-popup').classList.add('hide');
}

function minimizeTimerPopup() {
  timerPopupMinimized = true;
  document.getElementById('timer-popup-card').classList.add('hide');
  document.getElementById('timer-popup-pill').classList.remove('hide');
}

function expandTimerPopup() {
  timerPopupMinimized = false;
  document.getElementById('timer-popup-card').classList.remove('hide');
  document.getElementById('timer-popup-pill').classList.add('hide');
}

function ensureTimerPopupVisible() {
  if (!timerPopupOpen) openTimerPopup();
  else if (timerPopupMinimized) expandTimerPopup();
}

// Patch functions after DOM is ready
(function() {
  var _origUpdateTimerDisplay = updateTimerDisplay;
  updateTimerDisplay = function() {
    _origUpdateTimerDisplay();
    var m = Math.floor(timerSeconds/60).toString().padStart(2,'0');
    var s = (timerSeconds%60).toString().padStart(2,'0');
    var pill = document.getElementById('timer-pill-display');
    if (pill) pill.textContent = m + ':' + s;
  };

  var _origStartRest = startRest;
  startRest = function(seconds) {
    ensureTimerPopupVisible();
    _origStartRest(seconds);
  };

  var _origStartExerciseTimer = startExerciseTimer;
  startExerciseTimer = function(seconds, exerciseName) {
    ensureTimerPopupVisible();
    _origStartExerciseTimer(seconds, exerciseName);
  };

  var _origToggleTimer = toggleTimer;
  toggleTimer = function() {
    if (!timerPopupOpen) openTimerPopup();
    _origToggleTimer();
  };
})();
