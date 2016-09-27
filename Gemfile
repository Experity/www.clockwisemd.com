source "https://rubygems.org"

# core
require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)
gem 'github-pages', versions['github-pages'] # includes gem 'jekyll'

# addons
gem 'therubyracer'
gem 'jekyll-paginate'

# deployment
gem 's3_website'

