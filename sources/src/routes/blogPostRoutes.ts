import { Router } from 'express';
import { blogPostController } from '../controllers';

/**
 * Function for configuring the BlogPost routes.
 */
export default (router: Router) => {
  router.post('/posts', blogPostController.createBlogPost);
  router.get('/posts', blogPostController.getBlogPosts);
  router.get('/posts/:blogPostId', blogPostController.getBlogPost);
  router.patch('/posts/:blogPostId', blogPostController.updateBlogPost);
  router.delete('/posts/:blogPostId', blogPostController.deleteBlogPost);
};