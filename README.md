# Clockwise.MD

Web site for Clockwise.MD

## To run locally

- Update gems: `bundle`
- Run a full build: `jekyll build`
- Serve files locally: `jekyll serve`

## To update the site

Just commit changes and push your changes, the site is rebuilt automatically.

## To make your own

Use [Jekyll](http://jekyllrb.com)

## License

The MIT License (MIT) for Jekyll.

Logos, Content and Clockwise.MD are Copyright Lightshed Healthcare Technologies.


## TODO Scratch

```


<article {% if page.feature-img %}class="feature-image"{% endif %}>
  <header style="background-image: url('{{ site.baseurl }}/{{ page.feature-img }}')">
    <h1 class="title">{{ page.title }}</h1>
  </header>
  <section class="post-content">{{ content }}</section>
</article>


<div class="branding">
  {% if site.theme_settings.gravatar %}
  <a href="{{ site.baseurl }}/">
    <img class="avatar" src="https://secure.gravatar.com/avatar/{{ site.theme_settings.gravatar }}?s=100" alt=""/>
  </a>
  {% elsif site.theme_settings.avatar %}
  <a href="{{ site.baseurl }}/">
    <img class="avatar" src="{{ site.baseurl }}/img/{{ site.theme_settings.avatar }}" alt=""/>
  </a>
  {% endif %}
  <h1 class="site-title">
    <a href="{{ site.baseurl }}/">{{ site.theme_settings.title }}</a>
  </h1>
</div>
<nav class="site-nav">
  <ul>
    {% for page in site.pages %}
    {% if page.title and page.hide != true %}
    <li>
      <a class="page-link" href="{{ page.url | prepend: site.baseurl }}">
        {{ page.title }}
      </a>
    </li>
    {% endif %}
    {% endfor %}
  </ul>
</nav>


<div class="home">
  {% if site.theme_settings.header_text %}
  <div class="call-out"
  style="background-image: url('{{ site.baseurl }}/{{ site.theme_settings.header_text_feature_image }}')">
    {{ site.theme_settings.header_text }}
  </div>
  {% endif %}

  <div class="posts">
    {% for post in paginator.posts %}
    <div class="post-teaser">
      <header>
        <h1>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">
            {{ post.title }}
          </a>
        </h1>
        <p class="meta">
          {{ post.date | date: "%B %-d, %Y" }}
        </p>
      </header>
      <div class="excerpt">
        {{ post.excerpt }}
        <a class="button" href="{{ post.url | prepend: site.baseurl }}">
          {{ site.theme_settings.str_continue_reading }}
        </a>
      </div>
    </div>
    {% endfor %}
  </div>

  {% if paginator.total_pages > 1 %}
  <div class="pagination">
    {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path | prepend: site.baseurl | replace: '//', '/' }}" class="button" >
      <i class="fa fa-chevron-left"></i>
      {{ site.theme_settings.str_prev }}
    </a>
    {% endif %}
    {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path | prepend: site.baseurl | replace: '//', '/' }}" class="button" >
      {{ site.theme_settings.str_next }}
      <i class="fa fa-chevron-right"></i>
    </a>
    {% endif %}
  </div>
  {% endif %}
</div>
```
