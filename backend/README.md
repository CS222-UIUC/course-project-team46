# YumRev Backend - Restaurant Review Platform

YumRev Backend is the server-side component of the YumRev web application, built using Express.js and MySQL.

## Table of Contents

- [YumRev Backend - Restaurant Review Platform](#yumrev-backend---restaurant-review-platform)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Available Scripts](#available-scripts)
    - [`npm start`](#npm-start)
  - [Project Structure](#project-structure)
  - [API Endpoints](#api-endpoints)

## Getting Started

To get started with YumRev Backend, follow these steps:

1. Clone the repository:

```bash
https://github.com/CS222-UIUC/course-project-team46.git
```

2. Navigate to the backend folder:

```bash
cd course-project-team46
cd backend
```

3. Install the dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

Now the backend server should be running on [http://localhost:8080](http://localhost:8080).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the backend server in development mode.\
The server will be available at [http://localhost:8080](http://localhost:8080).

## Project Structure

Below is an overview of the main folders and files in the YumRev Backend project:

- **config**: Contains the configuration files, such as the database configuration file.
- **controllers**: Contains the controller files responsible for handling API requests and interacting with the database.
- **module**: Contains the model files defining the structure of the data and the database connection.
- **routes**: Contains the route files defining the API endpoints.

The entry point of the backend server is the `server.js` file, which sets up the Express application, middleware, and imports the API routes.

## API Endpoints

Below is a list of the main API endpoints provided by the YumRev Backend server:

- Restaurants
  - `GET /api/restaurant/list`: Retrieves a list of all restaurants.
  - `GET /api/restaurant/search`: Searches for restaurants based on a query.
  - `GET /api/restaurant/:id/menu`: Retrieves the menu of a specific restaurant.
  - `POST /api/restaurant/:id/rate`: Submits a rating for a specific restaurant.
  - `GET /api/restaurant/:id`: Retrieves information about a specific restaurant.

- Users
  - `POST /api/user/login`: Authenticates a user and returns a token.
  - `POST /api/user/register`: Registers a new user.

- Comments
  - `GET /api/restaurant/:id/comments`: Retrieves all comments for a specific restaurant.
  - `POST /api/restaurant/:id/add-comment`: Adds a new comment for a specific restaurant.
  - `POST /api/restaurant/:id/rate-comment/:commentsID`: Rates a specific comment.

These API endpoints are defined in the `routes/routes.js` file and are handled by the respective controller files in the `controllers` directory.
