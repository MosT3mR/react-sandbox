import useLocalStorage from "../hooks/useLocalStorage"

function CustomHookExample2() {
 const [task, setTask] = useLocalStorage("task", "")
 const [tasks, setTasks] = useLocalStorage("tasks", [])


 const handleSubmit = (e) => {
  e.preventDefault()

  const taskObj = {
   task,
   completed: false,
   date: new Date().toLocaleDateString()
  }

  setTasks([...tasks, taskObj])
 }
  return (
   <>
    <form onSubmit={handleSubmit} className="w-50">
     <div className="mb-3">
      <label htmlFor="task" className="form-label">Task</label>
      <input className="form-control" id="task" type="text" value={task} onChange={(e) => setTask(e.target.value)} />
     </div>
     <button type="submit" className="btn btn-primary">Go</button>
    </form>
    <hr />
     {tasks.map((item,index) => <p key={index}>{item.task}</p>)}
   </>
  )
}

export default CustomHookExample2