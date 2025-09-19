import React, { useEffect, useState } from 'react';
import api from '../../api/api';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AdminServices() {
  const [services, setServices] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ title: '', shortDesc: '', longDesc: '' });

  useEffect(() => {
    fetchServices();
  }, []);

  async function fetchServices() {
    try {
      const res = await api.get('/services');
      setServices(res.data);
    } catch (err) { setServices([]); }
  }

  function startCreate() {
    setEditing(null);
    setForm({ title: '', shortDesc: '', longDesc: '' });
  }

  function startEdit(s) {
    setEditing(s._id);
    setForm({ title: s.title, shortDesc: s.shortDesc, longDesc: s.longDesc });
  }

  async function submit(e) {
    e.preventDefault();
    try {
      if (editing) {
        await api.put(`/services/${editing}`, form);
      } else {
        await api.post('/services', form);
      }
      fetchServices();
      setEditing(null);
      setForm({ title: '', shortDesc: '', longDesc: '' });
    } catch (err) {
      alert('Failed');
    }
  }

  async function remove(id) {
    if (!window.confirm('Delete this service?')) return;
    try {
      await api.delete(`/services/${id}`);
      fetchServices();
    } catch (err) { alert('Delete failed'); }
  }

  return (
    <>
      <Header />
      <main className="container" style={{ paddingTop: 18 }}>
        <h1>Manage Services</h1>

        <div style={{ display: 'flex', gap: 12 }}>
          <div style={{ flex: 1 }}>
            <div className="card">
              <h3>{editing ? 'Edit Service' : 'Create Service'}</h3>
              <form onSubmit={submit}>
                <label>Title</label>
                <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required />
                <label>Short description</label>
                <input value={form.shortDesc} onChange={e => setForm({ ...form, shortDesc: e.target.value })} />
                <label>Long description</label>
                <textarea rows="6" value={form.longDesc} onChange={e => setForm({ ...form, longDesc: e.target.value })} />
                <button className="btn" type="submit">{editing ? 'Update' : 'Create'}</button>
                {editing && <button type="button" onClick={startCreate} style={{ marginLeft: 8 }}>Cancel</button>}
              </form>
            </div>
          </div>

          <div style={{ flex: 1 }}>
            <div className="card">
              <h3>Existing Services</h3>
              <div style={{ display: 'grid', gap: 8 }}>
                {services.map(s => (
                  <div key={s._id} style={{ borderBottom: '1px solid #eee', paddingBottom: 8 }}>
                    <strong>{s.title}</strong>
                    <div><small className="muted">{s.shortDesc}</small></div>
                    <div style={{ marginTop: 6 }}>
                      <button onClick={() => startEdit(s)} className="btn">Edit</button>
                      <button onClick={() => remove(s._id)} style={{ marginLeft: 8 }}>Delete</button>
                    </div>
                  </div>
                ))}
                {!services.length && <div className="muted">No services yet</div>}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}