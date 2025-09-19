import React, { useEffect, useState } from 'react';
import api from '../api/api';
import './styles/Clients.css';
import { User, UserRound } from 'lucide-react'; // person icons

export default function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    api.get('/clients').then(r => setClients(r.data || [])).catch(()=>{});
  }, []);

  return (
    <main className="clients-page container">
      <section className="page-hero card">
        <h1 style={{ marginTop: 0 }}>Our Clients</h1>
        <p className="muted">
          We are proud to have worked with organizations of all sizes, building trust through our reliable audit services.
        </p>
      </section>

      <section style={{ marginTop: 18 }}>
        <div className="clients-grid">
          {clients.length ? (
            clients.map((c, i) => (
              <div key={c._id || i} className="client-card card">
                <div className="client-icon">
                  {i % 2 === 0 ? <User size={32} /> : <UserRound size={32} />}
                </div>
                <div className="client-info">
                  <h3>{c.name}</h3>
                  <p className="muted">{c.industry || 'Valued client'}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="card">No clients to show yet</div>
          )}
        </div>
      </section>
    </main>
  );
}
