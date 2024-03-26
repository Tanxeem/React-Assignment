import { useState } from "react"

function Todo () {
const [todos, settodos] = useState(['set1', 'set2'])
    return (<>
    {todos.map((todo, idx)=><li key={idx}>{todo}</li>)}
    <button onClick={()=> settodos([...todos, 'Apple', 'Mango', 'Banana'])}>Click</button>
    </>)
}

export default Todo;