---
layout: archive
title: "Resources"
permalink: /resources/
author_profile: true
---

{% include base_path %}

Here are some useful resources:

<div class="project-grid">
{% for post in site.resources %}
  {% include resource-card.html %}
{% endfor %}
</div>
