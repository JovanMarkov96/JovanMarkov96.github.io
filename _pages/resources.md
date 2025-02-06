---
layout: archive
title: "Resources"
permalink: /resources/
author_profile: true
---

## Resources

Here are some useful resources:

{% if site.pages %}
    {% for page in site.pages %}
        {% if page.path contains '_resources' and page.ext == '.md' %}
            - [{{ page.title }}]({{ page.url }})
        {% endif %}
    {% endfor %}
{% endif %}

