# AuditCo Website

A full-stack web application for audit services, featuring a public site and an admin dashboard.

## Project Structure

```
audit-website/
  frontend/   # React client app
  backend/    # Node.js/Express API server
```

---

## Backend File Structure

```
backend/
  .env
  .gitignore
  package.json
  server.js
  config/
    db.js
  controllers/
    authController.js
    blogController.js
    clientController.js
    contactController.js
    serviceController.js
  middleware/
    authMiddleware.js
  models/
    Blog.js
    Client.js
    Contact.js
    Service.js
    User.js
  routes/
    auth.js
    blogs.js
    clients.js
    contacts.js
    services.js
```

---

## Frontend File Structure

```
frontend/
  .env
  .gitignore
  package.json
  README.md
  build/
    asset-manifest.json
    favicon.ico
    index.html
    logo192.png
    logo512.png
    manifest.json
    robots.txt
    static/
      css/
        main.fbde6195.css
        main.fbde6195.css.map
      js/
        main.f73b4ddc.js
        main.f73b4ddc.js.LICENSE.txt
        main.f73b4ddc.js.map
  public/
    favicon.ico
    index.html
    logo192.png
    logo512.png
    manifest.json
    robots.txt
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
    setupTests.js
    api/
      api.js
    assets/
    components/
      BlogCard.jsx
      Footer.css
      Footer.jsx
      Header.css
      Header.jsx
      ServiceCard.css
      ServiceCard.jsx
    pages/
      About.jsx
      Blogs.jsx
      Clients.jsx
      Contact.jsx
      Home.jsx
      Services.jsx
      Admin/
        AdminBlogs.jsx
        AdminClients.jsx
        AdminContacts.jsx
        AdminDashboard.css
        AdminDashboard.jsx
        AdminLogin.css
        AdminLogin.jsx
        AdminServices.jsx
      styles/
        About.css
        Blogs.css
        Clients.css
        Contact.css
        Home.css
        Services.css
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

---

<prompt>
add backend and frontend file structure to that md file
</prompt>