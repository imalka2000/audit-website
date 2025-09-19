import React, { useEffect, useState } from 'react';
import api from '../api/api';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';

export default function Home() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    api.get('/services')
      .then(res => setServices(res.data))
      .catch(() => setServices([]));
  }, []);

  return (
    <>
      <Header />
      <main className="container" style={{ paddingTop: 18 }}>
        <section className="card" style={{ padding: '2rem', marginBottom: '1rem' }}>
          <h1>Professional Audit Services</h1>
          <p className="muted">AuditCo provides financial, compliance, and operational audits to help businesses build trust and achieve regulatory compliance.</p>
        </section>

        <section style={{ marginTop: 12 }}>
          <h2>Our Services</h2>
          <div className="grid cols-3" style={{ marginTop: 8 }}>
            {services.length ? services.map(s => <ServiceCard key={s._id} service={s} />) : <div className="card">No services yet</div>}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
