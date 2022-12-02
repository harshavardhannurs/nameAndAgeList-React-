import React from 'react';
import ItemStyle from '../UI/ItemStyle'

function Item(props){

  function handleRemove(event){
    console.log(props.id);
    props.onDelete(props.id)
  }

  return <ItemStyle>
    <button onClick={handleRemove}>🗑️</button>
    <h3>{props.name} ({props.age})</h3>
  </ItemStyle>
}

export default Item;