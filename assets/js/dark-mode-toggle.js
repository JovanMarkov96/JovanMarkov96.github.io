document.addEventListener('DOMContentLoaded', function() {
  // ========================================
  // Theme Toggle - 3 modes: light, dark, system
  // ========================================
  var themeBtn = document.getElementById('theme-toggle');
  var themeIcon = themeBtn ? themeBtn.querySelector('.theme-icon') : null;
  
  // Theme modes: 'light', 'dark', 'system'
  var themeModes = ['light', 'dark', 'system'];
  var themeIcons = {
    'light': '☀️',   // Sun
    'dark': '🌙',    // Moon
    'system': '💻'   // Computer/System
  };
  
  function getSystemPreference() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  
  function applyTheme(mode) {
    var isDark = false;
    if (mode === 'dark') {
      isDark = true;
    } else if (mode === 'system') {
      isDark = getSystemPreference();
    }
    // mode === 'light' -> isDark = false
    
    document.documentElement.classList.toggle('dark-mode', isDark);
    
    if (themeIcon) {
      themeIcon.textContent = themeIcons[mode];
    }
    if (themeBtn) {
      themeBtn.setAttribute('title', 'Theme: ' + mode.charAt(0).toUpperCase() + mode.slice(1));
    }
  }
  
  function getCurrentMode() {
    var saved = null;
    try {
      saved = localStorage.getItem('themeMode');
    } catch (e) {}
    return saved && themeModes.includes(saved) ? saved : 'system';
  }
  
  function setCurrentMode(mode) {
    try {
      localStorage.setItem('themeMode', mode);
    } catch (e) {}
    applyTheme(mode);
  }
  
  function cycleTheme() {
    var current = getCurrentMode();
    var nextIndex = (themeModes.indexOf(current) + 1) % themeModes.length;
    setCurrentMode(themeModes[nextIndex]);
  }
  
  // Initialize theme
  if (themeBtn) {
    var initialMode = getCurrentMode();
    applyTheme(initialMode);
    
    themeBtn.addEventListener('click', cycleTheme);
    themeBtn.addEventListener('keydown', function(e) {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        cycleTheme();
      }
    });
  }
  
  // Listen for system preference changes when in system mode
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function() {
      if (getCurrentMode() === 'system') {
        applyTheme('system');
      }
    });
  }
  
  // ========================================
  // Hamburger Menu Toggle
  // ========================================
  var navToggle = document.getElementById('nav-toggle');
  var navLinks = document.getElementById('nav-links');
  
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      var isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navLinks.classList.toggle('is-visible');
      navToggle.classList.toggle('is-active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navToggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('is-visible');
        navToggle.classList.remove('is-active');
      }
    });
    
    // Close menu when pressing Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        navToggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('is-visible');
        navToggle.classList.remove('is-active');
      }
    });
  }
});
