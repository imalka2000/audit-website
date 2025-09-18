import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Blogs from './pages/Blogs';
import Clients from './pages/Clients';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminServices from './pages/Admin/AdminServices';
import AdminBlogs from './pages/Admin/AdminBlogs';
import AdminClients from './pages/Admin/AdminClients';
import AdminContacts from './pages/Admin/AdminContacts';
import { setAuthToken } from './api/api';

function RequireAuth({ children }) {
  const token = localStorage.getItem('admin_token');
  if (!token) return <Navigate to="/admin/login" replace />;
  return children;
}

export default function App() {
  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    setAuthToken(token);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <RequireAuth>
              <AdminDashboard />
            </RequireAuth>
          }
        />
        <Route
          path="/admin/services"
          element={
            <RequireAuth>
              <AdminServices />
            </RequireAuth>
          }
        />
        <Route
          path="/admin/blogs"
          element={
            <RequireAuth>
              <AdminBlogs />
            </RequireAuth>
          }
        />
        <Route
          path="/admin/clients"
          element={
            <RequireAuth>
              <AdminClients />
            </RequireAuth>
          }
        />
        <Route
          path="/admin/contacts"
          element={
            <RequireAuth>
              <AdminContacts />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}