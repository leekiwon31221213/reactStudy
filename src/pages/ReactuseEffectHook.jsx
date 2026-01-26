import { useState, useEffect } from "react";
function TimerExample() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });
  return (
    <>
      <p>타이머 시간 : {count} </p>
    </>
  );
}
function ArrayTimerExample() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);

  return (
    <>
      <p>타이머 시간 : {count} </p>
      <p>calculation : {calculation}</p>
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        {" "}
        배열 타이머 예시버튼
      </button>
    </>
  );
}

function LastcleanUp마지막정리() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <h2>지금까지 {count}번 렌더링됐어요!</h2>.
    </>
  );
}

function ReactuseEffectHook() {
  return (
    <>
      <h1>useEffectHooks</h1>
      <p>useEffect 훅은 컴포넌트 안에서 부수적인 작업들을 할 수 있게 해줌</p>
      <ol>
        <li>
          <h3>useEffect는 두 개의 인자를 받음</h3>
          <strong>useEffect(함수(function), 의존성(dependency))</strong>
        </li>
      </ol>
      <h2>예시</h2>
      <ol>
        <li>데이터 가져오기</li>
        <li>화면(DOM)을 직접 바꾸는 것</li>
        <li>타이머 사용하기</li>
      </ol>
      <br />
      <hr />
      <h2>타이머 예시</h2>
      <strong>주의사항</strong>
      <ol>
        <li>useEffect는 렌더링이 진행 될때마다 실행 즉 카운트가 변경되면 렌더링이 발생하고, 그로 인해 다른 효과가 트리거가 됨</li>
      </ol>
      <TimerExample></TimerExample>
      <strong>해결방법</strong>
      <ol>
        <li>두 번째 매개변수는 항상 배열을 받도록 해야하며 선택적으로 useEffect가 배열에 종속성을 전달 할 수 있게</li>
      </ol>
      <ArrayTimerExample></ArrayTimerExample>
      <hr />
      <br />
      <LastcleanUp마지막정리></LastcleanUp마지막정리>
    </>
  );
}
export default ReactuseEffectHook;
