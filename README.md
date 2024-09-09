Authentication Middleware (auth.js): The auth.js middleware handles user authentication. It checks for a JWT token in the Authorization header. If the token is present, it verifies it using jsonwebtoken.verify(). The decoded information (user ID and role) is attached to the request object (req.userId and req.userRole). If the user is an admin, it allows access by calling next(), otherwise, it returns an error. This middleware protects the userlist route.

Controller (authController.js):

Registration (reg): This function registers a new user by accepting user details (name, email, password, role, etc.) from the request body. Before saving the user, it checks if a user with the same email already exists. If not, the user is created and saved in MongoDB.

Login (login): It handles user login by checking if the email exists in the database. If found, it compares the provided password with the stored password. If the password matches, a JWT token is generated and sent back as the response.

User List (userlist): This route returns a list of all users stored in the database. It is protected by the auth middleware, meaning only authenticated users with an "Admin" role can access it.

Search by Country (searchByCountry): This function allows users to search for other users based on the country. It uses a case-insensitive regular expression to find matching users.

Routes (userRoutes.js): The routes file defines API endpoints and links them to the appropriate controller functions. It uses:

POST /reg for registration.
POST /login for user login.
GET /userlist to get a list of users (protected by auth middleware).
GET /search to search for users by country.
Express Server: The main Express server file (e.g., server.js) imports the routes and connects to MongoDB. The server listens on port 3000 and serves the defined routes at /api.



technology :


1.nodejs
2.expressjs
3.mongodb







