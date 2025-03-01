import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllCategories, getAllTags, getRecentPosts, PostMeta } from '../../lib/mdx';

const BlogSidebar: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [recentPosts, setRecentPosts] = useState<PostMeta[]>([]);

  useEffect(() => {
    try {
      setCategories(getAllCategories());
      setTags(getAllTags());
      setRecentPosts(getRecentPosts(5));
    } catch (error) {
      console.error('Error loading sidebar data:', error);
    }
  }, []);

  return (
    <div className="space-y-8">
      {/* Categories */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Categories</h3>
        <ul className="space-y-2">
          {categories.map(category => (
            <li key={category}>
              <Link 
                to={`/blog/category/${category.toLowerCase()}`}
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center justify-between"
              >
                <span>{category}</span>
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-semibold px-2 py-1 rounded-full">
                  {/* Count would be implemented in a real app */}
                  {Math.floor(Math.random() * 10) + 1}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Recent Posts</h3>
        <ul className="space-y-4">
          {recentPosts.map(post => (
            <li key={post.slug} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0 last:pb-0">
              <Link 
                to={`/blog/post/${post.slug}`}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <h4 className="font-medium text-gray-900 dark:text-white">{post.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <Link 
              key={tag}
              to={`/blog/tag/${tag.toLowerCase()}`}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
