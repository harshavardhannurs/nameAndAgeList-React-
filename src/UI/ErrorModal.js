import React from "react";
import ItemStyle from "./ItemStyle";
import './ErrorModal.css'

const ErrorModal = (props) =>{
  return <div className="main-error-container">
  <div className="backdrop">
  <ItemStyle>
    <header className="header">
      <h2>{props.title}</h2>
    </header>
    <div className="content">
      <p>{props.message}</p>
    </div>
    <footer className="actions">
      <button class="popupBtn" onClick={props.onConfirm}>Okay</button>
    </footer>
  </ItemStyle>
  </div>
  </div> 
}

export default ErrorModal;