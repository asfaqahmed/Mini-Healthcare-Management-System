give me the setup guide and full code 

Project Name: Mini Healthcare Management System (simplified HMIS)

🎯 Goal

Build a small full-stack app where users (patients) can register, doctors can add appointments, and admins can view patient & appointment data.

🔹 Part 1 – Backend (Python FastAPI/Django)

Tasks:

Create APIs for:

User Registration & Login (JWT Authentication).

Add Appointment (doctor → patient).

Get all Appointments (with filtering by date).

Connect to PostgreSQL/MySQL.

Tables: users, appointments.

Appointment fields: id, patient_id, doctor_id, date, notes.

Secure endpoints (only doctors can create appointments, only admins can view all).

Practice Focus:

REST API design

JWT Authentication

Query optimizations

Error handling

🔹 Part 2 – Frontend (React)

Tasks:

Build pages/components:

Register/Login Page

Appointments Page (list + create new)

Dashboard (for admins)

Fetch APIs from backend using Axios/Fetch.

Add form validation and error handling.

Practice Focus:

React hooks

State management

Protected routes in react.js

API integration

🔹 Part 3 – DevOps / Cloud

Tasks:

Write a simple Dockerfile for backend and frontend.

Use docker-compose.yml to run backend, frontend, and database.

(Optional) Deploy to AWS EC2 or Docker Hub.

Practice Focus:

Docker basics

Environment variables

AWS deployment knowledge

🔹 Part 4 – last 

Add unit tests (Pytest for backend, Jest for frontend).

Write a CI/CD pipeline in GitHub Actions (test + build + dockerize).