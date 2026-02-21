/**
 * Theme Toggle Script
 * Handles Light / Dark / System mode cycling.
 * Loaded at end of <body> so the toggle button is guaranteed to exist.
 */
(function () {
  'use strict';

  var toggleBtn = document.getElementById('ion-theme-toggle');
  if (!toggleBtn) return;

  var svgIcon = document.getElementById('theme-icon-svg');
  if (!svgIcon) return;

  var SVGS = {
    light: '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>',
    dark: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
    system: '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>'
  };

  var currentMode = localStorage.getItem('theme') || 'system';

  function applyMode(mode) {
    svgIcon.innerHTML = SVGS[mode];
    toggleBtn.title = mode.charAt(0).toUpperCase() + mode.slice(1);

    if (mode === 'system') {
      localStorage.removeItem('theme');
      var sysDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark-mode', sysDark);
    } else {
      localStorage.setItem('theme', mode);
      document.documentElement.classList.toggle('dark-mode', mode === 'dark');
    }
  }

  // Set initial icon (theme class already set by FOUC script in <head>)
  svgIcon.innerHTML = SVGS[currentMode];
  toggleBtn.title = currentMode.charAt(0).toUpperCase() + currentMode.slice(1);

  // Cycle: system → light → dark → system
  toggleBtn.addEventListener('click', function () {
    if (currentMode === 'system') currentMode = 'light';
    else if (currentMode === 'light') currentMode = 'dark';
    else currentMode = 'system';
    applyMode(currentMode);
  });

  // React to OS theme changes when in system mode
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (localStorage.getItem('theme')) return;
    document.documentElement.classList.toggle('dark-mode', e.matches);
  });
})();
