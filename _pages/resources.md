---
layout: archive
title: "Resources"
permalink: /resources/
author_profile: true
---

{% include base_path %}

Here are some useful resources:

<div class="project-grid">
{% assign sorted_resources = site.resources | sort: 'order' %}
{% for post in sorted_resources %}
  {% include resource-card.html %}
{% endfor %}
</div>
