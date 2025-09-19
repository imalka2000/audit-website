import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        © {new Date().getFullYear()} AuditCo — Built with ❤️
      </div>
    </footer>
  );
}