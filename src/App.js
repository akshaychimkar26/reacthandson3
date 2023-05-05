import React, { useState } from "react";
import "./style3.css";
import Result from "./Components/Result";
  function App(){
    const[showForm,setShowForm]=useState(true);
    const [allFormData,setAllFormData]=useState([]);
    const [formData,setFormData]=useState(
      {
        name:"",
        department:"",
        rating:"",
      }
    );

    const handleChange=(event)=>{
      setFormData({...formData,[event.target.name]:event.target.value});
      console.log(formData);
    };
    

    if(showForm){
      return (<div className="App">
      <h2 className="heading">EMPLOYEE FEEDBACK FORM</h2>
      <div className="form">
      <form>
      <label className="l1">Name:</label><input className="i1" type="text" name="name" value={formData.name} onChange={handleChange}></input><br/><br/>
      <label className="l1">Department:</label><input className="i1" type="text" name="department" value={formData.department}  onChange={handleChange}></input><br/><br/>
      <label className="l1">Rating:</label><input className="i1" type="number" name="rating" value={formData.rating}  onChange={handleChange}></input><br/><br/>
      <button onClick={(parens)=>{
      parens.preventDefault();
      setAllFormData([...allFormData,formData]);
      console.log(allFormData);
      setFormData({
        name:"",
        department:"",
        rating:"",
      });
      console.log(formData);
      setShowForm(false);
      }} className="i2">Submit</button>
      </form>
      </div>
    </div>
    );
    }
    else{
      return <Result allFormData={allFormData} setShowForm={setShowForm}/>;
    }
    }
  
    export default App;
  

  
