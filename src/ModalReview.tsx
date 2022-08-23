import React, { useState } from "react";
import Modal from "./components/Modal";
import "./modalreview.css";

interface Modal {
  closeModal : (arg0: boolean) => void 
}
function ModalReview({closeModal}:Modal) {
  return (
    <>
      <div className="modal-background">
        <div className="modal-container">
          <div className="modal-circle-check">circulo check</div>
          <p className="bp">Pré-orçamento enviado!</p>
          <div className="modal-budget-info">
             <p className="bi"> !! Orçamento enviado no e-mail cadastrado.</p>
            <p>
              Pedido : <span>#008765</span>
            </p>
          </div>
          <button onClick={() => closeModal(false)}>
            Orçamentos
          </button>
        </div>
      </div>
    </>
  );
}

export default ModalReview;
