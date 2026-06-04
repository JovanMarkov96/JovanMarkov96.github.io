---
layout: single
collection: resources
title: "Self-Study Resources for Mathematics"
permalink: /resources/math-resources/
author_profile: true
order: 3
excerpt: "A curated path through mathematics — books, lecture series, and online courses organized by topic, from high-school foundations up to advanced material."
teaser_light: '/images/resource_thumbnails/math-light.svg'
teaser_dark: '/images/resource_thumbnails/math-dark.svg'
cta_label: "Open resources"
---

{%- assign math = site.data.math_resources -%}

<p class="phys-lead">Mathematics is best learned actively, with the right book and a good explainer at your side. Below is a curated path — the textbooks, lecture series, and online courses I'd point a motivated self-learner to, organized by topic and roughly ordered from high-school foundations toward more advanced material. Pick a tile to jump straight to a subject; every book links to a neutral catalogue page so you can track it down at a library or wherever you prefer.</p>

<p class="phys-tip"><i class="fas fa-magnifying-glass" aria-hidden="true"></i> Tip: press <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>F</kbd> to find a specific book or topic.</p>

<nav class="phys-index" id="phys-top" aria-label="Mathematics topics">
  {%- for group in math.groups -%}
  <div class="phys-index__group">
    <div class="phys-index__grouphead">
      <span class="phys-index__grouplabel">{{ group.name }}</span>
      <span class="phys-index__groupblurb">{{ group.blurb }}</span>
    </div>
    <div class="phys-tilegrid">
      {%- for t in group.topics -%}
      {%- assign nb = t.books | size -%}{%- assign nv = t.videos | size -%}{%- assign nc = t.courses | size -%}{%- assign nm = t.more | size -%}
      <a class="phys-tile" href="#{{ t.id }}">
        <span class="phys-tile__icon">{% include math-topic-icon.html icon=t.icon %}</span>
        <span class="phys-tile__body">
          <span class="phys-tile__name">{{ t.short | default: t.name }}</span>
          <span class="phys-tile__meta">
            {%- assign sep = "" -%}
            {%- if nb > 0 %}{{ nb }} book{% if nb != 1 %}s{% endif %}{% assign sep = " &middot; " %}{% endif -%}
            {%- if nv > 0 %}{{ sep }}{{ nv }} video{% if nv != 1 %}s{% endif %}{% assign sep = " &middot; " %}{% endif -%}
            {%- if nc > 0 %}{{ sep }}{{ nc }} course{% if nc != 1 %}s{% endif %}{% assign sep = " &middot; " %}{% endif -%}
            {%- if nm > 0 %}{{ sep }}{{ nm }} link{% if nm != 1 %}s{% endif %}{% endif -%}
          </span>
        </span>
        <span class="phys-tile__arrow" aria-hidden="true">&rarr;</span>
      </a>
      {%- endfor -%}
    </div>
  </div>
  {%- endfor -%}

  <div class="phys-index__group">
    <div class="phys-index__grouphead">
      <span class="phys-index__grouplabel">Go deeper</span>
      <span class="phys-index__groupblurb">Notes, calculators, and problem-solving communities.</span>
    </div>
    <div class="phys-tilegrid">
      <a class="phys-tile" href="#tools">
        <span class="phys-tile__icon">{% include math-topic-icon.html icon="tools" %}</span>
        <span class="phys-tile__body">
          <span class="phys-tile__name">Tools &amp; References</span>
          <span class="phys-tile__meta">{{ math.tools | size }} reference hubs</span>
        </span>
        <span class="phys-tile__arrow" aria-hidden="true">&rarr;</span>
      </a>
    </div>
  </div>
</nav>

{%- for group in math.groups -%}
{%- for t in group.topics -%}
<section class="phys-section" id="{{ t.id }}">
  <header class="phys-section__head">
    <span class="phys-section__icon">{% include math-topic-icon.html icon=t.icon %}</span>
    <div class="phys-section__heading">
      <h2 class="phys-section__title">{{ t.name }}</h2>
      {%- if t.tagline %}<p class="phys-section__tagline">{{ t.tagline }}</p>{% endif -%}
    </div>
    <a class="phys-section__top" href="#phys-top"><i class="fas fa-arrow-up" aria-hidden="true"></i> Topics</a>
  </header>

  {%- if t.books and t.books != empty -%}
  <div class="phys-block">
    <h3 class="phys-block__label"><i class="fas fa-book-open" aria-hidden="true"></i> Books</h3>
    <ul class="phys-booklist">
      {%- for b in t.books -%}
      {%- if b.details -%}{%- assign bookurl = b.details -%}{%- else -%}{%- capture q -%}{{ b.title }} {{ b.by }}{%- endcapture -%}{%- assign qenc = q | url_encode -%}{%- assign bookurl = "https://www.google.com/search?tbm=bks&q=" | append: qenc -%}{%- endif -%}
      <li class="phys-book">
        <p class="phys-book__title">{{ b.title }}{% if b.by %} <span class="phys-book__by">&mdash; {{ b.by }}</span>{% endif %}</p>
        {%- if b.desc %}<p class="phys-book__desc">{{ b.desc }}</p>{% endif -%}
        <span class="phys-chips">
          <a class="cv-pill cv-pill-neutral phys-chip" href="{{ bookurl }}" target="_blank" rel="noopener noreferrer"><i class="fas fa-book" aria-hidden="true"></i> Details</a>
          {%- if b.free %}<a class="cv-pill cv-pill-neutral phys-chip" href="{{ b.free }}" target="_blank" rel="noopener noreferrer"><i class="fas fa-unlock" aria-hidden="true"></i> Read free</a>{% endif -%}
        </span>
      </li>
      {%- endfor -%}
    </ul>
  </div>
  {%- endif -%}

  {% include phys-linklist.html items=t.videos label="Lectures & videos" fa="fa-circle-play" %}
  {% include phys-linklist.html items=t.courses label="Online courses" fa="fa-graduation-cap" %}
  {% include phys-linklist.html items=t.more label="More resources" fa="fa-link" %}
</section>
{%- endfor -%}
{%- endfor -%}

<section class="phys-section" id="tools">
  <header class="phys-section__head">
    <span class="phys-section__icon">{% include math-topic-icon.html icon="tools" %}</span>
    <div class="phys-section__heading">
      <h2 class="phys-section__title">Tools &amp; References</h2>
      <p class="phys-section__tagline">Calculators, lecture notes, and communities to lean on along the way.</p>
    </div>
    <a class="phys-section__top" href="#phys-top"><i class="fas fa-arrow-up" aria-hidden="true"></i> Topics</a>
  </header>
  {% include phys-linklist.html items=math.tools label="Reference hubs" fa="fa-screwdriver-wrench" two=true %}
</section>

<p class="phys-outro">These should give you a solid foundation for learning mathematics, whatever your starting point. Happy learning!</p>
