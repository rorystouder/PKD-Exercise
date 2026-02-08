// ===== PROFILE SYSTEM =====
function getProfile() {
  var data = loadData();
  return data.profile || null;
}

function setProfile(gender, age) {
  var data = loadData();
  data.profile = { gender: gender, age: age };
  saveData(data);
}

function getCurrentSchedule() {
  var info = getCycleInfo();
  var profile = getProfile();
  if (profile && profile.age === 'senior') {
    return WEEK_SCHEDULES_SR[info.weekNum];
  }
  if (profile && profile.gender === 'woman') {
    return WEEK_SCHEDULES_W[info.weekNum];
  }
  return WEEK_SCHEDULES_M[info.weekNum];
}

// ===== STATE =====
var currentPage = 'today';
var todayCompleted = new Set();
var hydrationDismissed = false;
var activeCat = 'all';

// ===== NAVIGATION =====
function showPage(page) {
  currentPage = page;
  document.querySelectorAll('.page').forEach(function(p) { p.classList.add('hide'); });
  document.getElementById('page-'+page).classList.remove('hide');
  document.querySelectorAll('.nav-btn').forEach(function(b) {
    b.classList.toggle('tab-active', b.dataset.page === page);
    b.classList.toggle('text-slate-500', b.dataset.page !== page);
  });
  if (page === 'today') renderToday();
  if (page === 'exercises') renderExercises();
  if (page === 'week') renderWeek();
  if (page === 'progress') renderProgress();
}

// ===== PHASE BANNER =====
function renderBanner() {
  var info = getCycleInfo();
  var banner = document.getElementById('phase-banner');
  if (info.isRecovery) {
    banner.className = 'mt-2 rounded-xl p-2 text-center font-bold text-sm bg-purple-900/40 border border-purple-700/50 text-purple-300';
  } else {
    banner.className = 'mt-2 rounded-xl p-2 text-center font-bold text-sm bg-fire-500/20 border border-fire-500/40 text-fire-400';
  }
  var ageInfo = getAgeLabel();
  banner.textContent = info.label + (ageInfo ? ' • ' + ageInfo : '');
}

// ===== PROFILE UI =====
var _profileGender = null;
var _profileAge = null;

function selectProfileGender(g) {
  _profileGender = g;
  document.querySelectorAll('.profile-gender-btn').forEach(function(b) { b.className = 'profile-gender-btn bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-xl font-bold text-lg active:scale-95 transition'; });
  document.getElementById('pg-' + g).className = 'profile-gender-btn bg-fire-500 text-white px-6 py-3 rounded-xl font-bold text-lg active:scale-95 transition ring-2 ring-fire-400';
  checkProfileReady();
}

function selectProfileAge(a) {
  _profileAge = a;
  document.querySelectorAll('.profile-age-btn').forEach(function(b) { b.className = 'profile-age-btn bg-slate-700 hover:bg-slate-600 px-4 py-3 rounded-xl font-bold active:scale-95 transition'; });
  document.getElementById('pa-' + a).className = 'profile-age-btn bg-fire-500 text-white px-4 py-3 rounded-xl font-bold active:scale-95 transition ring-2 ring-fire-400';
  checkProfileReady();
}

function checkProfileReady() {
  var btn = document.getElementById('profile-confirm-btn');
  if (_profileGender && _profileAge) {
    btn.disabled = false;
    btn.classList.remove('opacity-30', 'pointer-events-none');
  }
}

function confirmProfile() {
  if (!_profileGender || !_profileAge) return;
  setProfile(_profileGender, _profileAge);
  document.getElementById('profile-overlay').classList.add('hide');
  initApp();
}

function openProfileSettings() {
  var profile = getProfile();
  if (profile) {
    _profileGender = profile.gender;
    _profileAge = profile.age;
  }
  var overlay = document.getElementById('profile-overlay');
  overlay.classList.remove('hide');
  if (_profileGender) {
    document.querySelectorAll('.profile-gender-btn').forEach(function(b) { b.className = 'profile-gender-btn bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-xl font-bold text-lg active:scale-95 transition'; });
    document.getElementById('pg-' + _profileGender).className = 'profile-gender-btn bg-fire-500 text-white px-6 py-3 rounded-xl font-bold text-lg active:scale-95 transition ring-2 ring-fire-400';
  }
  if (_profileAge) {
    document.querySelectorAll('.profile-age-btn').forEach(function(b) { b.className = 'profile-age-btn bg-slate-700 hover:bg-slate-600 px-4 py-3 rounded-xl font-bold active:scale-95 transition'; });
    document.getElementById('pa-' + _profileAge).className = 'profile-age-btn bg-fire-500 text-white px-4 py-3 rounded-xl font-bold active:scale-95 transition ring-2 ring-fire-400';
  }
  checkProfileReady();
}

function updateProfileBadge() {
  var profile = getProfile();
  var badge = document.getElementById('header-profile-badge');
  if (!profile) { badge.textContent = ''; return; }
  var gIcon = profile.gender === 'woman' ? '♀' : '♂';
  var aIcon = { young: '⚡', adult: '🎯', senior: '🌿' }[profile.age] || '';
  badge.textContent = gIcon + ' ' + aIcon;
}

function exportData() {
  var data = loadData();
  var blob = new Blob([JSON.stringify(data, null, 2)], {type:'application/json'});
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'flow45-data.json';
  a.click();
}

function resetAllData() {
  localStorage.removeItem(STORE_KEY);
  document.getElementById('profile-overlay').classList.remove('hide');
}

function initApp() {
  updateProfileBadge();
  showPage('today');
}

// ===== INIT =====
(function() {
  var profile = getProfile();
  if (!profile) {
    document.getElementById('profile-overlay').classList.remove('hide');
  } else {
    initApp();
  }
})();
