require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sendEmailRoutes = require('./routes/sendMail');

const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use('/sendmail', sendEmailRoutes);

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});