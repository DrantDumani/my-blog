import PropTypes from "prop-types";

export function DeleteModal({ children, closeModal }) {
  return (
    <div>
      <div>
        <button onClick={closeModal}>X</button>
        <p>Are you sure you want to delete this content?</p>
        {children}
      </div>
    </div>
  );
}

DeleteModal.propTypes = {
  children: PropTypes.string,
  closeModal: PropTypes.func,
};
