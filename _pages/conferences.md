---
layout: archive
title: "Conferences"
permalink: /conferences/
author_profile: true
---

{% for post in site.conferences %}
    {% include archive-single-conference.html post=post %}
{% endfor %}
