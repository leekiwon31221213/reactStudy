import { useState } from "react";

function React폼제출() {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("제출된 이름:" + name);
  }

  return (
    <>
      <h1>리액트 폼 제출</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>이름 엔터</span>
          <input type="text" name={name} onChange={handleChange} />
        </label>

        <input type="submit" />
      </form>
    </>
  );
}

export default React폼제출;
