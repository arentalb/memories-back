import PostMessage from "../model/postMessageModel.js";
import mongoose from "mongoose";

export async function getPosts(req, res) {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
}

export async function getPostById(req, res) {
  const postId = req.params.id;
  if (postId === null)
    return res
      .status(404)
      .json({ msg: "This post dose not exist with that id " });

  try {
    const postMessages = await PostMessage.findById(postId);
    if (postMessages) res.status(200).json(postMessages);
    else
      res.status(404).json({ msg: "This post dose not exist with that id " });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
}

export async function createPost(req, res) {
  const post = req.body;
  const newPost = new PostMessage(post);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ msg: error.message });
  }
}

export async function updatePost(req, res) {
  const post = req.body;
  const { id: _id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send("No post exists with that id ");
    }
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post);
    res.status(201).json(updatedPost);
  } catch (error) {
    res.status(409).json({ msg: error.message });
  }
}

export async function deletePost(req, res) {
  const { id: _id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send("No post exists with that id ");
    }
    await PostMessage.deleteOne(_id);
    res.status(201).json({ msg: "Post deleted successfully " });
  } catch (error) {
    res.status(409).json({ msg: error.message });
  }
}
