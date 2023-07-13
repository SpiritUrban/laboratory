const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');
const schema = require('./schema/schema.js'); // Графічна схема, яку ми ще створимо

const app = express();

// Дозволити CORS
app.use(cors());

// Підключення до MongoDB
mongoose.connect('mongodb://127.0.0.1/GraphQL', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// Налаштувати міддлвар GraphQL
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true // використовувати інтерфейс GraphiQL для тестування запитів
}));

app.listen(5000, () => console.log('Server is running on port 5000'));
