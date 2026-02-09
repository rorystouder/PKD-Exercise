// ===== STORAGE =====
var STORE_KEY = 'pkd-exercise';
function loadData() {
  try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch { return {}; }
}
function saveData(d) { localStorage.setItem(STORE_KEY, JSON.stringify(d)); }
function todayKey() { return new Date().toISOString().slice(0,10); }

// ===== AUDIO =====
var audioCtx = null;

function ensureAudioCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext||window.webkitAudioContext)();
  // Resume suspended context (mobile browsers suspend after inactivity)
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function beep(freq, dur) {
  freq = freq || 880; dur = dur || 150;
  var ctx = ensureAudioCtx();
  try {
    var o = ctx.createOscillator(), g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination);
    o.frequency.value = freq; o.type = 'sine';
    g.gain.setValueAtTime(0.3, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + dur/1000);
    o.start(); o.stop(ctx.currentTime + dur/1000);
  } catch(e) {
    // If audio context is stale, recreate it
    audioCtx = new (window.AudioContext||window.webkitAudioContext)();
    var o = audioCtx.createOscillator(), g = audioCtx.createGain();
    o.connect(g); g.connect(audioCtx.destination);
    o.frequency.value = freq; o.type = 'sine';
    g.gain.setValueAtTime(0.3, audioCtx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + dur/1000);
    o.start(); o.stop(audioCtx.currentTime + dur/1000);
  }
}
function tripleBeep() { beep(880); setTimeout(function(){beep(880)},200); setTimeout(function(){beep(1320,300)},400); }

// Keep audio context alive — resume on any touch/click (mobile browsers require this)
document.addEventListener('touchstart', ensureAudioCtx, {passive: true});
document.addEventListener('click', ensureAudioCtx, {passive: true});

function parseTimedValue(str) {
  if (!str) return 0;
  var match = str.match(/(\d+)/);
  if (match) {
    var val = parseInt(match[1], 10);
    if (str.toLowerCase().includes('min')) return val * 60;
    return val;
  }
  return 0;
}
