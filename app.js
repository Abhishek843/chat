const path = require('path');

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/user');
const errorController = require('./controllers/error');

const app = express();

app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', userRoutes);
app.use(errorController.get404);

app.listen(process.env.PORT || 3000);