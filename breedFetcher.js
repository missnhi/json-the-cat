const needle = require(`needle`);

const breedName = process.argv[2];

const fetchBreedDescription = function(breedName, callback) {
  needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response) => {
    if (error) {
      callback(error, null);
    } else {
      const data = response.body[0];
      // console.log(data);
      if (data) {
        callback(null, data.description);
      } else {
        // if breed not found
        callback(null, `Breed not found`);
      }
    }
  });
}
// TEST
fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log(`Error fetch details: `, error);
  }
  console.log(description);
  
});
module.exports = {fetchBreedDescription};