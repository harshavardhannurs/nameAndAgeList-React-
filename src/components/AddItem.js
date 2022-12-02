import React from "react";
import "./AddItem.css";

function AddItem(props) {

  function handleExpand(){
    props.toAdd();
  }

   return (
    <div class="add-item-container">
      <button onClick={handleExpand} class="add-item">
        +
      </button>
    </div>
  );
}

export default AddItem;
