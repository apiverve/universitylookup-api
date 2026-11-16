/**
 * University Lookup API - Basic Usage Example
 *
 * This example demonstrates the basic usage of the University Lookup API.
 * API Documentation: https://docs.apiverve.com/ref/universitylookup
 */

const API_KEY = process.env.APIVERVE_API_KEY || 'YOUR_API_KEY_HERE';
const API_URL = 'https://api.apiverve.com/v1/universitylookup';

/**
 * Make a GET request to the University Lookup API
 */
async function callUniversityLookupAPI() {
  try {
    // Query parameters
    const params &#x3D; new URLSearchParams({
            name: &#x27;Stanford&#x27;,
            domain: &#x27;stanford.edu&#x27;,
            email: &#x27;jane@cs.stanford.edu&#x27;,
            country: &#x27;US&#x27;,
            state: &#x27;CA&#x27;,
            limit: 10
        });

    const response = await fetch(`${API_URL}?${params}`, {
      method: 'GET',
      headers: {
        'x-api-key': API_KEY
      }
    });

    // Check if response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Check API response status
    if (data.status === 'ok') {
      console.log('✓ Success!');
      console.log('Response data:', data.data);
      return data.data;
    } else {
      console.error('✗ API Error:', data.error || 'Unknown error');
      return null;
    }

  } catch (error) {
    console.error('✗ Request failed:', error.message);
    return null;
  }
}

// Run the example
callUniversityLookupAPI()
  .then(result => {
    if (result) {
      console.log('\n📊 Final Result:');
      console.log(JSON.stringify(result, null, 2));
    }
  });
