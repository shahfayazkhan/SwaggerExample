// app.js

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

// Middleware for parsing JSON request bodies
app.use(bodyParser.json());

/**
 * @swagger
 * tags:
 *   - name: GET
 *     description: GET operations
 *   - name: POST
 *     description: POST operations
 */

/**
 * @swagger
 * /api/user/{id}:
 *   get:
 *     summary: Get a user by ID
 *     description: Retrieve a user's information by their ID.
 *     tags: [GET]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the user to retrieve.
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               id: 123
 *               name: John Doe
 *       '404':
 *         description: User not found
 */
app.get("/api/user/:id", (req, res) => {
  const userId = req.params.id;
  const queryParams = req.query;
  // Your logic here...
  res.json({ userId, queryParams });
});

/**
 * @swagger
 * /api/post:
 *   post:
 *     summary: Create a new post
 *     description: Create a new post with a Bearer token for authentication.
 *     tags: [POST]
 *     requestBody:
 *       description: Post data
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             title: New Post
 *             content: This is a new post.
 *     responses:
 *       '201':
 *         description: Post created
 *       '401':
 *         description: Unauthorized
 */
app.post("/api/post", (req, res) => {
  const bearerToken = req.headers.authorization;
  const requestBody = req.body;
  // Your logic here...
  res.json({ bearerToken, requestBody });
});

// Serve Swagger JSON as an API endpoint
app.get("/api/swagger-json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.json(swaggerSpec);
});

// Serve Swagger documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
