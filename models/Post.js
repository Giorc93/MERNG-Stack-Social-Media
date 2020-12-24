import { model, Schema } from "mongoose";

const postSchema = new Schema({
  body: String,
  username: String,
  createdAt: String,
  comments: [
    {
      body: String,
      username: String,
      createdAt: String,
    },
  ],
  likes: [
    {
      username: String,
      createdAt: String,
    },
  ],
  //Even though MongoDB is a non relational DB it is possible to link our models
  user: {
    type: Schema.Types.ObjectId, //Define the type
    ref: "users", //Define the collection to be linked
  },
});

module.exports = model("Post", postSchema);
