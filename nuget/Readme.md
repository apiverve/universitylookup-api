University Lookup API
============

University Lookup is a university search and academic domain API covering about 12,000 institutions worldwide. Search by name and country, or pass a domain or email address to learn whether it belongs to a university, and for US institutions get IPEDS details such as control, level and highest degree, while paid plans add enrollment, admission rate and tuition.


[![NuGet version](https://img.shields.io/nuget/v/APIVerve.API.UniversityLookup.svg)](https://www.nuget.org/packages/APIVerve.API.UniversityLookup)

This is a .NET wrapper for the [University Lookup API](https://apiverve.com/marketplace/universitylookup?utm_source=nuget&utm_medium=referral&utm_content=readme)

---

## Installation

Using the .NET CLI:
```
dotnet add package APIVerve.API.UniversityLookup
```

Using the Package Manager:
```
nuget install APIVerve.API.UniversityLookup
```

Using the Package Manager Console:
```
Install-Package APIVerve.API.UniversityLookup
```

From within Visual Studio:

1. Open the Solution Explorer
2. Right-click on a project within your solution
3. Click on Manage NuGet Packages
4. Click on the Browse tab and search for "APIVerve.API.UniversityLookup"
5. Click on the APIVerve.API.UniversityLookup package, select the appropriate version in the right-tab and click Install

---

## Configuration

Before using the University Lookup API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=nuget&utm_medium=referral&utm_content=readme)

---

## Quick Start

Here's a simple example to get you started quickly:

```csharp
using System;
using APIVerve.API.UniversityLookup;

class Program
{
    static async Task Main(string[] args)
    {
        // Initialize the API client
        var apiClient = new UniversityLookupAPIClient("[YOUR_API_KEY]");

        var queryOptions = new UniversityLookupQueryOptions {
            Name = "Stanford",
            Domain = "stanford.edu",
            Email = "jane@cs.stanford.edu",
            Country = "US",
            State = "CA",
            Limit = 10
        };

        // Make the API call
        try
        {
            var response = await apiClient.ExecuteAsync(queryOptions);

            if (response.Error != null)
            {
                Console.WriteLine($"API Error: {response.Error}");
            }
            else
            {
                Console.WriteLine("Success!");
                // Access response data using the strongly-typed ResponseObj properties
                Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Exception: {ex.Message}");
        }
    }
}
```

---

## Usage

The University Lookup API documentation is found here: [https://docs.apiverve.com/ref/universitylookup](https://docs.apiverve.com/ref/universitylookup?utm_source=nuget&utm_medium=referral&utm_content=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

###### Authentication
University Lookup API uses API Key-based authentication. When you create an instance of the API client, you can pass your API Key as a parameter.

```csharp
// Create an instance of the API client
var apiClient = new UniversityLookupAPIClient("[YOUR_API_KEY]");
```

---

## Usage Examples

### Basic Usage (Async/Await Pattern - Recommended)

The modern async/await pattern provides the best performance and code readability:

```csharp
using System;
using System.Threading.Tasks;
using APIVerve.API.UniversityLookup;

public class Example
{
    public static async Task Main(string[] args)
    {
        var apiClient = new UniversityLookupAPIClient("[YOUR_API_KEY]");

        var queryOptions = new UniversityLookupQueryOptions {
            Name = "Stanford",
            Domain = "stanford.edu",
            Email = "jane@cs.stanford.edu",
            Country = "US",
            State = "CA",
            Limit = 10
        };

        var response = await apiClient.ExecuteAsync(queryOptions);

        if (response.Error != null)
        {
            Console.WriteLine($"Error: {response.Error}");
        }
        else
        {
            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
        }
    }
}
```

### Synchronous Usage

If you need to use synchronous code, you can use the `Execute` method:

```csharp
using System;
using APIVerve.API.UniversityLookup;

public class Example
{
    public static void Main(string[] args)
    {
        var apiClient = new UniversityLookupAPIClient("[YOUR_API_KEY]");

        var queryOptions = new UniversityLookupQueryOptions {
            Name = "Stanford",
            Domain = "stanford.edu",
            Email = "jane@cs.stanford.edu",
            Country = "US",
            State = "CA",
            Limit = 10
        };

        var response = apiClient.Execute(queryOptions);

        if (response.Error != null)
        {
            Console.WriteLine($"Error: {response.Error}");
        }
        else
        {
            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
        }
    }
}
```

---

## Error Handling

The API client provides comprehensive error handling. Here are some examples:

### Handling API Errors

```csharp
using System;
using System.Threading.Tasks;
using APIVerve.API.UniversityLookup;

public class Example
{
    public static async Task Main(string[] args)
    {
        var apiClient = new UniversityLookupAPIClient("[YOUR_API_KEY]");

        var queryOptions = new UniversityLookupQueryOptions {
            Name = "Stanford",
            Domain = "stanford.edu",
            Email = "jane@cs.stanford.edu",
            Country = "US",
            State = "CA",
            Limit = 10
        };

        try
        {
            var response = await apiClient.ExecuteAsync(queryOptions);

            // Check for API-level errors
            if (response.Error != null)
            {
                Console.WriteLine($"API Error: {response.Error}");
                Console.WriteLine($"Status: {response.Status}");
                return;
            }

            // Success - use the data
            Console.WriteLine("Request successful!");
            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
        }
        catch (ArgumentException ex)
        {
            // Invalid API key or parameters
            Console.WriteLine($"Invalid argument: {ex.Message}");
        }
        catch (System.Net.Http.HttpRequestException ex)
        {
            // Network or HTTP errors
            Console.WriteLine($"Network error: {ex.Message}");
        }
        catch (Exception ex)
        {
            // Other errors
            Console.WriteLine($"Unexpected error: {ex.Message}");
        }
    }
}
```

### Comprehensive Error Handling with Retry Logic

```csharp
using System;
using System.Threading.Tasks;
using APIVerve.API.UniversityLookup;

public class Example
{
    public static async Task Main(string[] args)
    {
        var apiClient = new UniversityLookupAPIClient("[YOUR_API_KEY]");

        // Configure retry behavior (max 3 retries)
        apiClient.SetMaxRetries(3);        // Retry up to 3 times (default: 0, max: 3)
        apiClient.SetRetryDelay(2000);     // Wait 2 seconds between retries

        var queryOptions = new UniversityLookupQueryOptions {
            Name = "Stanford",
            Domain = "stanford.edu",
            Email = "jane@cs.stanford.edu",
            Country = "US",
            State = "CA",
            Limit = 10
        };

        try
        {
            var response = await apiClient.ExecuteAsync(queryOptions);

            if (response.Error != null)
            {
                Console.WriteLine($"API Error: {response.Error}");
            }
            else
            {
                Console.WriteLine("Success!");
                Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Failed after retries: {ex.Message}");
        }
    }
}
```

---

## Advanced Features

### Custom Headers

Add custom headers to your requests:

```csharp
var apiClient = new UniversityLookupAPIClient("[YOUR_API_KEY]");

// Add custom headers
apiClient.AddCustomHeader("X-Custom-Header", "custom-value");
apiClient.AddCustomHeader("X-Request-ID", Guid.NewGuid().ToString());

var queryOptions = new UniversityLookupQueryOptions {
    Name = "Stanford",
    Domain = "stanford.edu",
    Email = "jane@cs.stanford.edu",
    Country = "US",
    State = "CA",
    Limit = 10
};

var response = await apiClient.ExecuteAsync(queryOptions);

// Remove a header
apiClient.RemoveCustomHeader("X-Custom-Header");

// Clear all custom headers
apiClient.ClearCustomHeaders();
```

### Request Logging

Enable logging for debugging:

```csharp
var apiClient = new UniversityLookupAPIClient("[YOUR_API_KEY]", isDebug: true);

// Or use a custom logger
apiClient.SetLogger(message =>
{
    Console.WriteLine($"[LOG] {DateTime.Now:yyyy-MM-dd HH:mm:ss} - {message}");
});

var queryOptions = new UniversityLookupQueryOptions {
    Name = "Stanford",
    Domain = "stanford.edu",
    Email = "jane@cs.stanford.edu",
    Country = "US",
    State = "CA",
    Limit = 10
};

var response = await apiClient.ExecuteAsync(queryOptions);
```

### Retry Configuration

Customize retry behavior for failed requests:

```csharp
var apiClient = new UniversityLookupAPIClient("[YOUR_API_KEY]");

// Set retry options
apiClient.SetMaxRetries(3);           // Retry up to 3 times (default: 0, max: 3)
apiClient.SetRetryDelay(1500);        // Wait 1.5 seconds between retries (default: 1000ms)

var queryOptions = new UniversityLookupQueryOptions {
    Name = "Stanford",
    Domain = "stanford.edu",
    Email = "jane@cs.stanford.edu",
    Country = "US",
    State = "CA",
    Limit = 10
};

var response = await apiClient.ExecuteAsync(queryOptions);
```

### Dispose Pattern

The API client implements `IDisposable` for proper resource cleanup:

```csharp
var queryOptions = new UniversityLookupQueryOptions {
    Name = "Stanford",
    Domain = "stanford.edu",
    Email = "jane@cs.stanford.edu",
    Country = "US",
    State = "CA",
    Limit = 10
};

using (var apiClient = new UniversityLookupAPIClient("[YOUR_API_KEY]"))
{
    var response = await apiClient.ExecuteAsync(queryOptions);
    Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
}
// HttpClient is automatically disposed here
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

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=nuget&utm_medium=referral&utm_content=readme).

---

## Updates
Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=nuget&utm_medium=referral&utm_content=readme) and all legal documents and agreements.

---

## License
Licensed under the MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
