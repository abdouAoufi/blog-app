import React, { useState } from "react";
import Header from "../components/Header/header";
import { BrowserRouter as Router } from "react-router-dom";
import Modal from "../components/StyleRelated/Modal/Modal";
import Suggesion from "../components/Header/Suggesion/Suggesion";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const click = () => {
    setOpenModal(!openModal);
  };

  const insideModalHandler = () => {
    console.log("Inside modal cliked ");
  };
  return (
    <Router>
      <Modal click={click} openModal={openModal}>
        <div onClick={insideModalHandler}>
          <Suggesion />
        </div>
      </Modal>
      <div className="App">
        <Header setOpenModal={click} closing={openModal} />
      </div>
    </Router>
  );
}

export default App;
