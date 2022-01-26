import { BlogPostForm } from '../forms/BlogPostForm';
import { BlogPostModel } from '../models/BlogPostModel';
import { Guid } from 'guid-typescript';

const createBlogPost = (form: BlogPostForm): BlogPostModel => {
  return {
    id: Guid.create(),
    user: 'Anonymous',
    content: '',
    date: new Date(2022, 1, 25)
  };
};

const getBlogPosts = (): BlogPostModel[] => {
  return [];
};

const getBlogPost = (blogPostId: Guid): BlogPostModel => {
  return {
    id: Guid.create(),
    user: 'Anonymous',
    content: '',
    date: new Date(2022, 1, 25)
  };
};

const updateBlogPost = (blogPostId: Guid): BlogPostModel => {
  return {
    id: Guid.create(),
    user: 'Anonymous',
    content: '',
    date: new Date(2022, 1, 25)
  };
};

const deleteBlogPost = (blogPostId: Guid): void => {
  return;
};

export default {
  createBlogPost,
  getBlogPosts,
  getBlogPost,
  updateBlogPost,
  deleteBlogPost
};