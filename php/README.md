# University Lookup API - PHP Package

University Lookup is a university search and academic domain API covering about 12,000 institutions worldwide. Search by name and country, or pass a domain or email address to learn whether it belongs to a university, and for US institutions get IPEDS details such as control, level and highest degree, while paid plans add enrollment, admission rate and tuition.

## Installation

Install via Composer:

```bash
composer require apiverve/universitylookup
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Universitylookup\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute([
    'name' => 'Stanford',
    'domain' => 'stanford.edu',
    'email' => 'jane@cs.stanford.edu',
    'country' => 'US',
    'state' => 'CA',
    'limit' => 10
]);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Universitylookup\Client;
use APIVerve\Universitylookup\Exceptions\APIException;
use APIVerve\Universitylookup\Exceptions\ValidationException;

try {
    $response = $client->execute(['name' => 'Stanford', 'domain' => 'stanford.edu', 'email' => 'jane@cs.stanford.edu', 'country' => 'US', 'state' => 'CA', 'limit' => 10]);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
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

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/universitylookup?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/universitylookup?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/universitylookup?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
