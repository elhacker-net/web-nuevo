import express from 'express';
import base from './base';
import logo from './logo';
import api from './api';

const port = process.env.NODE_HTTP_PORT || 8080;
const app = express();

app.use(base);
app.use('/api', api);

app.listen(port, () => {
    console.log(logo);
    console.log(`Listening... on port ${port}`);
});
