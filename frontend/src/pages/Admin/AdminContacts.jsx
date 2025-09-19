import React, { useEffect, useState } from 'react';
import api from '../../api/api';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AdminContacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => { fetchContacts(); }, []);

  async function fetchContacts() {
    try {
      const res = await api.get('/contacts');
      setContacts(res.data);
    } catch (err) { setContacts([]); }
  }

  async function markHandled(id, handled) {
    try {
      await api.put(`/contacts/${id}`, { handled });
      fetchContacts();
    } catch (err) { alert('Failed'); }
  }

  async function remove(id) {
    if (!window.confirm('Delete contact?')) return;
    try {
      await api.delete(`/contacts/${id}`);
      fetchContacts();
    } catch (err) { alert('Failed'); }
  }

  return (
    <>
      <Header />
      <main className="container" style={{ paddingTop: 18 }}>
        <h1>Contact Inquiries</h1>
        <div className="card">
          {contacts.length ? (
            <div style={{ display: 'grid', gap: 8 }}>
              {contacts.map(c => (
                <div key={c._id} style={{ borderBottom: '1px solid #eee', paddingBottom: 8 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                      <strong>{c.name}</strong> <small className="muted">({c.email} • {c.phone})</small>
                      <div style={{ marginTop: 8 }}>{c.message}</div>
                      <div style={{ marginTop: 8 }}><small className="muted">Sent: {new Date(c.createdAt).toLocaleString()}</small></div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div>
                        <label>
                          <input type="checkbox" checked={c.handled} onChange={e => markHandled(c._id, e.target.checked)} /> Handled
                        </label>
                      </div>
                      <div style={{ marginTop: 8 }}>
                        <button onClick={() => remove(c._id)}>Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : <div className="muted">No contact inquiries</div>}
        </div>
      </main>
      <Footer />
    </>
  );
}
