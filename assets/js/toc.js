/* Post table of contents: builds a nav from the rendered headings,
   adds scroll-spy highlighting and a reading-progress bar. */
(function () {
  var panel = document.getElementById('toc-panel');
  var nav = document.getElementById('toc-nav');
  var bar = document.getElementById('toc-progress-bar');
  if (!panel || !nav) return;

  var content = document.querySelector('.page__content');
  // In-content h1 is rare but used by some posts; the page title h1 lives outside .page__content.
  var headings = content
    ? Array.prototype.slice.call(content.querySelectorAll('h1, h2, h3'))
    : [];

  // No headings -> drop the rail entirely and let the article go full width.
  if (headings.length < 2) {
    var main = document.getElementById('main');
    if (main) main.classList.add('main--full');
    var rail = panel.closest('.side-panel');
    if (rail) rail.remove(); else panel.remove();
    return;
  }

  function slugify(text) {
    return text.toLowerCase().trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  var used = {};
  var list = document.createElement('ul');
  list.className = 'toc-panel__list';

  headings.forEach(function (h) {
    if (!h.id) {
      var base = slugify(h.textContent) || 'section';
      var id = base, n = 1;
      while (document.getElementById(id) || used[id]) { id = base + '-' + n++; }
      h.id = id;
    }
    used[h.id] = true;

    var li = document.createElement('li');
    li.className = 'toc-panel__item toc-panel__item--' + h.tagName.toLowerCase();
    var a = document.createElement('a');
    a.href = '#' + h.id;
    a.textContent = h.textContent;
    a.setAttribute('data-target', h.id);
    li.appendChild(a);
    list.appendChild(li);
  });

  nav.appendChild(list);
  panel.hidden = false;

  var links = {};
  Array.prototype.slice.call(nav.querySelectorAll('a')).forEach(function (a) {
    links[a.getAttribute('data-target')] = a;
  });

  // Scroll-spy: highlight the heading nearest the top of the viewport.
  var current = null;
  function setActive(id) {
    if (id === current) return;
    if (current && links[current]) links[current].classList.remove('is-active');
    current = id;
    if (links[id]) links[id].classList.add('is-active');
  }

  var observer = new IntersectionObserver(function (entries) {
    var visible = entries
      .filter(function (e) { return e.isIntersecting; })
      .sort(function (a, b) { return a.boundingClientRect.top - b.boundingClientRect.top; });
    if (visible.length) {
      setActive(visible[0].target.id);
    }
  }, { rootMargin: '-110px 0px -65% 0px', threshold: 0 });

  headings.forEach(function (h) { observer.observe(h); });

  // Reading-progress bar across the article body.
  function updateProgress() {
    if (!bar || !content) return;
    var rect = content.getBoundingClientRect();
    var total = rect.height - window.innerHeight;
    var scrolled = -rect.top;
    var pct = total > 0 ? (scrolled / total) * 100 : (rect.top <= 0 ? 100 : 0);
    bar.style.width = Math.max(0, Math.min(100, pct)) + '%';
  }

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () { updateProgress(); ticking = false; });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();
})();
