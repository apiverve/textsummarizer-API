using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.TextSummarizer
{
    /// <summary>
    /// Query options for the Text Summarizer API
    /// </summary>
    public class TextSummarizerQueryOptions
    {
        /// <summary>
        /// The text to summarize (up to 5000 characters)
        /// </summary>
        [JsonProperty("text")]
        public string Text { get; set; }

        /// <summary>
        /// The length of the summary (number of sentences)
        /// </summary>
        [JsonProperty("sentences")]
        public double? Sentences { get; set; }
    }
}
