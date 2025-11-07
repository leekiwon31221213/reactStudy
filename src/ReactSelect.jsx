import { useState } from "react";

function ReactSelect옵션() {
  const [select, setSelect] = useState("");

  /* 
  두줄일때는 이게 좋고 한줄일때는  
  태그에 직접 입력하는게 처리가 빠름
  onChange= {e => setCar(e.target.value)}
  */
  function handleChange(e) {
    setSelect(e.target.value);
  }

  return (
    <>
      <select value={select} onChange={handleChange}>
        <option value="치킨">치킨</option>
        <option value="피자">피자</option>
        <option value="햄버거">햄버거</option>
      </select>
    </>
  );
}

export default ReactSelect옵션;
