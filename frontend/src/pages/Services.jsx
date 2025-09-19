import React, { useEffect, useState } from 'react';
import api from '../api/api';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    api.get('/services').then(res => setServices(res.data)).catch(()=>setServices([]));
  }, []);

  return (
    <>
      <Header />
      <main className="container" style={{ paddingTop: 18 }}>
        <h1>Services</h1>
        <p className="muted">Explore the audit services we offer.</p>

        <div className="grid cols-3" style={{ marginTop: 12 }}>
          {services.length ? services.map(s => <ServiceCard key={s._id} service={s} />) : <div className="card">No services available</div>}
        </div>
      </main>
      <Footer />
    </>
  );
}