import React, { useState } from 'react';
import api, { setAuthToken } from '../../api/api';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './AdminLogin.css';

export default function AdminLogin() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [err, setErr] = useState('');
  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();
    setErr('');
    try {
      const res = await api.post('/auth/login', form);
      const token = res.data.token;
      localStorage.setItem('admin_token', token);
      setAuthToken(token);
      navigate('/admin');
    } catch (error) {
      setErr(error?.response?.data?.message || 'Login failed');
    }
  }

  return (
    <div className="admin-login-page">
      <Header />
      <main className="admin-login-main">
        <div className="login-card">
          <h1>Admin Login</h1>
          <form onSubmit={submit}>
            <label>Email</label>
            <input
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              required
            />
            <label>Password</label>
            <input
              type="password"
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
              required
            />
            <button className="btn" type="submit">Login</button>
            {err && <p style={{ color: 'red' }}>{err}</p>}
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
