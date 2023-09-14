export async function getProduct() {
  const baseUrl = "https://fakestoreapi.com/";
  // const response = await fetch();

  fetch(baseUrl)
    .then((res) => res.json())
    .then((json) => console.log(json));

  fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    body: JSON.stringify({
      username: "mor_2314",
      password: "83r5^_",
    }),
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
}

export async function getCart() {
  const baseUrl = "https://fakestoreapi.com/";
  // const response = await fetch();

  fetch("https://fakestoreapi.com/carts")
    .then((res) => res.json())
    .then((json) => console.log(json));
}

export async function Login(id) {
  const baseUrl = "https://fakestoreapi.com/";

  fetch("https://fakestoreapi.com/users")
    .then((res) => res.json())
    .then((json) => console.log(json));

  fetch(`https://fakestoreapi.com/users/${id}`)
    .then((res) => res.json())
    .then((json) => console.log(json));
}

export async function getStore() {}
