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

export const getPostAndComments = async ({ params }) => {
  const { postId } = params;
  const [postResp, commentsResp] = await Promise.all([
    handleData(`posts/${postId}`),
    handleData(`comments/${postId}`),
  ]);

  if (postResp.ok && commentsResp.ok) {
    const [post, comments] = await Promise.all([
      postResp.json(),
      commentsResp.json(),
    ]);
    return { post, comments };
  } else throw new Response("Post not Found");
};
