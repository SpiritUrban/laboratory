const { PrismaClient } = require('@prisma/client')
const { createYoga } = require('graphql-yoga')
const { createServer } = require('http')
const express = require('express');

const prisma = new PrismaClient();
const app = express();

async function doIt(){
    await prisma.user.create({
        data: {
            name: 'sdfsd',
            email: 'sdfsdfg',
        },
    });
}
//doIt()

app.get('/', async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


// Определение схемы GraphQL
const typeDefs = `
  type Query {
    info: String!
    users: [User!]!
  }

  type Mutation {
    createUser(name: String!, email: String!): User!
  }
  
  type User {
    id: ID!
    email: String!
    name: String
  }
`

// Реализация схемы GraphQL
const resolvers = {
    Query: {
        info: () => `This is a GraphQL API.`,
        users: async (parent, args, context) => {
            return context.prisma.user.findMany()
        },
    },

    Mutation: {
      createUser: async (parent, args, context) => {
        const { name, email } = args;
        return context.prisma.user.create({
          data: {
            name,
            email,
          },
        });
      },
    },
}


const { makeExecutableSchema } = require('graphql-tools');

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

function main() {
    const yoga = createYoga({ 
        schema,
        context: () => ({ prisma }),
    })
    const server = createServer(yoga)
    server.listen(4000, () => {
        console.info('Server is running on http://localhost:4000/graphql')
    })
}

main();