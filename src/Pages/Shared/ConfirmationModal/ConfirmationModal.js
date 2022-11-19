import React from "react";

const ConfirmationModal = ({title, message, setDeletingDoctor, successAction, deletingDoctor}) => {
  return (
    <div>
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {title && title}
          </h3>
          <p className="py-4">
            {message && message}
          </p>
          <div className="modal-action">
            <label onClick={() => setDeletingDoctor(null)} className="btn">
              Cancel
            </label>
            <label onClick={() => successAction(deletingDoctor)} htmlFor="confirmation-modal" className="btn">
              Delete
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
