import { Router } from 'express';
import { blogPostController } from '../controllers';

/**
 * Function for configuring the BlogPost routes.
 */
export default (router: Router) => {
  router.post('/posts', blogPostController.createBlogPost);
  router.get('/posts', blogPostController.getBlogPosts);
  router.get('/posts/:BlogPostId', blogPostController.getBlogPost);
  router.patch('/posts/:BlogPostId', blogPostController.updateBlogPost);
  router.delete('/BlogPosts/:uderId', blogPostController.deleteBlogPost);
};