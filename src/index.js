const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

["SIGINT", "SIGTERM"].forEach(signal => {
    process.on(signal, () => {
        console.log(`Received ${signal}, shutting down gracefully...`);
        process.exit(0);
    });
});