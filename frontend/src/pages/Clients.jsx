import React, { useEffect, useState } from 'react';
import api from '../api/api';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    api.get('/clients').then(res => setClients(res.data)).catch(()=>setClients([]));
  }, []);

  return (
    <>
      <Header />
      <main className="container" style={{ paddingTop: 18 }}>
        <h1>Clients</h1>
        <p className="muted">We partner with clients across industries.</p>

        <div className="grid cols-3" style={{ marginTop: 12 }}>
          {clients.length ? clients.map(c => (
            <div className="card" key={c._id}>
              <h3>{c.name}</h3>
              <small className="muted">{c.industry}</small>
              <p style={{ marginTop: 8 }}>{c.testimonial || <i>No testimonial</i>}</p>
            </div>
          )) : <div className="card">No clients yet</div>}
        </div>
      </main>
      <Footer />
    </>
  );
}