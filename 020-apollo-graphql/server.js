const { ApolloServer, gql } = require('apollo-server');

const tasks = [
  { id: '1', description: 'Buy groceries', completed: false },
  { id: '2', description: 'Clean room', completed: true },
];

const typeDefs = gql`
  type Task {
    id: ID!
    description: String!
    completed: Boolean!
  }

  type Query {
    tasks: [Task]
  }

  type Mutation {
    addTask(description: String!): Task
  }
`;

const resolvers = {
  Query: {
    tasks: () => tasks,
  },
  Mutation: {
    addTask: (_, { description }) => {
      const newTask = { id: String(tasks.length + 1), description, completed: false };
      tasks.push(newTask);
      return newTask;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
