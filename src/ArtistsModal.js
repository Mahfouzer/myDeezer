import React from "react";
import Stars from "./Stars";
import ModalStyle from "./ModalStyles";
import Modal from "react-modal";
import appHistory from "./history";
Modal.setAppElement("#root");

export default function ArtistsModal(props) {
  return (
    <Modal
      isOpen
      onRequestClose={() => appHistory.push("/")}
      style={ModalStyle}
      contentLabel='Artists'
    >
      <Stars {...props} />
    </Modal>
  );
}
