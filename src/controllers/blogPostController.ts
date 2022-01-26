import { Request, Response, NextFunction } from 'express';
import { Guid } from 'guid-typescript';
import { BlogPostForm } from '../forms/BlogPostForm';
import { blogPostService } from '../services';

const createBlogPost = (
  request: Request<{}, {}, BlogPostForm>,
  response: Response,
  next: NextFunction
) => {
  const form = request.body;
  
};

const getBlogPosts = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  
};

const getBlogPost = async (
  request: Request<{ blogId: Guid }, {}, {}>,
  response: Response,
  next: NextFunction
) => {
  const { blogId } = request.params;
  console.log(blogId);

  try {
    const blogPost = await blogPostService.getBlogPost(blogId);
    response.status(200).json(blogPost);
  } catch (e) {
    const err = e as ErrorEvent;
    console.log(err.message);
    response.sendStatus(500);
  } finally {
    next();
  }
};

const updateBlogPost = (request: Request, response: Response, next: NextFunction) => {

};

const deleteBlogPost = (request: Request, response: Response, next: NextFunction) => {

};

export default {
  createBlogPost,
  getBlogPosts,
  getBlogPost,
  updateBlogPost,
  deleteBlogPost
};