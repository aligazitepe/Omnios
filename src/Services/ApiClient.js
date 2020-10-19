const BASE_URL = "https://api.punkapi.com/v2";
export default {
  getallBeers: () => {
    const page= "1";
    const perPage ="80"
    return fetchRequest(`beers?page=${page}&per_page=${perPage}`,);
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
