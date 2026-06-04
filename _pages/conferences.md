---
layout: archive
title: "Conferences"
permalink: /conferences/
side_panel: none
---

{% for post in site.conferences reversed %}
    {% include archive-single-conference.html post=post %}
{% endfor %}
