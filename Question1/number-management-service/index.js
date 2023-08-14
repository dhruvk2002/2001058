const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.get('/numbers', async (req, res) => {
  try {
    const urls = req.query.url;
    if (!urls) {
      res.status(400).json({ error: 'No URLs provided in query parameters' });
      return;
    }

    const urlsArray = Array.isArray(urls) ? urls : [urls];
    const validUrls = [];

    for (const url of urlsArray) {
      try {
        const response = await axios.get(url, { timeout: 500 });
        if (response.data && Array.isArray(response.data.numbers)) {
          validUrls.push(response.data.numbers);
        }
      } catch (error) {
        console.error(`Error fetching data from URL: ${url}`);
      }
    }

    const mergedNumbers = Array.from(new Set(validUrls.flat())).sort((a, b) => a - b);

    res.json({ numbers: mergedNumbers });
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
