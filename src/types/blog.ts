export interface PostMeta {
  title: string;
  date: string;
  excerpt: string;
  author: string;
  category: string;
  tags: string[];
  coverImage: string;
  slug: string;
}

export interface Post extends PostMeta {
  content: string;
}
