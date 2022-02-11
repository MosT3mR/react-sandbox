import {useRef} from "react"

// ok so i get it now, useRef dont reRender the DOM and you can use some cool methods on the input form "THATS COOL"
// like focusing on an input field or some other cool stuff

function UseRefExample1() {
 const inputRef = useRef()
 const pRef = useRef()

 const handleSubmit = (e) => {
  e.preventDefault()
  console.log(inputRef.current.value)
  pRef.current.style.color = "red"
  pRef.current.innerText = "HEll Yeah"
 }
 
  return (
    <div>
     <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" ref={inputRef} id="name" className="form-control mb-2" />
      <button className="btn btn-primary">Submit</button>
     </form>
     <p style={{cursor: "pointer"}} onClick={() => inputRef.current.focus()} ref={pRef}>Click me to focus on the input</p>
    </div>
  )
}

export default UseRefExample1