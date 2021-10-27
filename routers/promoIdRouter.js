const express = require('express');
const bodyParser = require('body-parser');

const promoIdRouter = express.Router();
promoIdRouter.use(bodyParser.json());

promoIdRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send details of the promotions: ' + req.params.dishId +' to you!');
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation is not supported on /promotions');
})
.put((req, res, next) => {
    res.write('Updating the promotions: ' + req.params.dishId + '\n');
    res.end('Will update the promotions: ' + req.body.name + 
        ' with details: ' + req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting promotions: ' + req.params.dishId);
})

module.exports = promoIdRouter;