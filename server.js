const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

const port = process.env.PORT || 5000;

let corsOptions = {
    origin: "localhost:8080",
    credentials: true
}

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    console.log("access detected");
    res.sendFile(__dirname + '/views/home.html');
})
app.post('/files', (req, res) => {
    console.log(req.files);
})

app.listen(port, (error) => {
    if (error) {
        console.log("에러", error);
    }
});
