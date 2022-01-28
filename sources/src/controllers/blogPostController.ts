import { Request, Response, NextFunction } from 'express';
import { CreateBlogPostForm } from '../forms/CreateBlogPostForm';
import { blogPostService } from '../services';

// TODO abstract further to the service layer to get more specific status codes.

const createBlogPost = async (
  request: Request<{}, {}, CreateBlogPostForm>,
  response: Response,
  next: NextFunction
) => {
  const form = request.body;
  
  try {
    const newBlogPost = await blogPostService.createBlogPost(form);
    response.status(201).json({ value: newBlogPost });
  } catch (e) {
    const err = e as ErrorEvent;
    console.error(err.message);
    response.sendStatus(500);
  } finally {
    next();
  }
};

const getBlogPosts = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const blogPosts = await blogPostService.getBlogPosts();
    return response.status(200).json({ value: blogPosts });
  } catch (e) {
    const err = e as ErrorEvent;
    console.error(err.message);
    response.sendStatus(500);
  } finally {
    next();
  }
};

const getBlogPost = async (
  request: Request<{ blogPostId: string }, {}, {}>,
  response: Response,
  next: NextFunction
) => {
  const { blogPostId } = request.params;

  try {
    const blogPost = await blogPostService.getBlogPost(blogPostId);

    if (!blogPost) {
      response.status(404).json({
        message: `The blog post with id ${blogPostId} cannot be found.`
      });
    }
    response.status(200).json({ value: blogPost });
  } catch (e) {
    const err = e as ErrorEvent;
    console.error(err.message);
    response.sendStatus(500);
  } finally {
    next();
  }
};

const updateBlogPost = (
  request: Request,
  response: Response,
  next: NextFunction
) => {

};

const deleteBlogPost = async (
  request: Request<{ blogPostId: string }, {}, {}>,
  response: Response,
  next: NextFunction
) => {
  const { blogPostId } = request.params;

  try {
    const deletedBlogPost = await blogPostService.deleteBlogPost(blogPostId);
    if (!deletedBlogPost) {
      response.status(404).json({
        message: `The blog post with id ${blogPostId} cannot be found.`
      });
    } else {
      response.sendStatus(204);
    }
  } catch (e) {
    const err = e as ErrorEvent;
    console.error(err.message);
    response.sendStatus(500);
  } finally {
    next();
  }
};

export default {
  createBlogPost,
  getBlogPosts,
  getBlogPost,
  updateBlogPost,
  deleteBlogPost
};