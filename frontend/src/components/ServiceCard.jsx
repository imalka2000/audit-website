import React from 'react';

export default function ServiceCard({ service }) {
  return (
    <div className="card">
      <h3>{service.title}</h3>
      <p className="muted">{service.shortDesc}</p>
      <small className="muted">Added: {new Date(service.createdAt).toLocaleDateString()}</small>
    </div>
  );
}