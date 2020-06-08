const Mutation =
{
    createUser(parent, args, { db }, info) {
        const emailTaken = db.users.some((user) => user.email === args.data.email);

        if (emailTaken) {
            throw new Error('Email taken');
        }

        const user = {
            id: uuidv4(),
            ...args.data
        };

        db.users.push(user);

        return user;
    },
    deleteUser(parent, args, { db }, info) {
        const userIndex = db.users.findIndex((user) => user.id === args.id);

        if (userIndex === -1) {
            throw new Error('User not found');
        }

        const deletedUsers = db.users.splice(userIndex, 1);

        db.posts = db.posts.filter((post) => {
            const match = post.author === args.id;

            if (match) {
                db.comments = db.comments.filter((comment) => comment.post !== post.id);
            }

            return !match;
        });
        db.comments = db.comments.filter((comment) => comment.author !== args.id);

        return deletedUsers[0];
    },
    createPost(parent, args, { db }, info) {
        const userExists = db.users.some((user) => user.id === args.data.author);

        if (!userExists) {
            throw new Error('User not found');
        }

        const post = {
            id: uuidv4(),
            ...args.data
        };

        db.posts.push(post);

        return post;
    },
    createComment(parent, args, { db }, info) {
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

