import { handleData } from "./handleData";

export const getPosts = async ({ request }) => {
  const url = new URL(request.url);
  const query = url.searchParams.toString();
  const endPoint = url.pathname === "/" ? "posts?limit=3" : `posts?${query}`;

  const resp = await handleData(endPoint);
  const data = await resp.json();

  if (resp.ok) {
    return data.posts;
  } else throw new Response("Error retrieving posts");
};
