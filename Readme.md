<!-- # chai aur backend  series 

This is a video series on backend with javascript
- [Model link](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj?origin=share)

- [Video playlist](https://www.youtube.com/watch?v=EH3vGeqeIAo&list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW)

---
# Summary of this project

This project is a complex backend project that is built with nodejs, expressjs, mongodb, mongoose, jwt, bcrypt, and many more. This project is a complete backend project that has all the features that a backend project should have.
We are building a complete video hosting website similar to youtube with all the features like login, signup, upload video, like, dislike, comment, reply, subscribe, unsubscribe, and many more.

Project uses all standard practices like JWT, bcrypt, access tokens, refresh Tokens and many more. We have spent a lot of time in building this project and we are sure that you will learn a lot from this project.

---
Top Contributer to complete all TODOs

1. Spiderman (just sample)  [Link to Repo](https://www.youtube.com/@chaiaurcode)

--- 
## How to contribute in this open source Project

First, please understand that this is not your regular project to merge your PR. This repo requires you to finish all assignments that are in controller folder. We don't accept half work, please finish all controllers and then reach us out on [Discord](https://hitesh.ai/discord) or [Twitter](https://twitter.com/@hiteshdotcom) and after checking your repo, I will add link to your repo in this readme. -->

# ☕ Chai aur Backend Series

Welcome to the **Chai aur Backend** series — a complete and production-grade backend development course using modern JavaScript technologies. This project is a part of an in-depth video tutorial that covers everything from basics to advanced backend engineering practices.

---

## 📺 Watch the Full Series

- 🔗 **[Video Playlist](https://www.youtube.com/watch?v=EH3vGeqeIAo&list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW)**  
  Step-by-step tutorials to build and understand a full backend system from scratch.

- 🧠 **[Eraser Whiteboard Model](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj?origin=share)**  
  Visual explanation and planning of backend architecture.

---

## 🧰 Tech Stack

This project uses the following tools and libraries:

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework
- **MongoDB** – NoSQL database
- **Mongoose** – MongoDB ODM for schema modeling
- **JWT (JSON Web Tokens)** – Authentication (Access + Refresh Tokens)
- **bcrypt** – Password hashing
- **dotenv** – Environment variable management
- **Multer** – File uploads
- **Cloudinary** – Media storage and delivery
- **Nodemon** – Development server auto-reload
- **CORS** – Cross-Origin Resource Sharing support

---

## 📦 Features Covered

We are building a complete **video hosting backend** (similar to YouTube) which includes:

- ✅ User Authentication
  - Sign Up
  - Login
  - Secure password storage using **bcrypt**
  - Access + Refresh token-based authentication using **JWT**
- ✅ User Authorization with middleware
- ✅ Video Management
  - Upload video
  - Stream video
  - Like, dislike, comment, and reply system
  - Subscriptions and notifications
- ✅ Comment System with nesting (replies)
- ✅ Media handling using **Multer** and **Cloudinary**
- ✅ Secure routes with token validation
- ✅ Rate limiting and error handling
- ✅ Environment variable support with `.env`
- ✅ Organized folder structure with MVC pattern
- ✅ Best practices followed for clean and maintainable code

---
Project Structure

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

