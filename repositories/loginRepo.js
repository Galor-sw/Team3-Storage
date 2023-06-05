const jwt = require('jsonwebtoken');
const secretKey = process.env.secretKey;
module.exports = {

    validate: (e) => {
        if (e.email == 'galor@gmail.com' && e.password == 123) {
            console.log('successs');
            console.log(secretKey);
            // If authentication succeeds, generate a JWT token
            const token = jwt.sign({ email: e.email }, secretKey);

            // Send the token back to the client
            return { token };
        }

    }
};