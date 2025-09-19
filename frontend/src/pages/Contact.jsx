import React, { useState } from 'react';
import api from '../api/api';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setStatus(null);
    try {
      await api.post('/contacts', form);
      setStatus({ ok: true, text: 'Message sent. We will contact you soon.' });
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setStatus({ ok: false, text: 'Failed to send. Try again.' });
    }
  };

  return (
    <>
      <Header />
      <main className="container" style={{ paddingTop: 18 }}>
        <h1>Contact Us</h1>
        <p className="muted">Send us a message and we'll reply soon.</p>

        <div style={{ maxWidth: 720 }}>
          <form onSubmit={submit} className="card" style={{ padding: '1rem' }}>
            <label>Name</label>
            <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />

            <label>Email</label>
            <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />

            <label>Phone</label>
            <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />

            <label>Message</label>
            <textarea rows="6" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required />

            <button className="btn" type="submit">Send Message</button>
          </form>

          {status && (
            <div style={{ marginTop: 12 }}>
              <div className={status.ok ? 'card' : 'card'}>{status.text}</div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
