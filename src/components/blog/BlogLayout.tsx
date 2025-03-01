import React from 'react';
import { Outlet } from 'react-router-dom';
import BlogSidebar from './BlogSidebar';

const BlogLayout: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <Outlet />
        </div>
        <div className="lg:col-span-1">
          <BlogSidebar />
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
