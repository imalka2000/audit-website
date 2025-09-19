import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        © {new Date().getFullYear()} AuditCo — Built with <span className="heart">❤️</span>
      </div>
    </footer>
  );
}
