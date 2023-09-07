const baseUrl = "https://fakestoreapi.com/";

fetch(baseUrl)
  .then((res) => res.json())
  .then((json) => console.log(json));
