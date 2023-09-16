const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const users = [];

app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  if (users.some(user => user.email === email)) {
    return res.status(400).json({ message: 'Email already exists' });
  }

  users.push({ username, email, password });
  
  res.status(201).json({ message: 'User registered successfully' });
});

module.exports = app; // Экспорт для тестирования

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`Server running on port ${port}`));
}
