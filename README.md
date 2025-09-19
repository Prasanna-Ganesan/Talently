# FullStack Intern Coding Challenge

## Tech Stack
- Backend: Express.js + Sequelize + PostgreSQL
- Frontend: React.js
- Database: PostgreSQL

## Features
- User Authentication (JWT)
- Roles: Admin, User, Store Owner
- Store Management, Ratings
- Dashboards with metrics

## Setup
1. Clone repository
2. Backend: `cd backend && npm install && npm start`
3. Frontend: `cd frontend && npm install && npm start`
4. Ensure PostgreSQL is running and update `.env` file

## Environment Variables (.env)
```
DB_URI=postgres://user:pass@localhost:5432/dbname
JWT_SECRET=your_jwt_secret
```
