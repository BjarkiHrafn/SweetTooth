const candies = require('../Db/data').candies;
const offers = require('../Db/data').offers;
const pinatas = require('../Db/data').pinatas;


const SweetService = () => {

  const getAllCandies = () => {
    return candies;
  };
  const createCandy = (candy) => {
    let highestId = 0;
    candies.forEach(x => { if(x.id > highestId) { highestId = x.id; } });
    candy.id = highestId + 1;
    candies.push(candy);
    return candy;
  };
  const getCandyById = (id) => {
    const theCandy = candies.filter(x => x.id == id); //filtera eftir id
    if(theCandy.length === 0) { return -1; } // ef eg fae tomann lista skila eg -1
    return theCandy[0]; // annars skila eg stakinu


  };
  const getAllOffers = () => {

    let mappedOffers = offers.map((value, index) => { //offers is an array so we map it
       value.candies = value.candies.map((value, index) => { //because offers contains another array we must also map that array
        value = candies[index]; // get the correct candy by id
        return value;
      });
      return value;
    });

    return mappedOffers;
  };
  const getAllPinatas = () => {

  };
  const getPinataById = (id) => {

  };
  const createPinata = (pinata) => {

  };
  const hitThePinata = (pinata, id) => {

  };
  return {
    getAllCandies,
    createCandy,
    getCandyById,
    getAllOffers,
    getAllPinatas,
    getPinataById,
    createPinata,
    hitThePinata
  };
};

module.exports = SweetService();
