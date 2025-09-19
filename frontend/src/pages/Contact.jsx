import React, { useState } from 'react';
import api from '../api/api';
import './styles/Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', message:'' });
  const [status, setStatus] = useState(null);

  const submit = async e => {
    e.preventDefault();
    setStatus(null);
    try {
      await api.post('/contacts', form);
      setStatus({ ok:true, text:'Message sent. We will contact you soon.' });
      setForm({ name:'', email:'', phone:'', message:'' });
    } catch (err) {
      setStatus({ ok:false, text:'Failed to send. Try again.' });
    }
  };

  return (
    <main className="contact-page container">
      <section className="contact-grid">
        <div className="contact-card card">
          <h1 style={{ marginTop:0 }}>Get in touch</h1>
          <p className="muted">Tell us about your needs and a member of our team will get back to you.</p>

          <form onSubmit={submit}>
            <label>Name</label>
            <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required />

            <label>Email</label>
            <input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required />

            <label>Phone</label>
            <input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} />

            <label>Message</label>
            <textarea rows="6" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} required />

            <button className="btn" type="submit">Send Message</button>
          </form>

          {status && <div className={`status ${status.ok ? 'ok' : 'err'}`}>{status.text}</div>}
        </div>

        <aside className="contact-aside card">
          <h3>Office</h3>
          <p className="muted">123 Audit Lane, Colombo</p>

          <h3 style={{ marginTop: 12 }}>Business hours</h3>
          <p className="muted">Mon — Fri: 9:00 AM — 6:00 PM</p>

          <div className="map-illus">
            <img src="https://images.unsplash.com/photo-1505765055090-0c9b1492c18d?auto=format&fit=crop&w=800&q=60" alt="office" />
          </div>
        </aside>
      </section>
    </main>
  );
}
