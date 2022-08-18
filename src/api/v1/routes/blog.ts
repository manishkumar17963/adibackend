import express from "express";
import {
  createBlogHandler,
  getAllBlogHandler,
  getBlogByIdHandler,
} from "../controllers/blog";

const BlogRouter = express.Router();

BlogRouter.post("/create", createBlogHandler);

BlogRouter.get("/all", getAllBlogHandler);
BlogRouter.get("/:blogId", getBlogByIdHandler);

export default BlogRouter;
