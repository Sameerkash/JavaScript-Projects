const Mutation =
{
    async  createUser(parent, args, { prisma }, info) {
        const emailTaken = await prisma.exists.User({ email: args.data.email });
        if (emailTaken) {
            throw new Error("email Taken");
        }
        const user = await prisma.mutation.createUser({ data: args.data }, info);
        return user;
    },
    async  deleteUser(parent, args, { prisma }, info) {
        const userExists = await prisma.exists.User({ id: args.id });

        if (!userExists) {
            throw new Error("user doesnt exist");
        }

        const user = await prisma.mutation.deleteUser({ where: { id: args.id } }, info);
        return user;

    },
    async updateUser(parent, args, { prisma }, info) {

        return prisma.mutation.updateUser({
            where: {
                id: args.id
            }, data: args.data
        }, info);


    },
    async  createPost(parent, args, { prisma }, info) {

        return prisma.mutation.createPost({
            data: {
                title: args.data.title,
                body: args.data.body,
                published: args.data.published,
                author: {
                    connect: {
                        id: args.data.author
                    }
                }
            }
        }, info);
    },
    createComment(parent, args, { db, pubSub }, info) {
        const userExists = db.users.some((user) => user.id === args.data.author);
        const postExists = db.posts.some((post) => post.id === args.data.post && post.published);

        if (!userExists || !postExists) {
            throw new Error('Unable to find user and post');
        }

        const comment = {
            id: uuidv4(),
            ...args.data
        };

        db.comments.push(comment);
        pubSub.publish(`comment ${args.data.post}`, { comment });


        return comment;
    },

    deletePost(parent, args, { db }, info) {
        const postIndex = db.posts.findIndex((post) => post.id === args.id);

        if (postIndex === -1) {
            throw new Error('User not found');
        }

        const deletedPost = db.posts.splice(postIndex, 1);

        const commentsIndex = db.comments.filter((comment) => comment.post == args.id);

        if (commentsIndex === -1) {
            throw new Error('User not found');
        }
        const deleteComment = db.comments.splice(commentsIndex, 1);

        return deletedPost[0];

    },
    deleteComment(parent, args, { db }) {

        const commentsIndex = db.comments.filter((comment) => comment.id == args.id);

        if (commentsIndex === -1) {
            throw new Error('Comment not found');
        }
        const deletedComment = db.comments.splice(commentsIndex, 1);
        return deletedComment[0];

    }
};

export { Mutation as default };

