import { useState } from 'react'
import Header from "./component/Header";
import Task from "./component/Task";
function App() {
const name="shi";
const [task,setTasks]=useState([
  {
      id:1,
      text:'Security Webinar at 7.00'
  },
  {
      id:2,
      text:'Lectures at 10.00'
  },
  {
      id:3,
      text:'Play Videogame '
  },
  
])
  return (
  <>
  <h3 style= {{color:"red",backgroundColor:"black"}}>Todays List is!!</h3>
  <Header />
  <Task task={task}/>
  </>
  )
}

export default App;
