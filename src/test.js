
fetch('http://example.com/api')
.then((response) => response.json())
.then((data) => console.log(data));


fetch('https://api.openai.com/v1/engines/davinci/completions', {
  method: 'POST',
  body: JSON.stringify({
    prompt: 'The quick brown fox jumps over the lazy',
    max_tokens: 50
  }),
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${api_key}`
  }
}).then(res => res.json()).then(data => console.log(data.choices[0].text));