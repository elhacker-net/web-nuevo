const express = require('express');
const api = require('./api');
const logo = require('./logo');

const app = express();

const port = process.env.NODE_HTTP_PORT || 8080;
app.use('/api', api);

app.listen(port, () => {
    console.log(logo);
    console.log(`Listening... on port ${port}`);
});
