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
      const exp = window.atob(data.token.split(".")[1]).exp;
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.username);
      localStorage.setItem("id", data.id);
      localStorage.setItem("isAdmin", data.isAdmin);
      localStorage.setItem("exp", exp);
      setUser({
        token: data.token,
        username: data.username,
        userId: data.id,
        isAdmin: data.isAdmin,
        exp: exp,
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
      const tokenObj = window.atob(data.token.split(".")[1]);
      const { exp } = JSON.parse(tokenObj);
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.username);
      localStorage.setItem("id", data.id);
      localStorage.setItem("isAdmin", data.isAdmin);
      localStorage.setItem("exp", exp);
      setUser({
        token: data.token,
        username: data.username,
        userId: data.id,
        isAdmin: data.isAdmin,
        exp: exp,
      });
      return true;
    } else if (resp.status === 401) {
      return data.err;
    } else throw new Response("Error completing request");
  };

export const postAction = async ({ request, params }) => {
  const formData = await request.formData();
  const intent = formData.get("intent");
  const { postId } = params;

  if (intent === "likePost") {
    const resp = await handleData(`posts/${postId}/like`, {}, "PUT");

    if (resp.ok) {
      return true;
    } else throw new Response("Error completing request");
  } else if (intent === "newPost") {
    const content = formData.get("content");
    const resp = await handleData(`comments/${postId}`, { content }, "POST");
    const data = await resp.json();

    if (resp.ok) {
      return data;
    } else throw new Response("Error completing request");
  } else if (intent === "editPost") {
    const content = formData.get("content");
    const commentId = formData.get("commentId");

    const resp = await handleData(`comments/${commentId}`, { content }, "PUT");
    const data = await resp.json();

    if (resp.ok) {
      return data;
    } else throw new Response("Error completing request");
  } else if (intent === "delCom") {
    const commentId = formData.get("commentId");

    const resp = await handleData(`comments/${commentId}`, {}, "DELETE");
    if (resp.ok) {
      return true;
    } else throw new Response("Failed to delete comment.");
  }
};
