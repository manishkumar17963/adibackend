import {
  DocumentDefinition,
  FilterQuery,
  UpdateQuery,
  QueryOptions,
} from "mongoose";
import Blog, { BlogDocument, BlogInput } from "../models/blog";

export async function createBlog(input: BlogInput) {
  return Blog.create(input);
}

export async function findBlog(
  query: FilterQuery<BlogDocument>,
  select: { [key: string]: number } = {}
) {
  if (select) {
    return Blog.findOne(query).select(select);
  } else {
    return Blog.findOne(query);
  }
}

export async function findAllBlog(
  query: FilterQuery<BlogDocument>,
  select: { [key: string]: number } = {}
) {
  return Blog.find(query, select);
}
