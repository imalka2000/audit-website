import React, { useEffect, useState } from 'react';
import api from '../api/api';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    api.get('/blogs').then(res => setBlogs(res.data)).catch(()=>setBlogs([]));
  }, []);

  return (
    <>
      <Header />
      <main className="container" style={{ paddingTop: 18 }}>
        <h1>Blogs</h1>
        <p className="muted">Industry news and insights.</p>

        <div className="grid cols-2" style={{ marginTop: 12 }}>
          {blogs.length ? blogs.map(b => <BlogCard key={b._id} blog={b} />) : <div className="card">No blog posts yet</div>}
        </div>
      </main>
      <Footer />
    </>
  );
}
