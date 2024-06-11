import PropTypes from "prop-types";
import styles from "./DeleteModal.module.css";

export function DeleteModal({ children, closeModal }) {
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <button className={styles.modalXBtn} onClick={closeModal}>
          X
        </button>
        <p>Are you sure you want to delete this content?</p>
        {children}
      </div>
    </div>
  );
}

DeleteModal.propTypes = {
  children: PropTypes.object,
  closeModal: PropTypes.func,
};
