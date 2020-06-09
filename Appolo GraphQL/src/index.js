import { GraphQLServer, PubSub } from 'graphql-yoga';
import uuidv4 from 'uuid/v4';

import db from './db';
import User from './resolvers/user';
import Post from './resolvers/post';
import Comment from './resolvers/comment';
import Query from './resolvers/query';
import Mutation from './resolvers/mutation';


const pubSub = new PubSub();

const server = new GraphQLServer({
    typeDefs: "./src/schema.graphql",
    resolvers: {
        Query,
        Mutation,
        User,
        Post,
        Comment
    },
    context: {
        db,
        pubSub
    },
});

server.start(() => {
    console.log('The server is up!');
});