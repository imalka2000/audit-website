import React, { useEffect, useState } from 'react';
import api from '../api/api';
import ServiceCard from '../components/ServiceCard';
import './styles/Services.css';

export default function Services() {
  const [services, setServices] = useState([]);
  useEffect(() => { api.get('/services').then(r => setServices(r.data || [])).catch(()=>{}); }, []);
  return (
    <main className="services-page container">
      <section className="page-hero card">
        <div className="hero-left">
          <h1 style={{ marginTop: 0 }}>Our Services</h1>
          <p className="muted">From financial audit to compliance and advisory — we tailor services to your needs.</p>
        </div>
        <div className="hero-right">
          <img src="https://images.unsplash.com/photo-1581093588401-7e0d2f7d0d07?auto=format&fit=crop&w=900&q=60" alt="services" />
        </div>
      </section>

      <section style={{ marginTop: 18 }}>
        <div className="grid cols-3">
          {services.length ? services.map(s => <ServiceCard key={s._id} service={s} />)
            : <div className="card">No services to show</div>}
        </div>
      </section>

      <section className="why card" style={{ marginTop: 18 }}>
        <h2>Why choose AuditCo?</h2>
        <ul className="why-list">
          <li><strong>Expert team</strong> — Certified auditors with cross-industry experience.</li>
          <li><strong>Clear reports</strong> — Actionable findings, not jargon.</li>
          <li><strong>Confidential</strong> — We protect client data with strong controls.</li>
        </ul>
      </section>
    </main>
  );
}
