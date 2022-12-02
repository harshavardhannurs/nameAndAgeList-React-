import React, {useState} from "react";
import "./Entry.css";
import Button from '../UI/Button'

function Entry(props) {

  const [entry, setEntry] = useState({
    id:Math.random().toString(),
    name:"",
    age:""
  })

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
  }

  return (
    <div className="entry-field">
      <form onSubmit={submitHandler}>
        <label>Your name</label>
        <input type="text" name="name" onChange={inputChangeHandler} value={entry.name} />
        <label>Your age</label>
        <input type="number" name="age" min="0" onChange={inputChangeHandler} value={entry.age} />
        <Button type="submit">Add</Button>
      </form>
    </div>
  );
}

export default Entry;
