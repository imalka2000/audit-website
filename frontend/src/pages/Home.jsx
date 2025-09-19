import React, { useEffect, useState } from 'react';
import api from '../api/api';
import ServiceCard from '../components/ServiceCard';
import './styles/Home.css';

export default function Home() {
  const [services, setServices] = useState([]);
  const [featured, setFeatured] = useState(null);

  useEffect(() => {
    api.get('/services').then(r => {
      setServices(r.data || []);
      if (r.data && r.data.length) setFeatured(r.data[0]);
    }).catch(()=>{});
  }, []);

  return (
    <main className="home-page container">
      <section className="hero">
        <div className="hero-text">
          <h1>Trusted Audit Services for Growing Businesses</h1>
          <p className="muted">We deliver accurate, independent, and clear audit reports that stakeholders can trust.</p>
          <div className="hero-cta">
            <a className="btn" href="/services">Explore Services</a>
            <a className="btn alt" href="/contact" style={{ marginLeft: 12 }}>Get a Quote</a>
          </div>
          <div className="hero-stats">
            <div><strong>12+</strong><span>Years experience</span></div>
            <div><strong>200+</strong><span>Clients served</span></div>
            <div><strong>99%</strong><span>Client satisfaction</span></div>
          </div>
        </div>

        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=60" alt="office" />
        </div>
      </section>

      <section className="featured card">
        <h2 style={{ marginTop: 0 }}>Featured Service</h2>
        {featured ? (
          <div className="featured-inner">
            <div className="featured-left">
              <h3>{featured.title}</h3>
              <p className="muted">{featured.shortDesc || featured.longDesc || 'Professional service to help you comply and grow.'}</p>
              <a href="/services" className="btn">See all services</a>
            </div>
            <div className="featured-right">
              <img src="https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=60" alt="service" />
            </div>
          </div>
        ) : <p className="muted">No featured service yet.</p>}
      </section>

      <section className="services-grid" style={{ marginTop: 18 }}>
        <h2>Our Services</h2>
        <div className="grid cols-3">
          {services.length ? services.map(s => <ServiceCard key={s._id} service={s} />) : <div className="card">No services yet</div>}
        </div>
      </section>
    </main>
  );
}
