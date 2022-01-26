import { Router } from 'express';
import blogPostRoutes from './blogPostRoutes';

const router = Router();

// Configure routes
blogPostRoutes(router);

export default router;