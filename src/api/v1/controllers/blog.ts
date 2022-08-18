import { query, Request, Response } from "express";
import mongoose from "mongoose";
import checkError from "../helpers/checkErrors";
import CustomError from "../helpers/customError";
import { createBlog, findAllBlog, findBlog } from "../services/blog";

export async function createBlogHandler(req: Request, res: Response) {
  try {
    if (!req.body.title || !req.body.description) {
      throw new CustomError(
        "please enter valid fields",
        400,
        "Please add title and description for blog creation"
      );
    }
    await createBlog({ ...req.body });
    res.send({ message: "your blog is created" });
  } catch (err) {
    checkError(err, res);
  }
}

export async function getAllBlogHandler(req: Request, res: Response) {
  try {
    const blogs = await findAllBlog({});
    res.send(blogs);
  } catch (err) {
    checkError(err, res);
  }
}

export async function getBlogByIdHandler(req: Request, res: Response) {
  try {
    if (!mongoose.isObjectIdOrHexString(req.params.blogId)) {
      throw new CustomError(
        "Bad Request",
        404,
        "No such blog found with this id"
      );
    }
    const blog = await findBlog({ _id: req.params.blogId });
    if (!blog) {
      throw new CustomError(
        "Bad Request",
        404,
        "No such blog found with this id"
      );
    }
    res.send(blog);
  } catch (err) {
    checkError(err, res);
  }
}
