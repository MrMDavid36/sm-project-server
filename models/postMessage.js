import Mongoose from "mongoose";

const postSchema = Mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedField: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export const PostMessage = Mongoose.model("PostMessage", postSchema);
