import {useState, useEffect, useRef, useMemo} from "react"

/*
    useMemo can be used if we dont want a "value" in the page to rerender when we dont want it to
*/


function UseMemoExample() {
 const [number, setNumber] = useState(1)
 const [inc, setInc] = useState(0)

 // const sqrt = getSqrt(number)
 const sqrt = useMemo(() => getSqrt(number), [number])


 const renders = useRef(1)
 
 useEffect(() => {
  renders.current = renders.current + 1
 })

 const handleClick = () => {
  setInc(prev => {
   console.log(prev + 1)
  return prev + 1
  })
 }

  return (
    <div>
     <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} className="form-control w-25" />

     <h2 className="my-3">
      The sqrt of {number} is {sqrt}
     </h2>

     <button onClick={handleClick} className="btn btn-primary">Re Render</button>
     <h3>Renders: {renders.current}</h3>
    </div>
  )
}

function getSqrt(n) {
 for(let i=0; i<= 1000; i++) {
  console.log(i)
 }

 console.log("Expensive Function Called!")
 return Math.sqrt(n)
}

export default UseMemoExample