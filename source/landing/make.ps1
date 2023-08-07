sudo gem install bundler
sudo gem install jekyll minima jekyll-feed addressable terminal-table webrick jekyll-seo-tag rexml unicode-display_width
bundle install --jobs 4 --retry 3
bundle config path vendor/bundle
bundle exec jekyll build
& ./sync.ps1
