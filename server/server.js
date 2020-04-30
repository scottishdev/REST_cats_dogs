const express = require('express');
const app = express();
const cors = require('cors');
const createRouter = require('./createRouter.js');
const bodyParser = require('body-parser');

const dogList = [
  { name: "Fluffy", breed: "Pomeranian" },
  { name: "Kane", breed: "Rottweiler" },
  { name: "Bonzo", breed: "German Shepherd" },
  { name: "Lucky", breed: "Cockapoo" },
  { name: "Luna", breed: "Husky" }
];

app.use(cors());
app.use(bodyParser.json());

const dogsRouter = createRouter(dogList); //How to link dogs on App.vue to this?

app.use('/api/dogs/', dogsRouter);

app.listen(3000, function(){
  console.log(`App running on port ${this.address().port}`);
})
