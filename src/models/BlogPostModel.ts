import { Guid } from 'guid-typescript';

export interface BlogPostModel {
  id: Guid;
  user: string;
  content: string;
  date: Date
};