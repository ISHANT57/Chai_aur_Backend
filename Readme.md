
# ☕ Chai aur Backend Series

Welcome to the **Chai aur Backend** series — a complete, production-grade backend development project crafted using modern JavaScript technologies. This series is a part of the [Chai aur Code](https://www.youtube.com/@chaiaurcode) ecosystem and aims to teach you **how to build a real-world video hosting backend system** (just like YouTube) from scratch.

---

## 📺 Watch the Full Series

- 🎥 **[YouTube Playlist](https://www.youtube.com/watch?v=EH3vGeqeIAo&list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW)**  
  A step-by-step video series to help you build and understand every part of a backend system.

- 🧠 **[Architecture Whiteboard (Eraser Board)](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj?origin=share)**  
  Visual diagrams and architectural plans to understand how everything fits together.

---

## 🧰 Tech Stack

This project is built using the following technologies:

- **Node.js** – Runtime environment for JavaScript
- **Express.js** – Fast and minimalist web framework
- **MongoDB** – NoSQL database
- **Mongoose** – Object Data Modeling (ODM) for MongoDB
- **JWT** – Secure user authentication using access and refresh tokens
- **bcrypt** – Secure password hashing
- **dotenv** – Manage environment variables
- **Multer** – File upload handling (multipart/form-data)
- **Cloudinary** – Media storage and optimization
- **Nodemon** – Development auto-reloader
- **CORS** – Handle Cross-Origin Resource Sharing

---

## 🔐 Features

This is a **full-fledged video hosting backend**, built with security, scalability, and real-world features in mind:

### 👤 User System
- User Sign Up and Login
- Password hashing with **bcrypt**
- JWT-based access and refresh token authentication
- Role-based authorization using middleware

### 📹 Video Management
- Upload, stream, update, and delete videos
- Video views tracking
- Like / Dislike system

### 💬 Comment System
- Add comments and nested replies
- Like / Dislike comments
- Delete comments and replies

### 📢 Subscriptions
- Subscribe / Unsubscribe to other users
- Get notifications for new content (conceptual)

### ☁️ File & Media Handling
- Upload thumbnails, profile pictures, and videos using **Multer**
- Upload and manage files via **Cloudinary**

### 🚧 Security & Utilities
- Authentication & Authorization middleware
- Rate limiting & error handling
- Secure route protection
- Environment variable support using `.env`
- Clean code using **MVC** architecture

---
Project Structure

<<<<<<< HEAD
## 📁 Project Structure

```
chai-backend/
├── .github/              # GitHub workflows & actions
├── public/               # Static files
│   └── temp/             # Temporary file storage
├── src/                  # Main application source
│   ├── app.js            # Express configuration
│   ├── index.js          # Entry point
│   ├── constants.js      # Constant values
│   ├── db/               # MongoDB connection logic
│   ├── controllers/      # Core business logic
│   ├── models/           # Mongoose schemas
│   ├── routes/           # Express routes
│   ├── middlewares/      # Middleware for auth, error handling, etc.
│   └── utils/            # Helper utilities
├── .env.sample           # Sample .env file
├── .gitignore            # Files to ignore in git
├── .dockerignore         # Docker ignore list
├── Dockerfile            # Docker setup
├── package.json          # NPM scripts & dependencies
├── pnpm-lock.yaml        # PNPM lockfile
└── README.md             # Project documentation
```
=======
├── .github/              # GitHub-specific files (e.g., workflows)
├── public/               # Static files
│   └── temp/
├── src/                  # Main source code
│   ├── constants.js      # Project-wide constants
│   ├── app.js            # Express app configuration
│   ├── db/               # Database connection logic
│   │   └── index.js
│   ├── controllers/      # Request handlers and business logic
│   ├── middlewares/      # Custom Express middlewares
│   ├── models/           # Mongoose data models
│   ├── routes/           # API route definitions
│   ├── utils/            # Utility functions and classes
│   └── index.js          # Application entry point
├── .dockerignore         # Docker ignore file
├── .env.sample           # Sample environment variables
├── .gitignore            # Git ignore file
├── Dockerfile            # Docker configuration
├── package.json          # Project dependencies and scripts
├── pnpm-lock.yaml        # PNPM lock file
└── README.md             # You are here!
>>>>>>> 20c8f74def021af40f5e6f5ed35aef55ad2bf668

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/chai-backend.git
cd chai-backend
```

### 2. Install dependencies

```bash
pnpm install  # or npm install
```

### 3. Configure environment variables

Create a `.env` file based on `.env.sample`:

```bash
cp .env.sample .env
```

Update with your MongoDB URI, JWT secrets, Cloudinary credentials, etc.

### 4. Run the project

```bash
pnpm dev  # or npm run dev
```

Your server should now be running on `http://localhost:8000`

---

## 🧠 Learning Objectives

By working on this project, you will learn:

- How to structure large-scale backend projects
- Real-world authentication and session management
- How to use cloud services for media
- API architecture and RESTful design
- Clean code and MVC architecture principles
- How to manage file uploads securely

---

## 📄 License

This project is under the [MIT License](LICENSE). Use it for learning, not for cloning in production.

---

Happy Coding! 🚀  
*Built with ❤️ in the Chai aur Code community*
