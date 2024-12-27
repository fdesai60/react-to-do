import { useState } from "react";

const IndividToDos = ({todo,setToDoList}) => {
    const [isComplete,setIsComplete]=useState(false)
    const toggleCompleted=()=>{
        setIsComplete(curr=>!curr)
      
    }

    const handleDel=()=>{
        setToDoList(curr=>{
            return curr.filter(task=>task!==todo)
        })
    }
    return ( 
        <div className={`eachTask ${isComplete?"complete":"" }`}>     
            <button onClick={toggleCompleted}>{isComplete&&"✔️"}</button>
            <p>{todo}</p>
            <button onClick={handleDel}>del</button>
           
        </div>
    );
}
 
export default IndividToDos;