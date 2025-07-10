const express = require('express');
const serverless = require('serverless-http');

const app = express();

// 中介層（可選）
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express in Vercel!' });
});

module.exports = serverless(app);
