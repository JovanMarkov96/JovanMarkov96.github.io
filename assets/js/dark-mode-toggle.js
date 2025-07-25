document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;
  var capsule = btn.querySelector('.highlight-capsule');
  var label = document.getElementById('theme-label');
  function setMode(dark) {
    document.documentElement.classList.toggle('dark-mode', dark);
    btn.setAttribute('aria-pressed', dark ? 'true' : 'false');
    if (label) label.textContent = dark ? 'Dark mode active' : 'Light mode active';
    if (capsule) capsule.style.transform = dark ? 'translateX(2.5rem)' : 'translateX(0)';
  }
  var darkMode = null;
  try {
    darkMode = localStorage.getItem('darkMode');
  } catch (e) {}
  if (darkMode === null) {
    darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'true' : 'false';
  }
  setMode(darkMode === 'true');
  btn.addEventListener('click', function() {
    var isDark = !document.documentElement.classList.contains('dark-mode');
    setMode(isDark);
    try {
      localStorage.setItem('darkMode', isDark);
    } catch (e) {}
  });
  btn.addEventListener('keydown', function(e) {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      btn.click();
    }
  });
});
