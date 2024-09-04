import { useFetcher } from "react-router-dom";
import PropTypes from "prop-types";
import HeartSVG from "../HeartSVG/HeartSVG";
import { useAuthContext } from "../../context/AuthContext.jsx";
import styles from "./LikeButton.module.css";

export function LikeButton({ likes_count, likes }) {
  const fetcher = useFetcher();
  const { userId } = useAuthContext().user;
  const userLiked = likes.some((like) => like.id === Number(userId)); //likes.includes(userId);
  console.log(likes, userLiked);

  // check fetcher state. If fetcher state is loading
  // then use the state to determine the optimistic ui
  //

  return (
    <fetcher.Form method="PUT">
      <button
        className={`${styles.likeBtn} ${
          fetcher.state === "submitting" || fetcher.state === "loading"
            ? !userLiked && styles.heartFilled
            : userLiked && styles.heartFilled
        }`}
        // value="likePost"
        value={!userLiked ? "likePost" : "unlikePost"}
        name="intent"
      >
        <HeartSVG isFilled={userLiked} />{" "}
        {`  ${
          fetcher.state === "submitting" || fetcher.state === "loading"
            ? (!userLiked && likes_count + 1) || (userLiked && likes_count - 1)
            : likes_count
        }`}
      </button>
    </fetcher.Form>
  );
}

LikeButton.propTypes = {
  likes_count: PropTypes.number,
  likes: PropTypes.array,
};
