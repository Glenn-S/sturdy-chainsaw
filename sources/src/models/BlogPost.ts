import mongoose, { Schema, Model, Document } from 'mongoose';
import { v4 as uuid } from 'uuid';

type BlogPostDocument = Document & {
  _id: string;
  user: string;
  content: string;
};

type BlogPostModel = {
  _id: BlogPostDocument["_id"];
  user: BlogPostDocument['user'];
  content: BlogPostDocument['content'];
};

const blogPostSchema = new Schema<BlogPostDocument>({
  _id: {
    type: Schema.Types.String,
    required: true,
    default: () => uuid()
  },
  user: {
    type: Schema.Types.String,
    required: true
  },
  content: {
    type: Schema.Types.String,
    required: true
  }
}, {
  collection: 'blogPosts',
  timestamps: true
});

const BlogPost: Model<BlogPostDocument> = mongoose.model<BlogPostDocument>('BlogPost', blogPostSchema);

export {
  BlogPost,
  BlogPostModel,
  blogPostSchema
};