# Product Management RESTful API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node.js-v20.x-green?style=flat)](https://nodejs.org/en/)
[![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

This project is a robust RESTful API built from the ground up using Node.js, Express, and MongoDB. It serves as the complete backend for a product management application, providing a full suite of endpoints for creating, reading, updating, and deleting product data.

### Key Features

This API comes packed with all the essential features for product management:

- ✅ **Full CRUD Functionality**: Create, read, update, and delete products.
- ✅ **RESTful Architecture**: Follows standard REST API conventions and principles.
- ✅ **Data Validation**: Utilizes Mongoose schemas for data validation and consistency.
- ✅ **MVC Architecture**: Employs a clean Model-View-Controller pattern for maintainability.
- ✅ **Environment-Based Configuration**: Securely manages database credentials and server settings using `.env` files.

### Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose ODM)
- **Environment Management**: Dotenv
- **API Testing**: Insomnia

### API Documentation

Here's a breakdown of the available endpoints. The base URL for all routes is `/api/products`.

| Method | Endpoint | Description | Request Body (Payload) | Success Response (2xx) |
| :--- | :--- | :--- |:--- | :--- |
| `GET` | `/` | Retrieve all products. | `(empty)` | `[ { "_id": "...", "name": "...", ... } ]` |
| `GET`| `/:id` | Retrieve a single product by its ID. | `(empty)` | `{ "_id": "...", "name": "...", ... }` |
| `POST`| `/` | Create a new product. | `{ "name": "string", "price": number }` | `{ "_id": "...", "name": "...", ... }` |
| `PUT`| `/:id` | Update an existing product. | `{ "name": "string", "price": number }` | `{ "_id": "...", "name": "...", ... }` |
| `DELETE`| `/:id` | Delete a product. | `(empty)` | `{ "message": "Product deleted successfully" }`|

### API Testing

The endpoints for this API have been thoroughly tested using [Insomnia](https://insomnia.rest/), a popular tool for API development.

You can import the Insomnia collection for this project to quickly test all the endpoints yourself. The collection file can be found [here](./insomnia_collection.json). (Note: You would need to export your collection from Insomnia and add the file to your project).

### Getting Started

To get a local copy up and running, just follow these simple steps.

#### Prerequisites

- Node.js (v18 or higher recommended)
- npm
- A MongoDB Atlas account or a local MongoDB installation

#### Installation & Setup
1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/amalthomas26/simple-crud-app-backend.git](https://github.com/amalthomas26/simple-crud-app-backend.git)
    ```
2.  **Jump into the directory:**
    ```sh
    cd simple-crud-app-backend
    ```
3.  **Install dependencies:**
    ```sh
    npm install
    ```
4.  **Set up your environment variables:**
    Create a `.env` file in the root of the project and add your MongoDB connection URI and a port number.
    ```
    # .env file
    MONGO_URI="your_mongodb_connection_string"
    PORT=3000
    ```

### Running the Application

-   **For Development**: This command uses Node's built-in `--watch` flag to automatically restart the server whenever you save a file.
    ```sh
    npm run dev
    ```
-   **For Production**: This command runs the server in a standard production environment.
    ```sh
    npm start
    ```

### Architecture and Project Structure

I've structured this project using the **Model-View-Controller (MVC)** architectural pattern. This approach separates the application's concerns into three interconnected components, which keeps the code organized, scalable, and easy to maintain.

-   **Model**: Represents the data structure and interacts with the database. This is handled by the Mongoose schemas in the `/models` directory.
-   **View**: In the context of a REST API, the "View" is the data returned to the client, typically in JSON format. This is handled by the `res.json()` responses in our controllers.
-   **Controller**: Acts as the brain of the application. It receives requests from the routes, interacts with the Model to perform database operations, and sends back a response. This logic resides in the `/controllers` directory.