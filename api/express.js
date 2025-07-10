const express = require('express');
const serverless = require('serverless-http');

const app = express();

// 中介層（可選）
app.use(express.json());

// 新增的根路徑處理常式
app.get('/', (req, res) => {
  res.send('Welcome to the Express App!');
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express in Vercel!' });
});

module.exports = serverless(app);