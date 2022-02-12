import React, {useState, useCallback} from "react"

/* 
  useCallback can be used if we dont want a "function" in the page to rerender when we dont want it to
  the componen that you want must be memo so we use React.memo
*/

function UseCallbackExample() {
 const [tasks, setTasks] = useState([])

 const addTask = useCallback(() => {
  setTasks(prevState => [...prevState, "Some Task"])
 },[setTasks])

  return (
    <div>
     <Button addTask={addTask} />
     {tasks.map((item, id) => <h3 key={id}>{item}</h3>)}
    </div>
  )
}

const Button = React.memo(({addTask}) => {
 console.log("Button rendered")
 return <div><button className="btn btn-primary" onClick={addTask}>Add task</button></div>
})

export default UseCallbackExample