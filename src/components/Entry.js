import React, {useState} from "react";
import "./Entry.css";
import Button from '../UI/Button'
import AddItem from './AddItem'
import ErrorModal from "../UI/ErrorModal";

function Entry(props) {

  const [entry, setEntry] = useState({
    id:Math.random().toString(),
    name:"",
    age:""
  })

  const [expand, setExpand] = useState(false);
  const [error, setError] = useState();


  function inputChangeHandler(event){
    setError(false);
    const changeField = event.target.name
    const changeValue = event.target.value;
    setEntry((prev)=>{
      return {...prev, [changeField]:changeValue}
    });
  }

  function submitHandler(event){
    event.preventDefault();
    if(entry.name.trim().length === 0 || entry.age.trim().length===0){
      setError({
        title:"Invalid input",
        message:"Enter valid name and age"
        
      });
      return;
    }
    if(entry.age < 1){
      setError({
        title:"Invalid age",
        message:"Enter a valid age"
      })
    } 
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

  function errorHandler(){
    setError(null);
  }

  return (
    <div>
    {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />}
    <div className="entry-field">
    {!expand ? <AddItem toAdd={expandHandler} /> :
     <form onSubmit={submitHandler}>
      <div>
        <div className="entry-field-part">
          <label>Your name</label>
          <input className="input-field" style={{borderColor:error&&"red"}} type="text" name="name" onChange={inputChangeHandler} value={entry.name} autoComplete="off" />
        </div>
        <div className="entry-field-part">
          <label>Your age</label>
          <input className="input-field"  style={{borderColor:error&&"red"}} type="number" name="age" min="0" onChange={inputChangeHandler} value={entry.age} autoComplete="off" />
        </div>
      </div>
      <div>
        <Button type="submit">+</Button>
        <span style={{color:"#E7C139"}}>Add</span>
      </div> 
      </form>
    }
    </div>
    </div>
  );
}

export default Entry;
