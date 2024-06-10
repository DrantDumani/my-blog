import { useAuthContext } from "../../context/AuthContext";
import { Button } from "../Button/Button";
import { xTimeAgo } from "../../utils/humanDate";
import PropTypes from "prop-types";

export function Comment({ comment, handleEdit, showDelete }) {
  const { userId, isAdmin } = useAuthContext().user;
  const isUsersPost = userId === comment.author._id;

  return (
    <div>
      <div>
        <p>{comment.author.username}</p>
        <p>{xTimeAgo(new Date(comment.timestamp).getTime())}</p>
      </div>

      <p>{comment.content}</p>
      {(isUsersPost || isAdmin) && (
        <div>
          {isUsersPost && (
            <Button clickHandler={() => handleEdit(comment._id)}>Edit</Button>
          )}
          {(isUsersPost || isAdmin) && (
            <Button clickHandler={showDelete}>Delete</Button>
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
