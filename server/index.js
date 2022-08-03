const express = require(`express`);

const cors = require(`cors`);

const app = express(); 

const {getHouses, createHouse, updateHouse, deleteHouse} = require("./controller.js");


app.use(express.json());// this will allow us to usee JSON

app.use(cors());// this will allow us to make calls to ourselves


app.get(`/api/houses`, getHouses);
app.post(`/api/houses`, createHouse);
app.delete(`/api/houses/:id`, deleteHouse);
app.put(`/api/houses/:id`, updateHouse);


// use nodemon server/index sees if we are live on whichever port
app.listen(4004, console.log(`Server running on port 4004`));