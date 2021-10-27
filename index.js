const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dishRouter = require('./routers/dishRouter')
const dishIdRouter = require('./routers/dishIdRouter')
const promoRouter = require('./routers/promoRouter');
const promoIdRouter = require('./routers/promoIdRouter');
const leaderRouter = require('./routers/leaderRouter');
const leaderIdRouter = require('./routers/leaderIdRouter');


const hostname = "localhost";
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json())

app.use('/dishes', dishRouter)
app.use('/dishes/dishId', dishIdRouter)
app.use('/promotions', promoRouter)
app.use('/promotions/promoId', promoIdRouter)
app.use('/leaders/', leaderRouter)
app.use('/leaders/leaderId', leaderIdRouter)
 
const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})