import md5 from "js-md5";


const privateKey = "35792de2a5e56fb2892f5c34f9c4d1ac4207c14b";
const publicKey = "6b570a4f30c77f6280c0521ed75cfb94";
const ts = Date.now();
const apiKey = md5(Date.now() + privateKey + publicKey);

var initialState = {};

fetch('http://gateway.marvel.com/v1/public/characters?ts=' + ts + '&apikey=' + publicKey + '&hash=' + apiKey)
  .then(response=> {
    return response.json();
  })
  .then(res => {
    res.data.results.map(item => initialState[item.id] = item);
    return;
  });

export function heroList(state = initialState) {
  return state;
}