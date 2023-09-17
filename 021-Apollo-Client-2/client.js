const ApolloClient = require('apollo-client').ApolloClient;
const fetch = require('node-fetch');
const gql = require('graphql-tag');
const createHttpLink = require('apollo-link-http').createHttpLink;
const InMemoryCache = require('apollo-cache-inmemory').InMemoryCache;

const client = new ApolloClient({
  link: createHttpLink({
    uri: 'http://localhost:4000/graphql',
    fetch: fetch
  }),
  cache: new InMemoryCache()
});

client.query({
  query: gql`
    query GetTasks {
      tasks {
        id
        description
        completed
      }
    }
  `
}).then(result => console.log(result));
