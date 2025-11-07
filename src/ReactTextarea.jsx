import { useState } from "react";

function React텍스트영역() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <>
      <textarea name={text} onChange={handleChange}></textarea>
      <p>{text}</p>
    </>
  );
}

export default React텍스트영역;
