# HRMS Backend & Frontend

This project is a **Human Resource Management System (HRMS)** that allows an admin and local users to manage and view videos of abnormal events (accidents, chain snatching, kidnapping, fighting) and monitor road‑safety matters.

## 📽 Demo Video  
You can view a demo of the system here:  
[Watch Demo Video](https://res.cloudinary.com/dq1rqwebs/video/upload/v1763985596/video_pjc4yb.mp4)

## 🛠 Technologies Used  
- Backend: Node.js, Express.js, Sequelize ORM, PostgreSQL  
- Frontend: React.js (Create‑React‑App)  
- Deployment:  
  - Backend: Render (or serverless)  
  - Frontend: Vercel  
- Video Storage: Cloudinary  
- Authentication: JSON Web Tokens (JWT), bcrypt (for password hashing)  
- Object Detection: YOLOv8 (already processed the video uploads)

## 🎯 Features  
- **Admin account**: Access to view all types of abnormal event videos (accidents, fighting, chain snatching, kidnapping)  
- **Local user account**: Access only to view accident‑related videos  
- User authentication with login  
- Dashboard view: videos displayed in a structured way, with title (first word of video name), description, creation date/time  
- Video uploading, processing (object detection), storing in Cloudinary  
- Metadata and filtering by keywords (accident, chain, kidnapping, fighting)  
- Responsive React UI, with routing and state management  

## 🔧 Setup & Deployment

### Backend Setup  
1. Clone the backend repository  
   ```bash
   git clone <backend‑repo‑url>
   cd backend
````

2. Create a `.env` file in the project root:

   ```env
   PORT=5000
   DB_HOST=your_postgres_host
   DB_USER=your_db_user
   DB_PASS=your_db_password
   DB_NAME=your_db_name
   DB_PORT=5432
   JWT_SECRET=your_jwt_secret
   ```
3. Install dependencies:

   ```bash
   npm install
   ```
4. Run locally:

   ```bash
   npm run dev
   ```
5. For deployment (e.g., on Render), ensure your environment variables are set in the dashboard and you use `process.env.PORT` (Render assigns it automatically).

### Frontend Setup

1. Clone the frontend repository

   ```bash
   git clone <frontend‑repo‑url>
   cd frontend
   ```
2. Create a `.env` file:

   ```env
   REACT_APP_API_URL=https://your‑backend‑url/api
   ```

   Note: On Vercel, set this under **Environment Variables** in the project settings.
3. Install dependencies and build:

   ```bash
   npm install
   npm run build
   ```
4. Deploy on Vercel:

   * Link your Git repository
   * Set build command to `npm run build`
   * Set output directory to `build`
   * Ensure `REACT_APP_API_URL` is set for Production

## 🖥 Folder Structure (Example)

```
/backend
  |- api/
      index.js
  |- db/
      index.js
  |- routes/
      auth.js
      employees.js
      teams.js
      logs.js
  |- models/
      user.js
      team.js
      log.js
  |- .env
  |- package.json

/frontend
  |- src/
      components/
      pages/
      App.js
      index.js
  |- .env
  |- package.json
```

## ✅ Usage

* Register or log in as **admin** or **local user**
* Upload videos (if you have upload functionality) or view existing videos
* On the dashboard:

  * Videos shown in columns with title, description, date/time
  * Filter videos by keywords (accident, chain, kidnapping, fighting)
* Admin sees all categories; local user sees only accidents.

## 🔍 Notes

* Make sure your `react-scripts` version and Node version are compatible for deployment on Vercel.
* Use `cors({ origin: '<frontend‑url>' })` or `cors({ origin: '*' })` in Express so your frontend can access the API.
* For video processing (YOLOv8, OpenCV) ensure cloud storage (e.g., Cloudinary) credentials are properly configured.

## 🧾 License

This project is released under the [MIT License](LICENSE).

## 🤝 Contact

For questions or issues, please contact:
Your Name – [your.email@example.com](mailto:your.email@example.com)
Project repository: [GitHub Link]

```

---

You can copy the above into your `README.md` and update the placeholder URLs, repository links, your contact information, and any additional features you've implemented.  
If you’d like, I can generate a version with **badges**, **screenshots**, or more detailed deployment instructions.
::contentReference[oaicite:0]{index=0}
```
