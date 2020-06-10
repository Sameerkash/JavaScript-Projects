
const Subscriptions = {
    comment: {
        subscribe(parent, { postId }, { db, pubSub }, info) {
            const post = db.posts.find(post => post.id == postId && post.published);

            if (!post) {
                throw new Error("No such Post");
            }
            pubSub.asyncIterator(`comment ${postId}`);
        }
    },

    posts: {
        subscribe(parent, { postId }, { pubSub }, info) {
            return pubSub.asyncIterator(`post`);
        }
    }
};