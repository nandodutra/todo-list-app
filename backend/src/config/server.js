const port = 3003;
const bodyParse = require('body-parser');
const express = require('express');
const cors = require('./cors');
const app = express();

app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());
app.use(cors);

app.listen(port, () => {
    console.log(`Backend is running on port ${port}`);
});

module.exports = app;