Got it! Here’s an updated **README.md** without the Cloudinary reference:

````markdown
# Human Resource Management System (HRMS)

A full-stack web application for managing employees, teams, and logs, with user authentication and role-based access. This project demonstrates a complete HR management system backend and frontend.

---

## Features

- User authentication (Admin and Local users)
- Employee management
- Team management
- Role-based access control
- Logging and tracking
- Integration with PostgreSQL database
- Backend API with Express.js
- Frontend with React.js

---

## Demo

Watch the demo of the HRMS application here:

[![HRMS Demo](https://res.cloudinary.com/dq1rqwebs/video/upload/v1763985596/video_pjc4yb.mp4)](https://res.cloudinary.com/dq1rqwebs/video/upload/v1763985596/video_pjc4yb.mp4)

You can click the video above to view the demo.

---

## Installation

### Backend

1. Clone the repository:

```bash
git clone https://github.com/yourusername/Human-Resource-Management-System-backend.git
````

2. Install dependencies:

```bash
cd backend
npm install
```

3. Configure environment variables (`.env`):

```env
PORT=5000
DB_HOST=your-db-host
DB_USER=your-db-user
DB_PASS=your-db-password
DB_NAME=your-db-name
```

4. Run the server:

```bash
npm start
```

---

### Frontend

1. Clone the frontend repository:

```bash
git clone https://github.com/yourusername/Human-Resource-Management-System-frontend.git
```

2. Install dependencies:

```bash
cd frontend
npm install
```

3. Configure environment variables (`.env`):

```env
REACT_APP_API_URL=https://your-backend-url/api
```

4. Start the development server:

```bash
npm start
```

---

## Technologies Used

* **Frontend:** React.js, React Router, Axios
* **Backend:** Node.js, Express.js
* **Database:** PostgreSQL, Sequelize ORM
* **Authentication:** JWT (JSON Web Tokens)
* **Deployment:** Vercel (frontend), Render (backend)

---

## Sample Data

### Teams

| Name        | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| Development | Handles all software development and feature implementation. |
| Design      | Responsible for UI/UX and product design.                    |
| QA          | Quality assurance and testing of all software releases.      |
| HR          | Manages recruitment, employee relations, and benefits.       |
| Marketing   | Handles advertising, social media, and brand promotion.      |

---

## API Endpoints

* `POST /api/auth/login` — User login
* `GET /api/employees` — List employees
* `POST /api/employees` — Add new employee
* `GET /api/teams` — List teams
* `POST /api/teams` — Create a team
* `GET /api/logs` — Get logs

---

## License

This project is licensed under the MIT License.

```

---

If you want, I can also **add screenshots of the app and demo video thumbnail** so your README looks more professional on GitHub.  

Do you want me to do that?
```
