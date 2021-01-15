# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "gcweb-jekyll"
  spec.version       = "0.1.0"
  spec.authors       = ["Government of Canada"]
  spec.email         = ["david.elisma@tbs-sct.gc.ca"]

  spec.summary       = "gcweb-jekyll is a GCweb variant for GC websites hosted on GitHub Pages"
  spec.homepage      = "https://github.com/wet-boew/GCweb-jekyll"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(_data|_layouts|_includes|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.8"

  spec.add_development_dependency "bundler", "~> 1.16"
  spec.add_development_dependency "rake", "~> 12.0"
end


Gem::Specification.new do |s|
  s.name = 'jekyll-file-size'
  s.version = '0.0.7'

  s.authors = %w(awk)
  s.email = %w(self@awk.space)

  s.summary = %q{Jekyll plugin to retrieve size of file in bytes}
  s.homepage = 'https://github.com/awkspace/jekyll-file-size'
  s.license = 'MIT'

  s.files = %w(Gemfile lib/jekyll-file-size.rb)
  s.require_paths = %w(lib)
end