// webhook.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Đặt webhook của bạn ở đây
app.post('/webhook', (req, res) => {
  // Logic xử lý webhook
  res.send('Webhook received!');
});

app.listen(port, () => {
  console.log(`Webhook server listening at http://localhost:${port}`);
});
