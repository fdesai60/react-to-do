import { useState } from "react";

const Form = ({setToDoList}) => {
    const [taskToAdd,setTaskToAdd] = useState("")
    const handleAddTask =(e)=>{
        setTaskToAdd(e.target.value)
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        setToDoList(curr=>{
            return [...curr,taskToAdd]
        })
        setTaskToAdd("")
        
    }
  
    return (  
    <form onSubmit={handleSubmit}>
            <label htmlFor="addTask">Add task
            <input type="text" 
                    id="addTask"
                    placeholder="Add a task here"
                    value={taskToAdd}
                    onChange={handleAddTask}
                     />
        </label>
        <button>Add</button>
    </form>
    );
}
 
export default Form;