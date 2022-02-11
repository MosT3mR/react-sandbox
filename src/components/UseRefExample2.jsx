import {useState, useRef, useEffect} from "react"

/* 
    you can use useRef to refrunce the prevState by storing it in the ref, how you ask ?
    you can pass the value to the useRef and accsess it from the current method in useRef
    check the example below
 */

function UseRefExample2() {
  const [name, setName] = useState("")
  const renders = useRef(1)
  const prevName = useRef()
  
  useEffect(() => {
   renders.current = renders.current + 1
   prevName.current = name
  },[name])

  return (
    <div>
     <h1>Renders: {renders.current}</h1>
     <h1>Prev Name State: {prevName.current}</h1>
     <input type="text" className="form-control mb-3" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  )
}

export default UseRefExample2