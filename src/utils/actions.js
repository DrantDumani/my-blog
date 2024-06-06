import { redirect } from "react-router-dom";
import { handleData } from "./handleData.js";

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
