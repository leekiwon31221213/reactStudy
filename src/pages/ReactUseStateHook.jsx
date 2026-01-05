import { useState } from "react";

function UseState예시() {
  const [color, setColor] = useState("red");
  return (
    <>
      <h2>useState가 반환하는 값들을 구조 분해 할당으로 꺼내서 사용하고 있다는 점에 주목 해야함</h2>

      <p>const [color, setColor] = useState("red");</p>
      <ol>
        <li>첫 번째 값인 color는 현재 상태</li>
        <li>두 번째 값인 setColor는 상태를 업데이트하는 함수</li>
        <li>마지막으로 초기 상태를 "빨간색"으로 설정 useState("red");</li>
        li
      </ol>

      <h2>Read State</h2>
      <p>색상 {color}</p>

      <button type="button" onClick={() => setColor("blue")}>
        상태를 업데이트한 색상
      </button>
    </>
  );
}

function StateUpdate예시() {
  const [brand, setBrand] = useState("한국");
  const [model, setModel] = useState("기아");
  const [color, setColor] = useState("파랑");
  const [year, setYear] = useState("1996");

  // 객체로 담을 수 있음
  const [car, setCar] = useState({
    brand: "미국",
    model: "애플",
    color: "블랙",
    year: "2025",
  });

  const updateColor = () => {
    setCar((previousState) => {
      return { ...previousState, color: "빨강" };
    });
  };

  return (
    <>
      <h2>State 홀딩</h2>

      <p>브랜드 {brand}</p>
      <p>모델 {model}</p>
      <p>색상 {color}</p>
      <p>년식 {year}</p>

      <hr />
      <br />

      <h2>useState 객체로 담기</h2>
      <p>브랜드 {car.brand}</p>
      <p>모델 {car.model}</p>
      <p>색상 {car.color}</p>
      <p>년식 {car.year}</p>

      <hr />
      <br />

      <h2>useState 객체 및 배열 업데이트</h2>
      <button type="button" onClick={updateColor}>
        색상변경
      </button>
    </>
  );
}

function ReactUseStateHook() {
  return (
    <>
      <h1>ReactUseStateHook</h1>
      <p>React useState Hook을 사용하면 함수 컴포넌트에서 상태를 추적할 수 있음</p>
      <p>상태(State)는 일반적으로 애플리케이션에서 추적해야하는 데이터 또는 속성을 의미</p>

      <br />
      <hr />
      <br />

      <h2>import useState(가져오기)</h2>
      <p>useState 훅을 사용하려면, 먼저 컴포넌트 안으로 가져와야함</p>

      <br />
      <hr />
      <br />

      <h2>Initialize useState(초기화)</h2>
      <p>useState함수 컴포넌트에서 함수를 호출하여 상태를 초기화</p>

      <ol>
        <li>useState함수 컴포넌트에서 함수를 호출하여 상태를 초기화</li>
        <li>
          useState 초기 상태를 입력받아 두 개의 값을 반환
          <ol>
            <li>현재 상황</li>
            <li>상태를 업데이트 하는 함수</li>
          </ol>
        </li>
      </ol>
      <UseState예시></UseState예시>
      <StateUpdate예시></StateUpdate예시>
    </>
  );
}

export default ReactUseStateHook;
