# University Lookup API

University Lookup is a university search and academic domain API covering about 12,000 institutions worldwide. Search by name and country, or pass a domain or email address to learn whether it belongs to a university, and for US institutions get IPEDS details such as control, level and highest degree, while paid plans add enrollment, admission rate and tuition.

[![npm version](https://img.shields.io/npm/v/@apiverve/universitylookup.svg)](https://www.npmjs.com/package/@apiverve/universitylookup)

This is a JavaScript wrapper for the [University Lookup API](https://apiverve.com/marketplace/universitylookup?utm_source=npm&utm_medium=referral&utm_content=readme)

---

## Installation

Using npm:
```shell
npm install @apiverve/universitylookup
```

Using yarn:
```shell
yarn add @apiverve/universitylookup
```

---

## Configuration

Before using the University Lookup API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=npm&utm_medium=referral&utm_content=readme)

---

## Quick Start

[Get started with the Quick Start Guide](https://docs.apiverve.com/quickstart?utm_source=npm&utm_medium=referral&utm_content=readme)

The University Lookup API documentation is found here: [https://docs.apiverve.com/ref/universitylookup](https://docs.apiverve.com/ref/universitylookup?utm_source=npm&utm_medium=referral&utm_content=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

```javascript
const universitylookupAPI = require('@apiverve/universitylookup');
const api = new universitylookupAPI({
    api_key: '[YOUR_API_KEY]'
});
```

---

## Usage

---

### Perform Request

Using the API is simple. All you have to do is make a request. The API will return a response with the data you requested.

```javascript
var query = {
  name: "Stanford",
  domain: "stanford.edu",
  email: "jane@cs.stanford.edu",
  country: "US",
  state: "CA",
  limit: 10
};

api.execute(query, function (error, data) {
    if (error) {
        return console.error(error);
    } else {
        console.log(data);
    }
});
```

---

### Using Promises

You can also use promises to make requests. The API returns a promise that you can use to handle the response.

```javascript
var query = {
  name: "Stanford",
  domain: "stanford.edu",
  email: "jane@cs.stanford.edu",
  country: "US",
  state: "CA",
  limit: 10
};

api.execute(query)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
```

---

### Using Async/Await

You can also use async/await to make requests. The API returns a promise that you can use to handle the response.

```javascript
async function makeRequest() {
    var query = {
  name: "Stanford",
  domain: "stanford.edu",
  email: "jane@cs.stanford.edu",
  country: "US",
  state: "CA",
  limit: 10
};

    try {
        const data = await api.execute(query);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```

---

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

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=npm&utm_medium=referral&utm_content=readme).

---

## Updates

Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=npm&utm_medium=referral&utm_content=readme) and [Privacy Policy](https://apiverve.com/privacy?utm_source=npm&utm_medium=referral&utm_content=readme).

---

## License
Licensed under the MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
