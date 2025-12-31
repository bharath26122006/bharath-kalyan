import React, { useState } from "react";

function App(){
   const [tasks,setTask]=useState([])
   const [text,setText]=useState("")

   const addTask=()=>{
    if(text === "") return;
    setTask([...tasks,{name:text,completed:false}])
    setText("")
   }
   const deleteTask=(index)=>{
    setTasks(tasks.filter((_, i) => i !==index));
   };
  return(
    <div>
    <h1>TO-DO List</h1>
    <input 
    value={text}
    onChange={(e)=>setText(e.target.value)}
    placeholder="enter task"
    />
    <button onClick={addTask}>Add</button>
    <ul>
      {tasks.map((task,index)=>(
        <li key={index}>
          {task.name}

        </li>
      )
    )}
    </ul>
    </div>
    
  )
}
export default App;