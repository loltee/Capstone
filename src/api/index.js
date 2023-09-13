export async function getProduct() {
  const baseUrl = "https://fakestoreapi.com/";
  // const response = await fetch();

  fetch(baseUrl)
    .then((res) => res.json())
    .then((json) => console.log(json));

  fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    body: JSON.stringify({
      username: "",
      password: "",
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

export async function Login() {
  const baseUrl = "https://fakestoreapi.com/";

  fetch("https://fakestoreapi.com/users")
    .then((res) => res.json())
    .then((json) => console.log(json));
}

export async function getStore() {}
