const HOUSES = require(`./db.json`);

let newHouseID = 4

module.exports = {
    getHouses: (request, response) => {
        response.status(200).send(HOUSES)
    },
     createHouse: (request, response) => {
        let newHouse = {
            "id": newHouseID,
            "address": request.body.address,
            "price": request.body.price,
            "imageURL": request.body.imageURL
        }
            HOUSES.push(newHouse);
            console.log(newHouse);
            response.status(200).send(HOUSES)
        
    },
    updateHouse: (request, response) => {
        let index = HOUSES.findIndex(house => house.id === +request.params.id)
        let type = request.body.type
        if(type === `plus`){
            HOUSES[index].price += 10000
        }
        else if(type === `minus`){
            HOUSES[index].price -= 10000
        }
        response.status(200).send(HOMES)
    },
    deleteHouse: (request, response) => {
        let index = HOUSES.findIndex(house => house.id === +request.params.id)
        HOUSES.splice(index, 1)
        response.status(200).send(HOUSES)
    }
    
}
