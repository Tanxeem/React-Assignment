import { useState } from "react";

function Button () {
  const [x, setx] = useState(0);
  return(
    <>
    count : {x} is {(x % 2 == 0) ? 'Even' : 'Odd'};
    <button onClick={()=> setx(x+1)}>Inc</button>
    <button onClick={()=> {
      setx(x-1)
    }}>Dec</button>
    </>
  )
}

export default Button;