import React, { useEffect, useState } from 'react';
import api from '../../api/api';

export default function AdminClients() {
  const [clients, setClients] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: '', industry: '', logoUrl: '', testimonial: '' });

  useEffect(() => { fetchClients(); }, []);

  async function fetchClients() {
    try {
      const res = await api.get('/clients');
      setClients(res.data);
    } catch (err) { setClients([]); }
  }

  function startCreate() {
    setEditing(null);
    setForm({ name: '', industry: '', logoUrl: '', testimonial: '' });
  }

  function startEdit(c) {
    setEditing(c._id);
    setForm({ name: c.name, industry: c.industry, logoUrl: c.logoUrl, testimonial: c.testimonial });
  }

  async function submit(e) {
    e.preventDefault();
    try {
      if (editing) await api.put(`/clients/${editing}`, form);
      else await api.post('/clients', form);
      fetchClients();
      startCreate();
    } catch (err) { alert('Failed'); }
  }

  async function remove(id) {
    if (!window.confirm('Delete client?')) return;
    try { await api.delete(`/clients/${id}`); fetchClients(); } catch { alert('Failed'); }
  }

  return (
    <>
      <main className="container" style={{ paddingTop: 18 }}>
        <h1>Manage Clients</h1>
        <div style={{ display: 'flex', gap: 12 }}>
          <div style={{ flex: 1 }}>
            <div className="card">
              <h3>{editing ? 'Edit Client' : 'Create Client'}</h3>
              <form onSubmit={submit}>
                <label>Name</label>
                <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                <label>Industry</label>
                <input value={form.industry} onChange={e => setForm({ ...form, industry: e.target.value })} />
                <label>Logo URL</label>
                <input value={form.logoUrl} onChange={e => setForm({ ...form, logoUrl: e.target.value })} />
                <label>Testimonial</label>
                <textarea rows="4" value={form.testimonial} onChange={e => setForm({ ...form, testimonial: e.target.value })} />
                <button className="btn" type="submit">{editing ? 'Update' : 'Create'}</button>
                {editing && <button type="button" onClick={startCreate} style={{ marginLeft: 8 }}>Cancel</button>}
              </form>
            </div>
          </div>

          <div style={{ flex: 1 }}>
            <div className="card">
              <h3>Existing Clients</h3>
              <div style={{ display: 'grid', gap: 8 }}>
                {clients.map(c => (
                  <div key={c._id} style={{ borderBottom: '1px solid #eee', paddingBottom: 8 }}>
                    <strong>{c.name}</strong>
                    <div><small className="muted">{c.industry}</small></div>
                    <div style={{ marginTop: 6 }}>
                      <button onClick={() => startEdit(c)} className="btn">Edit</button>
                      <button onClick={() => remove(c._id)} style={{ marginLeft: 8 }}>Delete</button>
                    </div>
                  </div>
                ))}
                {!clients.length && <div className="muted">No clients yet</div>}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}