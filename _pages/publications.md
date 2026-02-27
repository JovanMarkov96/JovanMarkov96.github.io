---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% include base_path %}

<div class="pub-view-toggle">
  {% if site.author.googlescholar %}
  <a href="{{site.author.googlescholar}}" target="_blank" rel="noopener noreferrer" style="text-decoration: none;">
    <button class="pub-toggle-btn" aria-label="Google Scholar" title="Google Scholar">
      <i class="ai ai-google-scholar"></i>
    </button>
  </a>
  {% endif %}
  <button class="pub-toggle-btn" id="pub-list-btn" aria-label="List view" title="List view">
    <i class="fas fa-list"></i>
  </button>
  <button class="pub-toggle-btn active" id="pub-grid-btn" aria-label="Grid view" title="Grid view">
    <i class="fas fa-th-large"></i>
  </button>
</div>

<div id="pub-list-view" style="display: none;">
{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
</div>

<div id="pub-grid-view">
  <div class="pub-grid">
    {% for post in site.publications reversed %}
    <a href="{{ base_path }}{{ post.url }}" class="pub-grid-card archive__item">
      <div class="pub-grid-info">
        <h3>{{ post.short_title | default: post.title }}</h3>
      </div>
      <div class="pub-grid-thumb">
        {% if post.thumbnail %}
        <img src="{{ post.thumbnail }}" alt="{{ post.short_title | default: post.title }}">
        {% else %}
        <div class="pub-grid-thumb-placeholder"><i class="fas fa-file-alt"></i></div>
        {% endif %}
      </div>
      <div class="pub-grid-info pub-grid-info-bottom">
        <p class="pub-grid-venue"><i>{{ post.venue }}</i> — {{ post.date | date: "%Y" }}</p>
        {% if post.excerpt %}<p class="pub-grid-excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</p>{% endif %}
        {% if post.arxivurl or post.paperurl or post.pdfurl %}
        <div class="cv-pill-container" style="margin-top: 0.5rem; margin-bottom: 0;">
          {% if post.arxivurl %}
          <span class="cv-pill cv-pill-neutral" style="font-size: 0.7em; padding: 0.15em 0.5em;" onclick="event.preventDefault(); window.open('{{ post.arxivurl }}', '_blank');"><i class="ai ai-arxiv"></i> arXiv</span>
          {% endif %}
          {% if post.paperurl %}
          <span class="cv-pill cv-pill-neutral" style="font-size: 0.7em; padding: 0.15em 0.5em;" onclick="event.preventDefault(); window.open('{{ post.paperurl }}', '_blank');"><i class="fas fa-globe"></i> Journal</span>
          {% endif %}
          {% if post.pdfurl %}
          <span class="cv-pill cv-pill-neutral" style="font-size: 0.7em; padding: 0.15em 0.5em;" onclick="event.preventDefault(); window.open('{{ post.pdfurl }}', '_blank');"><i class="fas fa-file-pdf"></i> PDF</span>
          {% endif %}
        </div>
        {% endif %}
      </div>
    </a>
    {% endfor %}
  </div>
</div>

<script>
(function() {
  var listBtn = document.getElementById('pub-list-btn');
  var gridBtn = document.getElementById('pub-grid-btn');
  var listView = document.getElementById('pub-list-view');
  var gridView = document.getElementById('pub-grid-view');

  function showList() {
    listView.style.display = '';
    gridView.style.display = 'none';
    listBtn.classList.add('active');
    gridBtn.classList.remove('active');
    localStorage.setItem('pub-view', 'list');
  }

  function showGrid() {
    listView.style.display = 'none';
    gridView.style.display = '';
    gridBtn.classList.add('active');
    listBtn.classList.remove('active');
    localStorage.setItem('pub-view', 'grid');
  }

  listBtn.addEventListener('click', showList);
  gridBtn.addEventListener('click', showGrid);

  if (localStorage.getItem('pub-view') === 'list') showList();
})();
</script>
