import { useState } from "react";

function React텍스트영역() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <>
      <h1>리액트 텍스트에어리어</h1>
      <textarea name={text} onChange={handleChange}></textarea>
      <p>{text}</p>
    </>
  );
}

export default React텍스트영역;
