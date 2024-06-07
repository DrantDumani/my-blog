import { useFetcher } from "react-router-dom";

export function LikeButton({ likes_count, likes }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PUT">
      <button value="likePost" name="intent">{`Likes: ${likes_count}`}</button>
    </fetcher.Form>
  );
}
