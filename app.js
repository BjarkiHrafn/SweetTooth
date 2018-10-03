const express = require('express');
const bodyParser = require('body-parser');
const sweetService = require('./Service/SweetService');
const port = 5000;

const app = express();
app.use(bodyParser.json());

app.get('/api/candies', (request, response) => {
  return response.json(sweetService.getAllCandies());
});

app.post('/api/candies', (request, response) => {
  const { body } = request;
  //const body = request.body;
  console.log("body: ", body);
  const result = sweetService.createCandy(body);

  if(result !== undefined)
    return response.status(201).json(result);

  return response.status(400).send();

});

app.get('/api/candies/:id', (request, response) => {
  const { id } = request.params;
  const result = sweetService.getCandyById(id);
  if(result === -1)
    return response.status(404).send();

    return response.json(result);

});

app.get('/api/offers', (request, response) => {
  return response.json(sweetService.getAllOffers());
});

app.get('/api/pinatas', (request, response) => {

});

app.get('/api/pinatas/:id', (request, response) => {

});

app.post('/api/pinatas', (request, response) => {

});

app.patch('/api/pinatas/:id/hit', (request, response) => {

});



app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
