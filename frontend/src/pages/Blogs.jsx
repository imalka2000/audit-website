import React, { useEffect, useState } from 'react';
import api from '../api/api';
import './styles/Blogs.css';

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => { api.get('/blogs').then(r => setBlogs(r.data || [])).catch(()=>{}); }, []);
  return (
    <main className="blogs-page container">
      <header className="page-hero card">
        <div>
          <h1 style={{ marginTop:0 }}>Insights & News</h1>
          <p className="muted">Analysis, tips, and updates about auditing, compliance and accounting best practice.</p>
        </div>
        <div className="hero-illus">
            <img src="https://picsum.photos/id/1015/900/600" alt="insights"/>

        </div>
      </header>

      <section style={{ marginTop: 16 }}>
        <div className="grid cols-2">
          {blogs.length ? blogs.map(b => (
            <article key={b._id} className="card blog-card">
              <div className="blog-thumb">
                <img src={`https://picsum.photos/seed/${b._id}/600/300`} alt={b.title} />
              </div>
              <div className="blog-body">
                <h3 style={{ marginTop:0 }}>{b.title}</h3>
                <p className="muted">{(b.content||'').slice(0,220)}{(b.content||'').length>220?'...':''}</p>
                <div className="meta">By {b.author || 'Admin'} • {new Date(b.createdAt).toLocaleDateString()}</div>
              </div>
            </article>
          )) : <div className="card">No blog posts yet</div>}
        </div>
      </section>
    </main>
  );
}
