import { GraphQLServer } from 'graphql-yoga';

// Type Defs
const typeDefs = `
    type Query{
        hello: String!
    }

`;

// Reesolvers
const resolvers = {

    Query: {
        hello() {
            return " Hello Sam";
        }
    }
};

const server = new GraphQLServer({
    typeDefs,
    resolvers
});

server.start(() => {
    console.log("server up");
});
