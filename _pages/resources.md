---
layout: archive
title: "Resources"
permalink: /resources/
side_panel: none
---

{% include base_path %}

Here are some useful resources:

<div class="project-grid">
{% assign sorted_resources = site.resources | sort: 'order' %}
{% for post in sorted_resources %}
  {% include resource-card.html %}
{% endfor %}
</div>
