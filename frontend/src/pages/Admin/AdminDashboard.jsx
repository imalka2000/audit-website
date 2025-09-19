import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './AdminDashboard.css';

export default function AdminDashboard() {
  return (
    <>
      <Header />
      <div className="admin-dashboard container">
        {/* Sidebar */}
        <aside className="admin-sidebar">
          <div className="brand">AuditCo Admin</div>
          <nav>
            <Link to="/admin/services">Manage Services</Link>
            <Link to="/admin/blogs">Manage Blogs</Link>
            <Link to="/admin/clients">Manage Clients</Link>
            <Link to="/admin/contacts">Contact Inquiries</Link>
          </nav>
        </aside>

        {/* Main */}
        <main className="admin-main">
          <div className="admin-top">
            <div>
              <h2 style={{ margin: 0 }}>Welcome, Admin</h2>
              <p style={{ margin: 0, color: '#6b7280' }}>Overview of site activity</p>
            </div>
          </div>

          <div className="stats-row">
            <div className="stat-card">
              <div className="label">Total Services</div>
              <div className="value">12</div>
            </div>
            <div className="stat-card">
              <div className="label">Total Blogs</div>
              <div className="value">8</div>
            </div>
            <div className="stat-card">
              <div className="label">Contacts</div>
              <div className="value">3</div>
            </div>
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0 }}>Recent Activity</h3>
            <p className="muted">No recent activity — use the admin panel to add content.</p>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
