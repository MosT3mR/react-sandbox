import {useState, useRef, useEffect} from "react"

/*
  we can use useRef to fix a memory leake error when unmounting a component while trying to fetch data from the useEffect
  check the example or you can check this vedio in the course :
  https://www.udemy.com/course/react-front-to-back-2022/learn/lecture/29769016#overview
 */

function Todo() {
 const [loading, setLoading] = useState(true)
 const [todo, setTodo] = useState({})

 const isMounted = useRef(true)

 useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
   .then(res => res.json())
   .then(data => {
    setTimeout(() => {
     if(isMounted.current) {
      setTodo(data)
      setLoading(false)
     }
    }, 3000)
   })


   // the return in useEffect runs when the component is unmounted
   return () => {
    isMounted.current = false
   }
 },[isMounted])

 return loading ? <h3>Loading...</h3> : <h1>{todo.title}</h1>
}

export default Todo