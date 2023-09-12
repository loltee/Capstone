const baseUrl = "https://fakestoreapi.com/";

export async function getProduct(){
  const response =await fetch())
}

fetch(baseUrl)
  .then((res) => res.json())
  .then((json) => console.log(json));

fetch("https://fakestoreapi.com/auth/login", {
  method: "POST",
  body: JSON.stringify({
    username: "pompom23",
    password: "oreo24",
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));

