# TODO
Full-stack Todo app built with MongoDB, Express.js, Angular 17 &amp; Node.js. REST API backend + Angular frontend with full CRUD, filtering &amp; inline editing.
# MEAN Stack Todo App

A full-stack Todo application built with **MongoDB, Express.js, Angular, and Node.js**.

## Features
- Create, Read, Update, Delete (CRUD) todos
- Mark todos as complete/incomplete
- Filter by status (All / Active / Completed)
- RESTful API backend
- Responsive Angular frontend

## Tech Stack
| Layer | Technology |
|-------|-----------|
| Frontend | Angular 17, TypeScript, CSS3 |
| Backend | Node.js, Express.js |
| Database | MongoDB (Mongoose ODM) |
| API Style | RESTful (JSON) |

## Project Structure
```
mean-todo/
├── backend/              # Node.js + Express API
│   ├── models/           # Mongoose schemas
│   ├── routes/           # API route definitions
│   ├── controllers/      # Business logic
│   └── server.js         # Entry point
├── frontend/             # Angular app
│   └── src/app/
│       ├── components/   # UI components
│       ├── services/     # HTTP services
│       └── models/       # TypeScript interfaces
└── README.md
```

## Prerequisites
- Node.js v18+
- MongoDB (local) or MongoDB Atlas (free cloud)
- Angular CLI: `npm install -g @angular/cli`

## Setup & Run

### 1. Clone the repo
```bash
git clone https://github.com/YOUR_USERNAME/mean-todo.git
cd mean-todo
```

### 2. Backend
```bash
cd backend
npm install
# Create a .env file:
# MONGO_URI=mongodb://localhost:27017/meantodo
# PORT=5000
npm start
```
API runs at `http://localhost:5000`

### 3. Frontend
```bash
cd frontend
npm install
ng serve
```
App runs at `http://localhost:4200`

## API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/todos | Get all todos |
| POST | /api/todos | Create a todo |
| PUT | /api/todos/:id | Update a todo |
| DELETE | /api/todos/:id | Delete a todo |

## Screenshots
> Add screenshots here after running the app locally.

## Author
Kavyashree J R — [LinkedIn](https://linkedin.com/in/YOUR_PROFILE)
