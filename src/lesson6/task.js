// с помощью Fetch API и swapi.co API получить следующие данные
import fetch from 'isomorphic-fetch';

// Климат на любой планете по её имени
// {planetName} – String
const getClimate = function getClimate(planetName) {
  return fetch(`https://swapi.co/api/planets/?search=${planetName}`)
    .then(resp => resp.json())
    .then(resp => {
      if (resp.count === 0) {
        return 'No such planet';
      }

      if (resp.count > 1) {
        return 'More than one result. Please povide more specific data';
      }

      return resp.results[0].climate;
    })
    .catch(error => {
      throw error;
    });
};

// Получить информацию (Object) о любом персонаже по имени
// {name} – String
const getProfile = function getProfile(name) {
  return fetch(`https://swapi.co/api/people/?search=${name}`)
    .then(resp => resp.json())
    .then(resp => {
      if (resp.count === 0) {
        return 'No such profile';
      }

      if (resp.count > 1) {
        return 'More than one result. Please povide more specific data';
      }

      return resp.results[0];
    })
    .catch(error => {
      throw error;
    });
};

// Получить список пилотов (имена в виде Array of Strings) космического корабля
// по его названию
// {starshipName} - String
async function getPilots(starshipName) {
  const nameUrls = [];
  try {
    const starShip = await fetch(`https://swapi.co/api/starships/?search=${starshipName}`)
      .then(resp => resp.json())
      .then(resp => resp.results[0]);
    await starShip.pilots.forEach(url => nameUrls.push(url));
  } catch (err) {
    throw err;
  }
  const ps = nameUrls.map(url => (
    fetch(url)
      .then(resp => resp.json())
      .then(resp => resp.name)
  ));
  return Promise.all(ps);
}

export default {
  getClimate,
  getProfile,
  getPilots,
};
