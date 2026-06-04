---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% include base_path %}

{% if site.author.googlescholar %}
<p style="font-size: 1.05rem; margin-bottom: 1.5rem;">You can find all of my publications at
  <a href="{{site.author.googlescholar}}" target="_blank" rel="noopener noreferrer" style="text-decoration: none;">
    <span class="cv-pill cv-pill-neutral" style="font-size: 0.8em; padding: 0.2em 0.6em; cursor: pointer;"><i class="ai ai-google-scholar"></i> Google Scholar</span>
  </a>
</p>
{% endif %}

<div class="pub-view-toggle">
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
    <div class="project-card">
      <div class="project-card__media">
        {% if post.thumbnail_light or post.thumbnail_dark %}
        <img class="project-card__image pc-img--light" src="{{ post.thumbnail_light | default: post.thumbnail_dark | relative_url }}" alt="{{ post.short_title | default: post.title }}" loading="lazy">
        <img class="project-card__image pc-img--dark" src="{{ post.thumbnail_dark | default: post.thumbnail_light | relative_url }}" alt="{{ post.short_title | default: post.title }}" loading="lazy">
        {% elsif post.thumbnail %}
        <img class="project-card__image" src="{{ post.thumbnail | relative_url }}" alt="{{ post.short_title | default: post.title }}" loading="lazy">
        {% else %}
        <div class="project-card__image-placeholder"><i class="fas fa-file-alt"></i></div>
        {% endif %}
      </div>
      <div class="project-card__content">
        <h3 class="project-card__title">
          <a class="project-card__primary" href="{{ post.url | relative_url }}">{{ post.short_title | default: post.title }}</a>
        </h3>
        <p class="pub-venue"><i>{{ post.venue }}</i> &middot; {{ post.date | date: "%Y" }}</p>
        {% if post.excerpt %}<p class="project-card__excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</p>{% endif %}
      </div>
      {% if post.arxivurl or post.paperurl or post.pdfurl %}
      <div class="project-card__footer project-card__footer--links">
        {% if post.arxivurl %}
        <a class="project-card__code" href="{{ post.arxivurl }}" target="_blank" rel="noopener noreferrer"><i class="ai ai-arxiv"></i> arXiv</a>
        {% endif %}
        {% if post.paperurl %}
        <a class="project-card__code" href="{{ post.paperurl }}" target="_blank" rel="noopener noreferrer"><i class="fas fa-globe"></i> Journal</a>
        {% endif %}
        {% if post.pdfurl %}
        <a class="project-card__code" href="{{ post.pdfurl }}" target="_blank" rel="noopener noreferrer"><i class="fas fa-file-pdf"></i> PDF</a>
        {% endif %}
      </div>
      {% endif %}
    </div>
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
