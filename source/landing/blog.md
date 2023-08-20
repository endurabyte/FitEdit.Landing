---
layout: default
---

<main>
<h1>Blog</h1>

<ul>
  {% for post in site.posts %}
      <h2><a href="{{ post.url }}">{{ post.date | date: "%F" }} | {{ post.title }}</a></h2>
  {% endfor %}
</ul>

<hr>

{% include email.html %}

</main>
