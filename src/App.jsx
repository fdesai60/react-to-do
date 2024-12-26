import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import ToDoDisplay from './components/ToDoDisplay'
function App() {
  const [toDoList,setToDoList]=useState([])

  return (
    <>
      <Form setToDoList={setToDoList}/>
      <ToDoDisplay toDoList={toDoList} setToDoList={setToDoList}/>
    </>
  )
}

export default App
