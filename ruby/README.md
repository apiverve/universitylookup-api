# University Lookup API - Ruby Gem

University Lookup is a university search and academic domain API covering about 12,000 institutions worldwide. Search by name and country, or pass a domain or email address to learn whether it belongs to a university, and for US institutions get IPEDS details such as control, level and highest degree, while paid plans add enrollment, admission rate and tuition.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_universitylookup'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_universitylookup
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_universitylookup'

# Initialize the client
client = APIVerve::Universitylookup::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({
  name: "Stanford",
  domain: "stanford.edu",
  email: "jane@cs.stanford.edu",
  country: "US",
  state: "CA",
  limit: 10
})

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ name: "Stanford", domain: "stanford.edu", email: "jane@cs.stanford.edu", country: "US", state: "CA", limit: 10 })
  puts response["data"]
rescue APIVerve::Universitylookup::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Universitylookup::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Universitylookup::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "domain": null,
    "isAcademicDomain": null,
    "matchType": null,
    "matchedDomain": null,
    "count": 1,
    "totalMatches": 1,
    "universities": [
      {
        "id": "us-166683",
        "name": "Massachusetts Institute of Technology",
        "aliases": [
          "MIT",
          "M.I.T."
        ],
        "country": "United States",
        "countryCode": "US",
        "stateProvince": "MA",
        "city": "Cambridge",
        "address": "77 Massachusetts Avenue",
        "zip": "02139-4301",
        "latitude": 42.359243,
        "longitude": -71.093226,
        "timezone": "America/New_York",
        "domains": [
          "mit.edu",
          "web.mit.edu"
        ],
        "website": "https://web.mit.edu/",
        "phone": "6172531000",
        "ipedsUnitId": 166683,
        "control": "private_nonprofit",
        "level": "four_year",
        "highestDegree": "doctorate",
        "offersUndergraduate": true,
        "offersGraduate": true,
        "hbcu": false,
        "tribal": false,
        "landGrant": true,
        "locale": "city_midsize",
        "sizeBand": "10000_19999",
        "system": null,
        "stats": {
          "enrollmentTotal": 11920,
          "enrollmentUndergraduate": 4576,
          "enrollmentGraduate": 7344,
          "studentFacultyRatio": 3,
          "admissionRate": 5,
          "tuitionInDistrict": 60156,
          "tuitionInState": 60156,
          "tuitionOutOfState": 60156,
          "graduateTuitionInState": 59750,
          "graduateTuitionOutOfState": 59750,
          "roomAndBoard": 19390,
          "tuitionYear": "2023-24",
          "enrollmentYear": 2023
        }
      }
    ]
  }
}
```

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/universitylookup?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/universitylookup?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/universitylookup?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
