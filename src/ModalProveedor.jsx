import React from "react";
import Modal from "react-modal";

const ModalProveedor = ({ isOpen, onClose, addProv }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Agregar Proveedor"
      className="modalProv"
    >
      <div className="modal-cerrar">
        <button onClick={onClose}>X</button>
      </div>
      <div className="modal-content">
        <h2>Agregar Proveedor</h2>
        <input
          type="text"
          id="modalProv"
          placeholder="Proveedor"
          className="modal-input"
        />
        <input
          type="text"
          id="modalRS"
          placeholder="Razón Social"
          className="modal-input"
        />
        <input
          type="text"
          id="modalDir"
          placeholder="Dirección"
          className="modal-input"
        />
      </div>
      <div className="bottom-div">
        <button onClick={addProv} className="bottom-button">
          Agregar
        </button>
      </div>
    </Modal>
  );
};

export default ModalProveedor;
