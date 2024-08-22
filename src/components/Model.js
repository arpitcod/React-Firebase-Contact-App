import React from "react";
import ContactForm from "./ContactForm";

const Model = ({ show, handleHideModel ,mode,contact}) => {
  return (
    <>
      <div className="model_container">
        {show && (
          <div
            className="modal show fade d-flex align-items-center justify-content-center"
            style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.6)" }} // semi-transparent background
          >
            {/* // <div className="modal show fade "  style={{ display: 'block' }}> */}
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                 
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={handleHideModel}
                  />
                </div>
                <div className="modal-body">
                    <ContactForm isUpdate={mode === "update"} initialData={contact} handleHideModel={handleHideModel}/>
                </div>
                <div className="modal-footer"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Model;
