# AuditCo Website

A full-stack web application for audit services, featuring a public site and an admin dashboard.

## Project Structure

```
audit-website/
  frontend/   # React client app
  backend/    # Node.js/Express API server
```

---

## Backend (`backend/`)

**Tech:** Node.js, Express, MongoDB, JWT

### Setup

1. Install dependencies:
   ```sh
   cd backend
   npm install
   ```

2. Configure environment:
   - Copy `.env.example` to `.env` and set:
     ```
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ADMIN_EMAIL=admin@example.com
     ADMIN_PASSWORD=your_admin_password
     ```

3. Start server:
   ```sh
   npm run dev
   ```
   Server runs on `http://localhost:5000`.

4. **Create Admin User:**  
   Visit `http://localhost:5000/api/auth/bootstrap` once after starting the server to create the admin user.

### API Endpoints

- `/api/auth/login` — Admin login
- `/api/services` — Manage services
- `/api/blogs` — Manage blogs
- `/api/clients` — Manage clients
- `/api/contacts` — Contact inquiries

---

## Frontend (`frontend/`)

**Tech:** React, Axios, React Router

### Setup

1. Install dependencies:
   ```sh
   cd frontend
   npm install
   ```

2. Configure API URL in `.env`:
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```

3. Start development server:
   ```sh
   npm start
   ```
   App runs on `http://localhost:3000`.

### Features

- Public pages: Home, Services, Blogs, Clients, About, Contact
- Admin dashboard: Manage services, blogs, clients, contacts
- Responsive design

---

## Usage

- Visit `http://localhost:3000` for the public site.
- Admin login at `/admin/login` (use credentials from backend `.env`).
- After login, access admin dashboard at `/admin`.

---

## License

MIT

---

## Author

AuditCo Team