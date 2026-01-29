import React, { use, useCallback, useState } from "react";
/* useCallback 없이 시작*/
const Button = React.memo(({ onClick, text }) => {
  return (
    <button
      type="button"
      onClick={() => {
        alert(`자식 ${text} 버튼 클릭됨`);
        onClick();
      }}
    >
      {text}
    </button>
  );
});
function NoUseCallBack() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick1 = () => {
    alert("부모 컴포넌트: 버튼1 클릭");
    setCount1(count1 + 1);
  };
  const handleClick2 = () => {
    alert("부모 컴포넌트: 버튼2 클릭");
    setCount2(count2 + 1);
  };

  return (
    <div>
      <h2>useCallback을 사용하지 않고</h2>
      <p>카운트1 : {count1}</p>
      <p>카운트2 : {count2}</p>
      <Button onClick={handleClick1} text="버튼1" />
      <Button onClick={handleClick2} text="버튼2" />
    </div>
  );
}

/* =============================== */

/* useCallback 사용해서 */

const Button2 = React.memo(({ onClick, text }) => {
  return (
    <button
      type="button"
      onClick={() => {
        alert(`${text} 버튼이 클릭됨`);
        onClick();
      }}
    >
      {text}
    </button>
  );
});

function UseCallBack() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick1 = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1]);

  const handleClick2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  return (
    <>
      <h2>useCallBack을 사용함</h2>
      <p>카운트1 : {count1}</p>
      <p>카운트2 : {count2}</p>
      <Button2 onClick={handleClick1} text="버튼1" />
      <Button2 onClick={handleClick2} text="버튼2" />
    </>
  );
}
/* =============================== */

function ReactUseCallBack() {
  return (
    <>
      <h1>ReactUseCallBack</h1>
      <ol>
        <li>
          useCallBack 훅은 콜백 함수를 메모이제이션하는데 사용됨 <br />
          <strong>메모이제이션은 함수를 캐싱하여 다시 생성하지 않도록 하는 것</strong>
        </li>
        <li>컴포넌트가 리렌더링되어도 같은 함수 참조를 유지할 수 있음</li>
        <li>useCallback은 의존성 배열에 포함된 값이 변경될 때만 새로운 함수를 생성 ➡️ 이를 통해 불필요한 함수 재생성을 방지</li>
        <li>자식 컴포넌트에 함수를 props로 전달할때 성능 최적화에 효과적</li>
        <li>리소스를 많이 사용하는 함수가 매 렌더링마다 자동으로 실행되는것을 방지</li>
      </ol>
      <br />
      <hr />
      <h2>참고</h2>
      <ol>
        <li>useCallback은 useMemo 유사함</li>
        <li>
          useMemo 메모이제이션된 값을 반환
          <br /> 즉 어떤 계산 결과를 캐싱해서 다시 계산하지 않도록함
        </li>
        <li>
          useCallback 메모이제이션된 함수를 반환 <br />즉 함수를 재생성하지 않고 동일한 참조를 유지하도록 함
        </li>
      </ol>
      <br />
      <hr />

      <h2>useCallback 함수는 두 개의 인수를 받음</h2>
      <p>useCallback(callback, dependencies)</p>

      <ol>
        <li>callback : 메모이제이션하려는 함수</li>
        <li>
          dependencies : 콜백 함수에 필요한 종속성 배열 <br />
          메모이제이션 된 콜백 함수는 이러한 종속성 중 하나라도 변경된 경우에만 변경
        </li>
      </ol>

      <br />
      <hr />
      <NoUseCallBack></NoUseCallBack>
      <br />
      <hr />

      <UseCallBack></UseCallBack>
    </>
  );
}

export default ReactUseCallBack;
