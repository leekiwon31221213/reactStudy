import { useState } from "react";
function Counter(){
    const [count , setCount] = useState(0);
  // 앞의 count : 현재 상태 값 읽는용
  // 뒤의 setCount : 상태 값을 갱신하는 용도

  return(
   <button onClick={()=>setCount(count + 1)}>{count}</button>
  );
}

export default Counter;