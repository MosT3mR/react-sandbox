import useFetch from "../hooks/useFetch"

function CustomHookExample1() {
 const {data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/posts/1", {})

 return loading ? <h1>Loading...</h1> : <><h1>{data.title}</h1><p>{data.body}</p></>
}

export default CustomHookExample1