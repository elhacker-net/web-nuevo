import express from 'express';
import base from './base';

const port = process.env.NODE_HTTP_PORT || 8080;
const app = express();

app.use(base);

app.listen(port, () => {
    console.log(`Listening... on port ${port}`);
});
