const express = require('express');

//Create Router and All the RESTful functions
const createRouter = function(data){
  const router = express.Router();

  //INDEX
  router.get('/', function(req, res){
    res.json(data)
  });
  //SHOW
  router.get('/:id', function(req, res){
    res.json(data[req.params.id])
  });
  //CREATE/POST
  router.post('/:id', function(req, res){
    data.push(req.body);
    res.json(data);
  });
  //UPDATE/PUT
  router.put('/:id', function(req, res){
    data[req.params.id] = req.body
    res.json(data);
  })
  //DELETE
  router.delete('/:id', function(req, res){
    data.splice(req.params.id, 1);
    res.json(data);
  });
  return router;

};

module.exports = createRouter;
