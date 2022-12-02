import React from 'react';
import Entry from './components/Entry';
import Item from './components/Item'
import './App.css'

function App(){
  const [items, setItems] = React.useState([]);

  function addItem(item){
    setItems((prev)=>{
      return [...prev, item];
    })
  }

  function deleteItem(itemId){
    setItems((prev)=>{
      return prev.filter((item)=>{
        return item.id !== itemId;
      })
    })
  }

  return <div className="app-part">
  <Entry onAdd={addItem}/>
  {items.map((item)=>{
    return <Item onDelete={deleteItem} key={item.id} id={item.id} name={item.name} age={item.age} />
  })}
  </div>
}

export default App;
