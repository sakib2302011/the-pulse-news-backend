const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;


// middleware
app.use(cors({
  origin: ['http://localhost:5173', 'https://the-pulse-news.web.app/'], // Add allowed origins here
  credentials: true, // Enable cookies if needed
}));
app.use(express.json());

app.get('/Breakings', async (req, res) => {
  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWSAPI_KEY}`);
    
    if (!response.ok) {
      return res.status(response.status).json({ error: response.statusText });
    }
    
    const data = await response.json();
    res.json(data); // Correctly send data using Express `res`
  } catch (error) {
    console.error('Error fetching news:', error.message);
    res.status(500).json({ error: 'Failed to fetch news.' });
  }
});
app.get('/National', async (req, res) => {
  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWSAPI_KEY}`);
    
    if (!response.ok) {
      return res.status(response.status).json({ error: response.statusText });
    }
    
    const data = await response.json();
    res.json(data); // Correctly send data using Express `res`
  } catch (error) {
    console.error('Error fetching news:', error.message);
    res.status(500).json({ error: 'Failed to fetch news.' });
  }
});
app.get('/Business', async (req, res) => {
  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?category=Business&apiKey=${process.env.NEWSAPI_KEY}`);
    
    if (!response.ok) {
      return res.status(response.status).json({ error: response.statusText });
    }
    
    const data = await response.json();
    res.json(data); // Correctly send data using Express `res`
  } catch (error) {
    console.error('Error fetching news:', error.message);
    res.status(500).json({ error: 'Failed to fetch news.' });
  }
});
app.get('/Entertainment', async (req, res) => {
  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?category=Entertainment&apiKey=${process.env.NEWSAPI_KEY}`);
    
    if (!response.ok) {
      return res.status(response.status).json({ error: response.statusText });
    }
    
    const data = await response.json();
    res.json(data); // Correctly send data using Express `res`
  } catch (error) {
    console.error('Error fetching news:', error.message);
    res.status(500).json({ error: 'Failed to fetch news.' });
  }
});
app.get('/General', async (req, res) => {
  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?category=General&apiKey=${process.env.NEWSAPI_KEY}`);
    
    if (!response.ok) {
      return res.status(response.status).json({ error: response.statusText });
    }
    
    const data = await response.json();
    res.json(data); // Correctly send data using Express `res`
  } catch (error) {
    console.error('Error fetching news:', error.message);
    res.status(500).json({ error: 'Failed to fetch news.' });
  }
});
app.get('/Health', async (req, res) => {
  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?category=Health&apiKey=${process.env.NEWSAPI_KEY}`);
    
    if (!response.ok) {
      return res.status(response.status).json({ error: response.statusText });
    }
    
    const data = await response.json();
    res.json(data); // Correctly send data using Express `res`
  } catch (error) {
    console.error('Error fetching news:', error.message);
    res.status(500).json({ error: 'Failed to fetch news.' });
  }
});
app.get('/Science', async (req, res) => {
  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?category=Science&apiKey=${process.env.NEWSAPI_KEY}`);
    
    if (!response.ok) {
      return res.status(response.status).json({ error: response.statusText });
    }
    
    const data = await response.json();
    res.json(data); // Correctly send data using Express `res`
  } catch (error) {
    console.error('Error fetching news:', error.message);
    res.status(500).json({ error: 'Failed to fetch news.' });
  }
});
app.get('/Sports', async (req, res) => {
  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?category=Sports&apiKey=${process.env.NEWSAPI_KEY}`);
    
    if (!response.ok) {
      return res.status(response.status).json({ error: response.statusText });
    }
    
    const data = await response.json();
    res.json(data); // Correctly send data using Express `res`
  } catch (error) {
    console.error('Error fetching news:', error.message);
    res.status(500).json({ error: 'Failed to fetch news.' });
  }
});
app.get('/Technology', async (req, res) => {
  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?category=Technology&apiKey=${process.env.NEWSAPI_KEY}`);
    
    if (!response.ok) {
      return res.status(response.status).json({ error: response.statusText });
    }
    
    const data = await response.json();
    res.json(data); // Correctly send data using Express `res`
  } catch (error) {
    console.error('Error fetching news:', error.message);
    res.status(500).json({ error: 'Failed to fetch news.' });
  }
});
app.get('/news/:query', async (req, res) => {
  try {
    const searchQuery = req.params.query;
    const response = await fetch(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${process.env.NEWSAPI_KEY}`);
    
    if (!response.ok) {
      return res.status(response.status).json({ error: response.statusText });
    }
    
    const data = await response.json();
    res.json(data); // Correctly send data using Express `res`
  } catch (error) {
    console.error('Error fetching news:', error.message);
    res.status(500).json({ error: 'Failed to fetch news.' });
  }
});
app.get('/news/:query/:startDate/:endDate/:sortBy', async (req, res) => {
  try {
    const searchQuery = req.params.query;
    const startDate = req.params.startDate;
    const endDate = req.params.endDate;
    const sortBy = req.params.sortBy;
    const response = await fetch(`https://newsapi.org/v2/everything?q=${searchQuery}${startDate ? `&from=${startDate}` : ""}${endDate ? `&to=${endDate}` : ""}${sortBy ? `&sortBy=${sortBy}` : ""}&apiKey=${process.env.NEWSAPI_KEY}`);
    
    if (!response.ok) {
      return res.status(response.status).json({ error: response.statusText });
    }
    
    const data = await response.json();
    res.json(data); // Correctly send data using Express `res`
  } catch (error) {
    console.error('Error fetching news:', error.message);
    res.status(500).json({ error: 'Failed to fetch news.' });
  }
});
app.get('/', (req, res)=>{
  res.send("Backend server running for the pulse news");
})
app.listen(port, ()=>{
  console.log(`Server is running on port: ${port}`);
})