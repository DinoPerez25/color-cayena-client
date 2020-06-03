const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.static(__dirname + "/dist"))

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));