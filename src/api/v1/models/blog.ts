import mongoose from "mongoose";

export interface BlogInput {
  title: string;
  description: string;
}

export interface BlogDocument extends mongoose.Document, BlogInput {}

let blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const Blog = mongoose.model<BlogDocument>("Blog", blogSchema);
export default Blog;
