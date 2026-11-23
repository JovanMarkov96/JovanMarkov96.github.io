---
layout: archive
title: "Conferences"
permalink: /conferences/
side_panel: none
---

<div class="tl">
{% assign tl_prev_year = "" %}
{% for post in site.conferences reversed %}
{% assign tl_year = post.date | date: "%Y" %}
{% if tl_year != tl_prev_year %}<div class="tl__year"><span>{{ tl_year }}</span></div>{% assign tl_prev_year = tl_year %}{% endif %}
{% include archive-single-timeline.html %}
{% endfor %}
</div>
