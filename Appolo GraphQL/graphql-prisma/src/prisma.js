import { Prisma } from 'prisma-binding';


const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: 'http://localhost:4466'
});

// prisma.mutation.createPost({
//     data: {
//         title: "My new cpurse",
//         body: "find it here",
//         published: true,
//         author: {
//             connect: {
//                 id: "10"
//             }
//         }
//     }
// }, '{ id title body }').then((data) => { console.log(JSON.stringify(data)); }).catch((err) => { console.log(err); });

prisma.query.users(null, '{ id name email posts{ id title}}').then((data) => { console.log(JSON.stringify(data)); });