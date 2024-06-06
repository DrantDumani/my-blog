import { redirect } from "react-router-dom";

const apiStr = "http://localhost:3000/";

export const handleData = async (
  endPoint,
  input = undefined,
  method = "GET"
) => {
  const token = localStorage.getItem("token");
  const options = {
    mode: "cors",
    method: method,
    body: JSON.stringify(input),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  return fetch(apiStr + endPoint, options);
};

export const signUp =
  (context) =>
  async ({ request }) => {
    const { setUser } = context;
    const formData = await request.formData();
    const inputObj = Object.fromEntries(formData);
    const resp = await handleData("users", inputObj, "POST");
    const data = await resp.json();

    if (resp.ok) {
      localStorage.setItem("token", data.token);
      setUser({
        token: data.token,
        username: data.username,
        userId: data.id,
        isAdmin: data.isAdmin,
        exp: data.exp,
      });
      return redirect("/");
    } else if (resp.status === 403) {
      return data.errs;
    } else throw new Response("Error completing request");
  };

export const login =
  (context) =>
  async ({ request }) => {
    const { setUser } = context;
    const formData = await request.formData();
    const inputObj = Object.fromEntries(formData);
    const resp = await handleData("users/login", inputObj, "POST");
    const data = await resp.json();

    if (resp.ok) {
      localStorage.setItem("token", data.token);
      setUser({
        token: data.token,
        username: data.username,
        userId: data.id,
        isAdmin: data.isAdmin,
        exp: data.exp,
      });
      return redirect("/");
    } else if (resp.status === 401) {
      return data.err;
    } else throw new Response("Error completing request");
  };
