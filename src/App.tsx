// import { useState } from "react";
// import Modal from "./components/Modal";

// function App() {
//   const [modalOpen, setModalOpen] = useState(false);

//   return (
//     <>
//     <div className="App">
//       <h1>Hey, click on the button to open the modal.</h1>
//       <button
//         className="openModalBtn"
//         onClick={() => {
//           setModalOpen(true);
//         }}
//       >
//         Open
//       </button>

//       {modalOpen && <Modal setOpenModal={setModalOpen} />}
//     </div>
//     </>
//   );
// }
// export default App;

import React, { useState } from "react";
import ModalReview from "./ModalReview";
function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <button onClick={()=> setModalOpen(true)}>abrir modal</button>
      {modalOpen && <ModalReview  closeModal={setModalOpen}/>}
    </div>
  );
}

export default App;
