using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.UniversityLookup
{
    /// <summary>
    /// Query options for the University Lookup API
    /// </summary>
    public class UniversityLookupQueryOptions
    {
        /// <summary>
        /// University name or words from it; US abbreviations match too
        /// </summary>
        [JsonProperty("name")]
        public string Name { get; set; }

        /// <summary>
        /// Domain to check, e.g. stanford.edu; subdomains match their institution
        /// </summary>
        [JsonProperty("domain")]
        public string Domain { get; set; }

        /// <summary>
        /// Email address to check; its domain is used
        /// </summary>
        [JsonProperty("email")]
        public string Email { get; set; }

        /// <summary>
        /// Country name or two-letter code
        /// </summary>
        [JsonProperty("country")]
        public string Country { get; set; }

        /// <summary>
        /// State or province (two-letter code in the US)
        /// </summary>
        [JsonProperty("state")]
        public string State { get; set; }

        /// <summary>
        /// Maximum universities to return (1-50)
        /// </summary>
        [JsonProperty("limit")]
        public int? Limit { get; set; }
    }
}
