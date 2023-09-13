export async function getProduct() {
  const baseUrl = "https://fakestoreapi.com/";
  // const response = await fetch();

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
}

export async function getCart() {
  const baseUrl = "https://fakestoreapi.com/";
  // const response = await fetch();

  fetch(baseUrl)
    .then((res) => res.json())
    .then((json) => console.log(json));

  fetch("https://fakestoreapi.com/cart"),
    {
      method: "GET",
      body: JSON.stringify,
    };
}

export async function getStore() {}
