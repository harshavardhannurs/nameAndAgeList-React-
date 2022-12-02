import React, {useState} from "react";
import "./Entry.css";
import Button from '../UI/Button'
import AddItem from './AddItem'

function Entry(props) {

  const [entry, setEntry] = useState({
    id:Math.random().toString(),
    name:"",
    age:""
  })

  const [expand, setExpand] = useState(false);

  function inputChangeHandler(event){
    const changeField = event.target.name
    const changeValue = event.target.value;
    setEntry((prev)=>{
      return {...prev, [changeField]:changeValue}
    });
  }

  function submitHandler(event){
    event.preventDefault();
    props.onAdd(entry);
    setEntry({
      id:Math.random().toString(),
      name:'',
      age:''
    })
    setExpand(false);
  }

  function expandHandler(){
    setExpand(true);
  }

  return (
    <div className="entry-field">
    {!expand ? <AddItem toAdd={expandHandler} /> :
     <form onSubmit={submitHandler}>
      <div>
        <div className="entry-field-part">
          <label>Your name</label>
          <input className="input-field" type="text" name="name" onChange={inputChangeHandler} value={entry.name} autoComplete="off" />
        </div>
        <div className="entry-field-part">
          <label>Your age</label>
          <input className="input-field" type="number" name="age" min="0" onChange={inputChangeHandler} value={entry.age} autoComplete="off" />
        </div>
      </div>
      <div>
        <Button type="submit">+</Button>
        <span style={{color:"#E7C139"}}>Add</span>
      </div> 
      </form>
    }
    </div>
  );
}

export default Entry;
