import { useState } from "react";

function React체크박스() {
  const [inputs, setInputs] = useState({});
  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    let fillings = "";
    const firstName = document.getElementById("firstname");

    if (!firstName.value) {
      alert("이름을 입력해주세요");
      firstName.focus();
      event.preventDefault();
      return;
    }

    if (inputs.tomato) {
      fillings = fillings + "토마토";
    }

    if (inputs.onion) {
      if (inputs.tomato) {
        fillings = fillings + " 그리고 ";
      }
      fillings = fillings + "양파";
    }

    if (fillings === "") {
      fillings = "추가 재료 없음";
    }

    alert(`${inputs.firstname}님은 ${fillings} 버거를 원합니다`);

    event.preventDefault();
  };
  return (
    <>
      <h1>리액트 체크박스</h1>
      <form onSubmit={handleSubmit}>
        <label>
          내 이름은:
          <input type="text" id="firstname" name="firstname" value={inputs.firstname} onChange={handleChange} />
        </label>

        <p>나는 햄버거에 이걸 추가할게요</p>
        <label>
          토마토:
          <input type="checkbox" name="tomato" checked={inputs.tomato} onChange={handleChange} />
        </label>

        <label>
          양파:
          <input type="checkbox" name="onion" checked={inputs.onion} onChange={handleChange} />
        </label>

        <button type="submit">제출하기</button>
      </form>
    </>
  );
}

export default React체크박스;
