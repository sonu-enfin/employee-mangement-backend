const express = require('express');
const app = express();

const PORT = process.env.PORT || 5002;

app.get("/", (req, res) => {
    res.json(`App running port : ${PORT}`)
})

app.listen(PORT, () => {
    console.log(`App running port : ${PORT}`);
})