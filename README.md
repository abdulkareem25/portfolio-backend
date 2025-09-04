# Portfolio API Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

This repository contains the source code for the backend API that powers my personal portfolio website. It is a secure, robust, and scalable RESTful API built with Node.js, Express, and MongoDB, designed to manage all portfolio content, including projects, skills, and user authentication.

## ✨ Features

-   **Full CRUD Functionality:** Create, Read, Update, and Delete operations for portfolio projects and skills.
-   **Secure Authentication:** JWT-based authentication to protect private routes, ensuring only the administrator can modify content.
-   **Password Hashing:** Uses `bcryptjs` to securely hash and salt user passwords, never storing them in plaintext.
-   **Environment-Based Configuration:** Separate configurations for development and production environments using `.env` files.
-   **Professional Structure:** Clean, modular code organized by feature (models, controllers, routes, middleware) for maintainability.

## 🚀 Technologies Used

-   **Backend:** Node.js, Express.js
-   **Database:** MongoDB with Mongoose ODM
-   **Authentication:** JSON Web Tokens (JWT), bcryptjs
-   **Development Tools:** Nodemon, cross-env
-   **Environment Management:** dotenv

## 🛠️ Setup and Installation

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js installed
-   A MongoDB database (local or via [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/abdulkareem25/portfolio-backend.git](https://github.com/abdulkareem25/portfolio-backend.git)
    cd portfolio-backend
    ```

2.  **Install NPM packages:**
    ```sh
    npm install
    ```

3.  **Create your environment file:**
    Create a `.env.development` file in the root of the project and add the following variables:
    ```env
    NODE_ENV=development
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_super_secret_jwt_key
    ```

4.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The server will start on `http://localhost:5000`.

## ⚙️ API Endpoints Documentation

The following is a detailed list of the available API endpoints.

### Authentication

| Method | Endpoint             | Access | Description                           |
| :----- | :------------------- | :----- | :------------------------------------ |
| `POST` | `/api/auth/register` | Public | Registers the admin user.             |
| `POST` | `/api/auth/login`    | Public | Logs in the admin to receive a JWT. |

**Request Body for `/register` and `/login`:**
```json
{
  "email": "admin@example.com",
  "password": "yourpassword"
}
```

## Projects

### Endpoints

| Method | Endpoint           | Access  | Description                  |
| :----- | :----------------- | :-----  | :--------------------------  |
| `GET`    | `/api/projects`     | Public  | Fetches all portfolio projects. |
| `POST`   | `/api/projects`      | Private | Adds a new project.          |
| `PUT`    | `/api/projects/:id`  | Private | Updates an existing project. |
| `DELETE` | `/api/projects/:id`  | Private | Deletes a project.           |

**Request Body for `POST` `/projects` :**

```json
{
  "title": "My Awesome Project",
  "description": "A project description.",
  "imageUrl": "http://example.com/image.png",
  "technologies": ["Node.js", "React"],
  "liveUrl": "http://example.com",
  "githubUrl": "http://github.com/my-repo"
}
```

## Skills

### Endpoints

| Method | Endpoint        | Access  | Description            |
| :----- | :-------------- | :------ | :--------------------- |
| `GET`    | `/api/skills `    | Public  | Fetches all skills.    |
| `POST`   | `/api/skills`     | Private | Adds a new skill.      |
| `PUT`    | `/api/skills/:id` | Private | Updates an existing skill. |
| `DELETE` | `/api/skills/:id` | Private | Deletes a skill.       |

**Request Body for `POST` `/skills` :**

```json
{
  "name": "JavaScript",
  "level": 90
}
```

**Note:** Private routes require a valid JWT to be included in the Authorization header as a Bearer Token.