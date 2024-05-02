import express from "express";
import {
  createPost,
  getPostById,
  getPosts,
  updatePost,
} from "../controllers/postsController.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.get("/:id", getPostById);

export default router;
