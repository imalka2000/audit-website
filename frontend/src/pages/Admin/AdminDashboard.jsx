import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AdminDashboard() {
  return (
    <>
      <Header />
      <main className="container" style={{ paddingTop: 18 }}>
        <h1>Admin Dashboard</h1>
        <div className="grid cols-2" style={{ marginTop: 12 }}>
          <div className="card">
            <h3>Manage</h3>
            <ul>
              <li><Link to="/admin/services">Services</Link></li>
              <li><Link to="/admin/blogs">Blogs</Link></li>
              <li><Link to="/admin/clients">Clients</Link></li>
              <li><Link to="/admin/contacts">Contact Inquiries</Link></li>
            </ul>
          </div>
          <div className="card">
            <h3>Quick Actions</h3>
            <p className="muted">Use the links to create, update, and delete items.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
