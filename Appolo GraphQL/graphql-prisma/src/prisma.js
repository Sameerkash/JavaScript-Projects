import { Prisma } from 'prisma-graphql';


const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: 'localhost:4466'
});

