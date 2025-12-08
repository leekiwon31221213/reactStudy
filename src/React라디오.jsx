import { useState } from "react";

function React라디오버튼() {
  const [selectFruit, setSelectFruit] = useState("바나나");
  const handleOnChange = (event) => {
    setSelectFruit(event.target.value);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    alert(`가장 좋아하는 과일은 ${selectFruit}`);
  };
  return (
    <>
      <h1>리액트 라디오</h1>

      <form onSubmit={handleOnSubmit}>
        <p>가장 좋아하는 과일 선택하기</p>
        <label>
          <input type="radio" name="fruit" value="사과" checked={selectFruit === "사과"} onChange={handleOnChange} /> 사과
        </label>
        <label>
          <input type="radio" name="fruit" value="복숭아" checked={selectFruit === "복숭아"} onChange={handleOnChange} /> 복숭아
        </label>
        <label>
          <input type="radio" name="fruit" value="귤" checked={selectFruit === "귤"} onChange={handleOnChange} /> 귤
        </label>

        <button type="submit" onSubmit={handleOnSubmit}>
          제출하기
        </button>
      </form>
    </>
  );
}

export default React라디오버튼;
