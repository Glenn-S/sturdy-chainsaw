import { CreateBlogPostForm } from '../forms/CreateBlogPostForm';
import { UpdateBlogPostForm } from '../forms/UpdateBlogPostForm';
import { BlogPost, BlogPostModel } from '../models/BlogPost';
import { v4 as uuid } from 'uuid';

// TODO move methods to repository layer

const createBlogPost = async (form: CreateBlogPostForm): Promise<BlogPostModel> => {
  const blogPostToAdd: BlogPostModel = {
    _id: uuid(),
    user: form.user,
    content: form.content
  };

  return BlogPost.create(blogPostToAdd);
};

const getBlogPosts = async (): Promise<BlogPostModel[]> => {
  return BlogPost.find().sort('_id').exec();
};

const getBlogPost = async (blogPostId: string): Promise<BlogPostModel|null> => {
  return BlogPost.findOne({ _id: blogPostId });
};

const updateBlogPost = async (blogPostId: string, updateForm: UpdateBlogPostForm): Promise<BlogPostModel|null> => {
  const blogPostToUpdate = await BlogPost.findOne({ _id: blogPostId }).exec();

  if (!blogPostToUpdate) {
    console.log(`blog post with id ${blogPostId} could not be found`);
    return null;
  }

  await BlogPost.updateOne({ _id: blogPostId }, { content: updateForm.content });

  return BlogPost.findOne({ _id: blogPostId });
};

const deleteBlogPost = async (blogPostId: string): Promise<BlogPostModel|null> => {
  return await BlogPost.findByIdAndDelete(blogPostId);
};

export default {
  createBlogPost,
  getBlogPosts,
  getBlogPost,
  updateBlogPost,
  deleteBlogPost
};