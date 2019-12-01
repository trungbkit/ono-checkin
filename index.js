const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
const socket = require('./socket');
const router = require('./router');
const acceptCors = require('./middleware/acceptCors');
const upload = require('./middleware/upload');
const { uploadImage, getImage } = require('./upload');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const port = process.env.PORT || 3456;

socket(io);
app.use(acceptCors);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', router);
app.get('/upload/:filename', getImage);
app.post('/upload', upload.fields([{ name: 'image', maxCount: 1 }]), uploadImage);
app.use(express.static(path.join(__dirname, 'www')));
app.use((req, res) => res.sendFile(path.join(__dirname, 'www/index.html')));

server.listen(port, () => console.log(`Server is running at port ${port}`));
