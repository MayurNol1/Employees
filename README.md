# 👨‍💼 Employee Management System (React + Vite + Tailwind)

A simple and clean **Employee Management System** built using **React, Vite, Tailwind CSS, React Router, Context API, and Notistack**.  
This project supports full **CRUD functionality (Create, Read, Update, Delete)** — without using any backend.  
All data is stored in **React state + LocalStorage**, so it remains available even after page refresh.

---

## 🚀 Features

### 🔹 Core Functionality
- ➕ Add new employees  
- 📃 View employee details  
- ✏ Edit employee information  
- 🗑 Delete employees  
- 💾 Persist data using LocalStorage  
- 🔔 Snackbar notifications using **notistack**

### 🎨 UI & UX
- Built with **Tailwind CSS**
- Clean and responsive layout  
- Table-based employee list  
- Large **“Add Employee”** button for better usability  
- Icons for actions (View / Edit / Delete)

### ⚛ React Concepts Used
✔ React Hooks (`useState`, `useEffect`, `useContext`)  
✔ Context API for global state management  
✔ React Router for navigation  
✔ LocalStorage persistence  
✔ Reusable components  

---

## 🏗 Tech Stack

| Tool | Purpose |
|------|--------|
| **React** | UI library |
| **Vite** | Fast bundler & dev server |
| **Tailwind CSS** | Styling |
| **React Router** | Routing |
| **Context API** | State management |
| **Notistack** | Snackbar notifications |
| **LocalStorage** | Data persistence |

---

## 📂 Project Structure

src/
├── pages/
│ ├── Home.jsx
│ ├── CreateEmployee.jsx
│ ├── ShowEmployee.jsx
│ ├── EditEmployee.jsx
│ └── DeleteEmployee.jsx
├── components/
│ ├── BackButton.jsx
│ └── home/
│ └── EmployeeTable.jsx
├── context/
│ └── EmployeeContext.jsx
├── App.jsx
├── main.jsx
└── index.css

 ___