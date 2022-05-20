import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  name: String,
  avatar: String,
  creator: String,
  coverURL: String,
  comments: { type: [String], default: [] },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
