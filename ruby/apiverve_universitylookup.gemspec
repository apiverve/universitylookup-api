# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "apiverve_universitylookup"
  spec.version       = "1.2.6"
  spec.authors       = ["APIVerve"]
  spec.email         = ["hello@apiverve.com"]

  spec.summary       = "University Lookup API - Ruby Client"
  spec.description   = "University Lookup is a university search and academic domain API covering about 12,000 institutions worldwide. Search by name and country, or pass a domain or email address to learn whether it belongs to a university, and for US institutions get IPEDS details such as control, level and highest degree, while paid plans add enrollment, admission rate and tuition."
  spec.homepage      = "https://apiverve.com/marketplace/universitylookup?utm_source=ruby&utm_medium=referral&utm_content=homepage"
  spec.license       = "MIT"
  spec.required_ruby_version = ">= 2.7.0"

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = "https://github.com/apiverve/universitylookup-API/tree/main/ruby"
  spec.metadata["changelog_uri"] = "https://apiverve.com/changelog"
  spec.metadata["documentation_uri"] = "https://docs.apiverve.com/ref/universitylookup"

  spec.files = Dir.glob("{lib}/**/*") + %w[README.md LICENSE]
  spec.require_paths = ["lib"]

  spec.add_dependency "faraday", ">= 1.0", "< 3.0"
  spec.add_dependency "faraday-multipart", "~> 1.0"
  spec.add_dependency "json", "~> 2.0"
end
