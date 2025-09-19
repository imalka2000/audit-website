import React from 'react';

export default function BlogCard({ blog }) {
  return (
    <div className="card">
      <h3>{blog.title}</h3>
      <p className="muted">{blog.content?.slice(0, 180)}{blog.content?.length > 180 ? '...' : ''}</p>
      <small className="muted">By {blog.author} • {new Date(blog.createdAt).toLocaleDateString()}</small>
    </div>
  );
}