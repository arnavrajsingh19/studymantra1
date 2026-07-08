# 🎓 StudyMantra - MERN Stack EdTech Platform

StudyMantra is a full-stack Learning Management System (LMS) built using the MERN Stack. It provides a complete online learning platform where instructors can create and manage courses while students can browse, enroll, and learn through an intuitive dashboard.

---

## 🚀 Features

### 👨‍🎓 Student
- User Registration & Login (OTP Authentication)
- Browse Available Courses
- Purchase/Enroll in Courses
- Track Learning Progress
- View Enrolled Courses
- Responsive Dashboard

### 👨‍🏫 Instructor
- Create New Courses
- Upload Course Content
- Edit/Delete Courses
- View Student Enrollments
- Manage Course Details
- Instructor Dashboard

### 🔐 Authentication
- OTP Verification
- JWT Authentication
- Protected Routes
- Role-Based Access Control

### 📱 General
- Responsive Design
- Modern UI
- Toast Notifications
- RESTful API
- Cloud Media Storage
- Secure Backend

---

# 🛠️ Tech Stack

### Frontend
- React.js
- Redux Toolkit
- React Router DOM
- Tailwind CSS
- React Icons
- React Hot Toast
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Bcrypt
- Cloudinary
- Nodemailer

### Database
- MongoDB Atlas

### Deployment
- Frontend: Vercel
- Backend: Render

---

# 📂 Project Structure

```
StudyMantra
│
├── client
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── redux
│   │   ├── services
│   │   ├── utils
│   │   └── assets
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   └── index.js
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/studymantra.git
```

```bash
cd studymantra
```

---

## Install Dependencies

### Backend

```bash
cd server
npm install
```

### Frontend

```bash
cd client
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the server folder.

```env
PORT=5000

MONGODB_URL=your_mongodb_url

JWT_SECRET=your_secret

MAIL_HOST=

MAIL_USER=

MAIL_PASS=

CLOUD_NAME=

API_KEY=

API_SECRET=
```

---

# ▶️ Run Locally

Backend

```bash
npm run dev
```

Frontend

```bash
npm start
```

---

# 📸 Screenshots

Add screenshots of:

- Home Page
- Student Dashboard
- Instructor Dashboard
- Course Page
- Login Page
- OTP Verification
- Create Course

Example:

```
screenshots/
├── home.png
├── login.png
├── dashboard.png
├── instructor.png
└── courses.png
```

---

# 🌟 Future Enhancements

- Live Classes
- Video Streaming
- Certificate Generation
- Quiz Module
- Discussion Forums
- AI Learning Assistant
- Course Recommendations
- Dark Mode
- Mobile App

---

# 👨‍💻 Author

**Arnav Raj Singh**

B.E. Electronics & Communication Engineering

Thapar Institute of Engineering and Technology

GitHub: https://github.com/yourusername

LinkedIn: https://linkedin.com/in/yourprofile

---

# 📄 License

This project is licensed under the MIT License.

---

## ⭐ If you found this project useful, don't forget to star the repository!
