import { Link, useLoaderData, useFetcher } from "react-router-dom";
import { humanReadable } from "../../utils/humanDate";
import { LikeButton } from "../../components/LikeButton/LikeButton";
import { Comment } from "../../components/Comment/Comment";
import { useAuthContext } from "../../context/AuthContext";
import { InputWrapper } from "../../components/InputWrapper/InputWrapper";
import { DeleteModal } from "../../components/DeleteModal/DeleteModal";
import { Button } from "../../components/Button/Button";
import { useState, useEffect, useRef } from "react";
import parse from "html-react-parser";
import hljs from "highlight.js/lib/common";
import "highlight.js/styles/github-dark.css";
import styles from "./Post.module.css";

export function Post() {
  const [editId, setEditId] = useState("");
  const [currDelId, setCurrDelId] = useState("");
  const [showModal, setShowModal] = useState(false);
  const formRef = useRef(null);

  const { post, comments } = useLoaderData();
  const { token } = useAuthContext().user;
  const fetcherNew = useFetcher();
  const fetcherEdit = useFetcher();
  const fetcherDelete = useFetcher();

  const newSubmit = fetcherNew.state === "submitting";
  const editSubmit = fetcherEdit.state === "submitting";
  const deleteSubmit = fetcherDelete.state === "submitting";

  const openEdit = (id) => setEditId(id);
  const closeEdit = () => setEditId("");

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  useEffect(() => {
    if (newSubmit) {
      formRef.current.reset();
    }
  }, [newSubmit]);

  useEffect(() => {
    if (editSubmit) {
      setEditId("");
    }
  }, [editSubmit]);

  useEffect(() => {
    if (deleteSubmit) {
      setShowModal(false);
    }
  }, [deleteSubmit]);

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div className={styles.postWrapper}>
      <div>
        <h1 className={styles.title}>{post.title}</h1>
        {post.subTitle && <h2 className={styles.subTitle}>{post.subTitle}</h2>}

        <p className={styles.timestamp}>{humanReadable(post.timestamp)}</p>
        {post.edited_at && (
          <p className={styles.timestamp}>
            Edited: {humanReadable(post.edited_at)}
          </p>
        )}

        <div>{parse(post.content)}</div>
        {token && (
          <LikeButton likes={post.likes} likes_count={post.likes_count} />
        )}
        <ul className={styles.tagList}>
          {post.tags.map((tag, i) => (
            <li key={i}>
              <Link
                className={styles.tagLink}
                to={`/search?tag=${tag.replace(/\s+/g, "+")}`}
              >
                #{tag}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {token && (
        <div className={styles.formContainer}>
          <fetcherNew.Form
            className={styles.newComForm}
            ref={formRef}
            method="POST"
          >
            <InputWrapper
              label="New Message"
              type="textarea"
              name="content"
              minLength="3"
              maxLength="400"
            />
            <Button name="intent" value="newPost">
              Post Message
            </Button>
          </fetcherNew.Form>
        </div>
      )}

      {comments.length > 0 && (
        <div className={styles.commentList}>
          {comments.map((com) =>
            editId === com._id ? (
              <div key={com._id}>
                <fetcherEdit.Form method="POST" action={location.pathname}>
                  <InputWrapper
                    label="Edit Message"
                    type="textarea"
                    name="content"
                    defaultValue={com.content}
                  />
                  <input
                    type="hidden"
                    name="commentId"
                    defaultValue={com._id}
                  />

                  <div>
                    <Button name="intent" value="editPost">
                      Save
                    </Button>
                    <Button clickHandler={closeEdit} type="button">
                      Cancel
                    </Button>
                  </div>
                </fetcherEdit.Form>
              </div>
            ) : (
              <Comment
                key={com._id}
                comment={com}
                handleEdit={openEdit}
                showDelete={() => {
                  openModal();
                  setCurrDelId(com._id);
                }}
              />
            )
          )}
        </div>
      )}

      {showModal && (
        <DeleteModal closeModal={closeModal}>
          <fetcherDelete.Form key={currDelId} method="DELETE">
            <input type="hidden" name="commentId" defaultValue={currDelId} />
            <div className={styles.btnContainer}>
              <Button color="Red" name="intent" value="delCom">
                Yes
              </Button>
              <Button clickHandler={closeModal}>No</Button>
            </div>
          </fetcherDelete.Form>
        </DeleteModal>
      )}
    </div>
  );
}
