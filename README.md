# [University Lookup API](https://apiverve.com/marketplace/universitylookup?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)

University Lookup is a university search and academic domain API covering about 12,000 institutions worldwide. Search by name and country, or pass a domain or email address to learn whether it belongs to a university, and for US institutions get IPEDS details such as control, level and highest degree, while paid plans add enrollment, admission rate and tuition.

The University Lookup API provides a simple, reliable way to integrate university lookup functionality into your applications. Built for developers who need production-ready university lookup capabilities without the complexity of building from scratch.

**[View API Details →](https://apiverve.com/marketplace/universitylookup?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![API Status](https://img.shields.io/badge/Status-Active-green.svg)](https://apiverve.com/marketplace/universitylookup?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)
[![Method](https://img.shields.io/badge/Method-GET-blue.svg)](#)
[![Platform](https://img.shields.io/badge/Platform-Multi--Platform-orange.svg)](#installation)

**Available on:**
[![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/package/@apiverve/universitylookup)
[![NuGet](https://img.shields.io/badge/NuGet-004880?style=flat&logo=nuget&logoColor=white)](https://www.nuget.org/packages/APIVerve.API.UniversityLookup)
[![PyPI](https://img.shields.io/badge/PyPI-3776AB?style=flat&logo=python&logoColor=white)](https://pypi.org/project/apiverve-universitylookup/)
[![RubyGems](https://img.shields.io/badge/RubyGems-E9573F?style=flat&logo=rubygems&logoColor=white)](https://rubygems.org/gems/apiverve_universitylookup)
[![Packagist](https://img.shields.io/badge/Packagist-F28D1A?style=flat&logo=packagist&logoColor=white)](https://packagist.org/packages/apiverve/universitylookup)
[![Go](https://img.shields.io/badge/Go-00ADD8?style=flat&logo=go&logoColor=white)](#-go)
[![Dart](https://img.shields.io/badge/Dart-0175C2?style=flat&logo=dart&logoColor=white)](https://pub.dev/packages/apiverve_universitylookup)
[![JitPack](https://img.shields.io/badge/JitPack-2E7D32?style=flat&logo=android&logoColor=white)](#-android-jitpack)

---

## Quick Start

### Using JavaScript

```javascript
async function callUniversityLookupAPI() {
    try {
        const params = new URLSearchParams({
            name: 'Stanford',
            domain: 'stanford.edu',
            email: 'jane@cs.stanford.edu',
            country: 'US',
            state: 'CA',
            limit: 10
        });

        const response = await fetch(`https://api.apiverve.com/v1/universitylookup?${params}`, {
            method: 'GET',
            headers: {
                'x-api-key': 'YOUR_API_KEY_HERE'
            }
        });

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

callUniversityLookupAPI();
```

### Using cURL

```bash
curl -X GET "https://api.apiverve.com/v1/universitylookup?name=Stanford&domain=stanford.edu&email=jane%40cs.stanford.edu&country=US&state=CA&limit=10" \
  -H "x-api-key: YOUR_API_KEY_HERE"
```

**Get your API key:** [https://apiverve.com](https://apiverve.com)

**📁 For more examples, see the [examples folder](./examples/)**

---

## Installation

Choose your preferred programming language:

### 📦 NPM (JavaScript/Node.js)

```bash
npm install @apiverve/universitylookup
```

[**View NPM Package →**](https://www.npmjs.com/package/@apiverve/universitylookup) | [**Package Code →**](./npm/)

---

### 🔷 NuGet (.NET/C#)

```bash
dotnet add package APIVerve.API.UniversityLookup
```

[**View NuGet Package →**](https://www.nuget.org/packages/APIVerve.API.UniversityLookup) | [**Package Code →**](./nuget/)

---

### 🐍 Python (PyPI)

```bash
pip install apiverve-universitylookup
```

[**View PyPI Package →**](https://pypi.org/project/apiverve-universitylookup/) | [**Package Code →**](./python/)

---

### 💎 Ruby (RubyGems)

```bash
gem install apiverve_universitylookup
```

[**View RubyGems Package →**](https://rubygems.org/gems/apiverve_universitylookup) | [**Package Code →**](./ruby/)

---

### 🐘 PHP (Packagist)

```bash
composer require apiverve/universitylookup
```

[**View Packagist Package →**](https://packagist.org/packages/apiverve/universitylookup) | [**Package Code →**](./php/)

---

### 🎯 Dart (pub.dev)

```bash
dart pub add apiverve_universitylookup
```

[**View pub.dev Package →**](https://pub.dev/packages/apiverve_universitylookup) | [**Package Code →**](./dart/)

---

### 🤖 Android (JitPack)

```gradle
implementation 'com.github.apiverve:universitylookup-api:1.0.0'
```

[**Package Code →**](./android/)

---

### 🐹 Go

```bash
go get github.com/apiverve/universitylookup-api/go
```

[**Package Code →**](./go/)

---

## Why Use This API?

| Feature | Benefit |
|---------|---------|
| **Multi-language SDKs** | Native packages for JavaScript, Python, C#, Go, and Android |
| **Simple Integration** | Single API key authentication, consistent response format |
| **Production Ready** | 99.9% uptime SLA, served from 24 global regions |
| **Comprehensive Docs** | Full examples, OpenAPI spec, and dedicated support |

---

## Documentation

- 🏠 **API Home:** [University Lookup API](https://apiverve.com/marketplace/universitylookup?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)
- 📚 **API Reference:** [docs.apiverve.com/ref/universitylookup](https://docs.apiverve.com/ref/universitylookup)
- 📖 **OpenAPI Spec:** [openapi.yaml](./openapi.yaml)
- 💡 **Examples:** [examples/](./examples/)

---

## What Can You Build?

The University Lookup API is commonly used for:

- **Web Applications** - Add university lookup features to your frontend or backend
- **Mobile Apps** - Native SDKs for Android development
- **Automation** - Integrate with n8n, Zapier, or custom workflows
- **SaaS Products** - Enhance your product with university lookup capabilities
- **Data Pipelines** - Process and analyze data at scale

---

## API Reference

### Authentication
All requests require an API key in the header:
```
x-api-key: YOUR_API_KEY_HERE
```

Get your API key: [https://apiverve.com](https://apiverve.com)

### Response Format

Every APIVerve endpoint returns the same envelope — check `status`, then read `data`:

```json
{
  "status": "ok",
  "error": null,
  "data": { ... }
}
```

### Example Response

A real response from the University Lookup API:

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

---

## Support & Community

- 🏠 **API Home**: [University Lookup API](https://apiverve.com/marketplace/universitylookup?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)
- 💬 **Support**: [https://apiverve.com/contact](https://apiverve.com/contact)
- 🐛 **Issues**: [GitHub Issues](../../issues)
- 📖 **Documentation**: [https://docs.apiverve.com](https://docs.apiverve.com)
- 🌐 **Website**: [https://apiverve.com](https://apiverve.com)

---

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## Security

For security concerns, please review our [Security Policy](SECURITY.md).

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

Built with ❤️ by [APIVerve](https://apiverve.com)

Copyright © 2026 APIVerve. All rights reserved.
