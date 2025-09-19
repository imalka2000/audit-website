import React, { useEffect, useState } from 'react';
import api from '../../api/api';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ title: '', content: '', author: '', tags: '' });

  useEffect(() => { fetchBlogs(); }, []);

  async function fetchBlogs() {
    try {
      const res = await api.get('/blogs');
      setBlogs(res.data);
    } catch (err) { setBlogs([]); }
  }

  function startCreate() {
    setEditing(null);
    setForm({ title: '', content: '', author: '', tags: '' });
  }

  function startEdit(b) {
    setEditing(b._id);
    setForm({ title: b.title, content: b.content, author: b.author, tags: (b.tags || []).join(',') });
  }

  async function submit(e) {
    e.preventDefault();
    try {
      const payload = { ...form, tags: form.tags ? form.tags.split(',').map(t => t.trim()) : [] };
      if (editing) await api.put(`/blogs/${editing}`, payload);
      else await api.post('/blogs', payload);
      fetchBlogs();
      startCreate();
    } catch (err) { alert('Failed'); }
  }

  async function remove(id) {
    if (!window.confirm('Delete blog post?')) return;
    try { await api.delete(`/blogs/${id}`); fetchBlogs(); } catch { alert('Failed'); }
  }

  return (
    <>
      <Header />
      <main className="container" style={{ paddingTop: 18 }}>
        <h1>Manage Blogs</h1>
        <div style={{ display: 'flex', gap: 12 }}>
          <div style={{ flex: 1 }}>
            <div className="card">
              <h3>{editing ? 'Edit Blog' : 'Create Blog'}</h3>
              <form onSubmit={submit}>
                <label>Title</label>
                <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required />
                <label>Author</label>
                <input value={form.author} onChange={e => setForm({ ...form, author: e.target.value })} />
                <label>Tags (comma separated)</label>
                <input value={form.tags} onChange={e => setForm({ ...form, tags: e.target.value })} />
                <label>Content</label>
                <textarea rows="8" value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} />
                <button className="btn" type="submit">{editing ? 'Update' : 'Create'}</button>
                {editing && <button type="button" onClick={startCreate} style={{ marginLeft: 8 }}>Cancel</button>}
              </form>
            </div>
          </div>

          <div style={{ flex: 1 }}>
            <div className="card">
              <h3>Existing Blogs</h3>
              <div style={{ display: 'grid', gap: 8 }}>
                {blogs.map(b => (
                  <div key={b._id} style={{ borderBottom: '1px solid #eee', paddingBottom: 8 }}>
                    <strong>{b.title}</strong>
                    <div><small className="muted">By {b.author}</small></div>
                    <div style={{ marginTop: 6 }}>
                      <button onClick={() => startEdit(b)} className="btn">Edit</button>
                      <button onClick={() => remove(b._id)} style={{ marginLeft: 8 }}>Delete</button>
                    </div>
                  </div>
                ))}
                {!blogs.length && <div className="muted">No blog posts</div>}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}