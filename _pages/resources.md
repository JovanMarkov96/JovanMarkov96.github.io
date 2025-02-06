---
layout: resources-archive
title: "Resources"
permalink: /resources/
author_profile: true
---

## Resources

Here are some useful resources:

{% for resource in site.resources %}
    {% include archive-single.html %}
{% endfor %}

