import IndividToDos from "./IndividToDos";
const ToDoDisplay = ({toDoList,setToDoList}) => {

   return (
       <>
            <h1>I NEED TO:</h1>
            {toDoList.length===0? <p>You currently have nothing to do!</p>: ( 
            <ul className="tasks"> 
                {toDoList.map((todo,index)=>{
                    return <li key={index}>
                        <IndividToDos todo={todo} setToDoList={setToDoList}  />
                    </li>
                })}
            </ul>
            )}
      </>
    );
}
 
export default ToDoDisplay;