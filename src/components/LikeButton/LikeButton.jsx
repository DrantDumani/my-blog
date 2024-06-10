import { useFetcher } from "react-router-dom";
import PropTypes from "prop-types";

export function LikeButton({ likes_count, likes }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PUT">
      <button value="likePost" name="intent">{`Likes: ${likes_count}`}</button>
    </fetcher.Form>
  );
}

LikeButton.propTypes = {
  likes_count: PropTypes.number,
  likes: PropTypes.array,
};
