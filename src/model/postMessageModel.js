import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);
export default PostMessage;

// _id : 663373e6b300d7d4137818fa
// title : "Day at the Tigris River"
// message : "A wonderful day spent by the Tigris River enjoying the views and the g…"
// creator : "Ahmed"
// tags [0 : "River,Tigris,Scenery"]
// selectedFile : "data:image/jpeg;base64,/9j/7gAhQWRvYmUAZ"
// likeCount : 0
// createdAt : 2024-05-02T10:21:49.933+00:00
// __v : 0
