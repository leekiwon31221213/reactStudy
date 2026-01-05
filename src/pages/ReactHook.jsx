import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("red");
  return (
    <>
      <h1>버튼색상{color}</h1>
      <button type="button" onClick={() => setColor("blue")}>
        파란색
      </button>
      <button type="button" onClick={() => setColor("pink")}>
        핑크색
      </button>
      <button type="button" onClick={() => setColor("green")}>
        초록색
      </button>
    </>
  );
}

function ReactHook() {
  return (
    <>
      <h1>ReactHook(훅)</h1>
      <p>훅을 사용하면 클래스 없이도 함수가 상태 및 기타 React 기능에 접근 가능</p>
      <p>훅은 props, state, context, refs, lifecycle과 같은 React 개념 보다 직접적인 APi를 제공</p>

      <br />
      <hr />
      <br />
      <h2>훅이란?</h2>
      <p>훅(Hooks)은 함수형 컴포넌트에서 React의 상태 및 생명주기 기능에 접근 할 수 있도록 해주는 함수</p>

      <br />
      <hr />

      <FavoriteColor></FavoriteColor>
      <br />
      <br />
      <hr />
      <br />

      <h2>훅 규칙</h2>
      <ol>
        <li>훅은 React함수 컴포넌트 내부에서만 호출할 수 있음</li>
        <li>훅은 컴포넌트의 최상위 레벨에서만 호출할 수 있음</li>
        <li>훅은 조건부일 수 없음</li>
      </ol>
      <strong>React클래스 컴포넌트에서는 Hooks가 작동하지 않음</strong>
    </>
  );
}

export default ReactHook;
