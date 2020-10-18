const BASE_URL = "https://api.punkapi.com/v2";

export default {
  getallBeers: () => {
    return fetchRequest(`beers`,);
  },
};

const fetchRequest = (url, options) => {
  return fetch(`${BASE_URL}/${url}`)
    .then((res) => (res.status <= 400 ? res : Promise.reject(res)))
    .then((res) => res.json())
    .catch((err) => {
      console.log(`${err.message} while fetching /${url}`);
    });
};
