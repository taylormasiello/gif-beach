import React from "react";
import Modal from "react-modal";

const GifModal = (props) => {
  if (!props.selectedGif) {
    return <div></div>;
  }

  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={() => props.onRequestClose()}
    >
      <div className="gif-modal">
        <img src={props.selectedGif.images.original.url} alt="" />
        <h3>
          <strong>Name:</strong> {props.selectedGif.title}
        </h3>
        <h4>
          <strong>Rating:</strong> {props.selectedGif.rating}
        </h4>
        <p>
          <strong>Source:</strong>{" "}
          <a href={props.selectedGif.source}>{props.selectedGif.source}</a>
        </p>

        <button onClick={() => props.onRequestClose()}>close</button>
      </div>
    </Modal>
  );
};

export default GifModal;
