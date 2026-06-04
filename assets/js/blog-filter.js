/* Blog-index filtering: live text search + category/tag facets.
   Filters the already-rendered post list (no search index needed). */
(function () {
  var list = document.getElementById('blog-list');
  if (!list) return;

  var searchInput = document.getElementById('blog-search');
  var clearBtn = document.getElementById('blog-clear');
  var noResults = document.getElementById('blog-no-results');
  var chips = Array.prototype.slice.call(document.querySelectorAll('.blog-chip'));
  var items = Array.prototype.slice.call(list.querySelectorAll('.post-item'));
  var years = Array.prototype.slice.call(list.querySelectorAll('.blog-year'));

  var activeCats = new Set();
  var activeTags = new Set();

  function tokenList(el, attr) {
    return (el.getAttribute(attr) || '').split(/\s+/).filter(Boolean);
  }

  function itemMatches(item, query) {
    if (query) {
      var hay = item.getAttribute('data-search') || '';
      if (hay.indexOf(query) === -1) return false;
    }
    if (activeCats.size) {
      var cats = tokenList(item, 'data-categories');
      var hasCat = cats.some(function (c) { return activeCats.has(c); });
      if (!hasCat) return false;
    }
    if (activeTags.size) {
      var tags = tokenList(item, 'data-tags');
      var hasTag = tags.some(function (t) { return activeTags.has(t); });
      if (!hasTag) return false;
    }
    return true;
  }

  function apply() {
    var query = (searchInput && searchInput.value || '').trim().toLowerCase();
    var anyVisible = false;

    items.forEach(function (item) {
      var show = itemMatches(item, query);
      item.hidden = !show;
      if (show) anyVisible = true;
    });

    // Hide year sections that have no visible posts.
    years.forEach(function (year) {
      var visible = year.querySelectorAll('.post-item:not([hidden])').length;
      year.hidden = visible === 0;
    });

    if (noResults) noResults.hidden = anyVisible;

    var filtersOn = query || activeCats.size || activeTags.size;
    if (clearBtn) clearBtn.hidden = !filtersOn;
  }

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var type = chip.getAttribute('data-filter');
      var value = chip.getAttribute('data-value');
      var set = type === 'category' ? activeCats : activeTags;
      if (set.has(value)) { set.delete(value); chip.classList.remove('is-active'); }
      else { set.add(value); chip.classList.add('is-active'); }
      apply();
    });
  });

  if (searchInput) searchInput.addEventListener('input', apply);

  if (clearBtn) clearBtn.addEventListener('click', function () {
    activeCats.clear();
    activeTags.clear();
    chips.forEach(function (c) { c.classList.remove('is-active'); });
    if (searchInput) searchInput.value = '';
    apply();
  });
})();
