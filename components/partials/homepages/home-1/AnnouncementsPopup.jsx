import React, { useState, useEffect } from "react";
import { AiFillFire } from "react-icons/ai";
import Image from "next/image";


export default function AnnouncementsPopup() {
  const showModal = () => {
    const { Modal } = require("bootstrap");
    const myModal = new Modal("#exampleModal");

    myModal.show();
  };

//   const { Modal } = require("bootstrap");
//     const myModal = new Modal("#exampleModal");

//     myModal.show();

  //showModal();
  return (
    <div className="d-flex">
      <button type="button" className="btn" onClick={showModal}>
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
             . . .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

