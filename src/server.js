const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const User = require('./models/user');

const app = express();
const port = process.env.PORT || 3000;

const connect = mongoose.connect("mongodb://localhost:27017/salescout");
//app.use(express.json());
connect.then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use(bodyParser.json());
app.post('/api/login', async (req, res) => {
    const { phoneNumber, password } = req.body;
    try {
        // Check if user exists
        const user = await User.findOne({ phoneNumber, password });
        if (user) {
            res.json({ success: true, message: 'Login successful' });
        } else {
            res.status(401).json({ success: false, message: 'Invalid phone number or password' });
        }
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});