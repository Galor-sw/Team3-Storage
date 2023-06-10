require('dotenv').config();
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;
const loginRouter = require('./routers/loginRouter');
const storageRouter = require('./routers/storageRouter');
const cookieParser = require('cookie-parser');
const connectDB = require('./mongo');

connectDB();

app.use(cookieParser());
app.use(express.json());

// Enable CORS
app.use(cors());
console.log(process.env.secretKey);
// Route handler for /login
app.use('/login', loginRouter);
app.use('/storage', storageRouter);
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Protected route example
app.get('/protected', authenticateToken, (req, res) => {
    // If the token is valid, the user is authenticated
    res.send('Protected Route');
});

// Middleware to authenticate the token
function authenticateToken(req, res, next) {
    // Get the token from the request headers or query string or cookies
    console.log(req.headers.authorization);
    const token = req.headers.authorization;
    // const token = req.headers.authorization?.split(' ')[1] || req.query.token || req.cookies.token;
    // console.log(req.cookies.token);
    // console.log(req.query.token);
    // Check if token is provided
    if (!token) {
        return res.status(401).send('Unauthorized');
    }

    // Verify the token
    jwt.verify(token, process.env.secretKey, (err, decoded) => {
        if (err) {
            return res.status(403).send('Invalid token');
        }

        // Store the decoded token in the request object for further use
        req.user = decoded;
        res.status(200);
        next();
    });
}

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
