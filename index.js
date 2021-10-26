const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dishRouter = require('./routers/dishRouter')
const dishIdRouter = require('./routers/dishIdRouter')

const hostname = "localhost";
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json())

app.use('/dishes', dishRouter)
app.use('/dishId', dishIdRouter)

 app.use(express.static(__dirname+ '/public')); 


 
const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})