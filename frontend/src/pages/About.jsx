import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Header />
      <main className="container" style={{ paddingTop: 18 }}>
        <section className="card">
          <h1>About AuditCo</h1>
          <p className="muted">
            AuditCo is a fictional example audit company for this technical test. We focus on financial audits, regulatory compliance, and process improvement.
          </p>

          <h3 style={{ marginTop: 12 }}>Our mission</h3>
          <p className="muted">To provide reliable audit and assurance services that help businesses grow with confidence.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
