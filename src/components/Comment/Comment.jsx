import { useAuthContext } from "../../context/AuthContext";
import { Button } from "../Button/Button";
import { xTimeAgo } from "../../utils/humanDate";
import PropTypes from "prop-types";
import styles from "./Comment.module.css";

export function Comment({ comment, handleEdit, showDelete }) {
  const { userId, isAdmin } = useAuthContext().user;
  const isUsersPost = Number(userId) === comment.authorId;
  console.log(isUsersPost, isAdmin === "Super");

  return (
    <div className={styles.comment}>
      <div className={styles.commentHeader}>
        <p className={styles.username}>{comment.author.username}</p>
        <p className={styles.timestamp}>
          {xTimeAgo(new Date(comment.timestamp).getTime())}
        </p>
      </div>

      <p>{comment.content}</p>
      {(isUsersPost || isAdmin === "Super") && (
        <div className={styles.comBtnContainer}>
          {isUsersPost && (
            <Button clickHandler={() => handleEdit(comment.id)}>Edit</Button>
          )}
          {(isUsersPost || isAdmin === "Super") && (
            <Button color="Red" clickHandler={showDelete}>
              Delete
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.object,
  handleEdit: PropTypes.func,
  showDelete: PropTypes.func,
};
