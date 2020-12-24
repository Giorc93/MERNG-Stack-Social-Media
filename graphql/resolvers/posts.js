//Import models
import Post from "../../models/Post";

module.exports = {
  Query: {
    async getPosts() {
      try {
        const posts = await Post.find();
        return posts;
      } catch (err) {
        console.log("Something went wrong", err);
      }
    },
  },
};
