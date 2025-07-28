# Movie Race - API

This repository contains the backend API for the Movie Race application. It's a Node.js and Express server that connects to a MongoDB database to supply the frontend with all the necessary movie data. Its primary job is to serve movie information, particularly the random selection needed to start a race.

---

## Features

* **RESTful API:** Provides clear and accessible endpoints for movie data.
* **Database Integration:** Uses Mongoose to connect to and interact with a MongoDB Atlas database.
* **Serves Randomized Data:** Includes a dedicated endpoint to provide a random selection of movies for the race feature.

---

## Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB Atlas
* **ODM:** Mongoose

---

## API Endpoints

| Method | Endpoint              | Description                                        |
| :----- | :-------------------- | :------------------------------------------------- |
| `GET`  | `/api/movies/race`    | Fetches a random set of movies for a race.         |
| `GET`  | `/api/movies/:id`     | Retrieves data for a single movie by its ID.       |
| `GET`  | `/api/movies`         | Returns a paginated list of all movies.            |

---

## Getting Started

To run the server locally, you will need to configure your environment.

### Prerequisites

You must have Node.js and npm installed. You will also need a MongoDB Atlas connection string.

### Installation & Setup

1.  Clone the repository:
    ```bash
    git clone [https://github.com/your-username/backend-repo-name.git](https://github.com/your-username/backend-repo-name.git)
    ```

2.  Navigate to the project directory:
    ```bash
    cd backend-repo-name
    ```

3.  Install dependencies:
    ```bash
    npm install
    ```

4.  Create a `.env` file in the root directory for your environment variables. Add your MongoDB connection string and a port for the server.
    ```env
    MONGO_URI=your_mongodb_atlas_connection_string
    PORT=5000
    ```

5.  Start the server:
    ```bash
    npm start
    ```
    The API will be listening for requests at `http://localhost:5000`.

---

## License

This project is licensed under the MIT License.
