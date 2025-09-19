import React from 'react';
import './styles/About.css';

export default function About() {
  return (
    <main className="about-page container">
      <section className="hero card">
        <div className="hero-left">
          <h1 style={{ marginTop:0 }}>About AuditCo</h1>
          <p className="muted">We are an independent audit firm focused on accuracy, transparency and pragmatic recommendations.</p>
          <p>Our team combines deep accounting knowledge with experience across technology, manufacturing, and services.</p>
        </div>
        <div className="hero-right">
            <img 
            src="https://picsum.photos/id/1027/900/600" 
            alt="team" 
            />
        </div>
      </section>

      <section className="mission card" style={{ marginTop: 18 }}>
        <h2>Our Mission</h2>
        <p className="muted">To provide assurance that strengthens trust between businesses and their stakeholders.</p>

        <div className="pill-list">
          <div className="pill">Integrity</div>
          <div className="pill">Clarity</div>
          <div className="pill">Timeliness</div>
          <div className="pill">Actionable advice</div>
        </div>
      </section>
    </main>
  );
}
