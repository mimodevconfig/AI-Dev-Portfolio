import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import AppFooter from './components/AppFooter';
import BlogLayout from './components/blog/BlogLayout';
import BlogList from './components/blog/BlogList';
import BlogPost from './components/blog/BlogPost';
import BlogSearch from './components/blog/BlogSearch';
import CategoryPage from './components/blog/CategoryPage';
import TagPage from './components/blog/TagPage';
import ProjectDetail from './components/ProjectDetail';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navigation />
      
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Projects />
            <About />
            <Experience />
            <Skills />
            <Testimonials />
            <Contact />
          </>
        } />
        
        <Route path="/project/:id" element={<ProjectDetail />} />
        
        <Route path="/blog" element={<BlogLayout />}>
          <Route index element={<BlogList />} />
          <Route path="post/:slug" element={<BlogPost />} />
          <Route path="search" element={<BlogSearch />} />
          <Route path="category/:category" element={<CategoryPage />} />
          <Route path="tag/:tag" element={<TagPage />} />
        </Route>
      </Routes>
      
      <AppFooter />
    </div>
  );
}

export default App;
