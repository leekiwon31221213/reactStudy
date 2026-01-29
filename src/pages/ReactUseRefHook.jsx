import { useState, useRef, useEffect } from "react";

function Example1() {
  const [inputValue, setInputValue] = useState("");

  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <p>입력창에 내용을 입력하세요</p>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />

      <h2>렌더링된 카운트 : {count.current}</h2>
      <br />
      <p>useRef()하나의 항목만 반환 하며 이 값은 current 라는 이름의 객체 Object </p>

      <p>useRef를 초기화할 떄는 초기 값을 설정 할 수 있는데, 예를 들어 useRef(0)처럼 씀</p>
      <br />
      <h2>쉽게 풀어서</h2>
      <ul>
        <li>useRef() -> &#123; current: 값 &#125; 형태 돌려줌</li>

          <li>useRef(0) -> &#123; current: 0 &#125; 으로 시작함</li>

          <li>실제 값은 항상 current 안에 들어 있음</li>
      </ul>
    </>
  );
}

function Example2() {
  const inputElemnt = useRef();

  const focusInput= () =>{
    inputElemnt.current.focus();
    console.log("Elemnt : ", inputElemnt.current)
  }


  return (
    <>
      <h2>DOM 요소에 접근하기</h2>
      <input type="text" ref={inputElemnt} />

      <button onClick={focusInput}>
        인풋에 포커스
      </button>
    </>
  );
}


function Example3() {
 const [inputValue,setInputValue] = useState("");

 const previousInputValue = useRef("");

 useEffect(()=>{
  previousInputValue.current = inputValue;
 },[inputValue])

  return (
    <>
      <h2>상태 변화 추적</h2>

      <input type="text" value={inputValue}  onChange={(e) => setInputValue(e.target.value)} />
      <p>Current Value: {inputValue}</p>
      <p>Previous Value: {previousInputValue.current}</p>


      <strong>
        이전 상태를 추적하기 위해 useStat,useEffect를 조합하여 사용
        <br />
        입력 필드에 텍스트를 입력할 떄마다 inputValue가 바뀌어 useRef의 current 값을 업데이트 하고 있음
      </strong>
    </>
  );
}
function ReactUseRefHook() {
  return (
    <>
      <h1>React useRefHook</h1>

      <ol>
        <li>hook useRef를 사용하면 렌더링 간에 값을 유지할 수 있음</li>
        <li>리렌더링을 발생시키지 않음</li>
        <li>만약 useState 훅을 사용해서 애플리케이션이 몇 번 렌더링되는지 세려고 한다면 이 훅 자체가 리렌더링을 발생시키기 때문에 무한 루프에 빠지게 됨 이를 피하기 위해 useRef 훅을 사용할 수 있음</li>
      </ol>
      <h2>참고</h2>
      <ol>
        <li>useState는 값이 바뀔 때마다 컴포넌트를 다시 렌더링</li>
        <li>useRef는 값이 바뀌어도 렌더링을 일으키지 않음</li>
        <li>
          <strong>렌더 횟수 같은 "화면에 영향을 주지 않는 값"을 저장할때 적합</strong>
        </li>
      </ol>

      <br />
      <hr />

      <Example1></Example1>

      <br />
      <hr />

      <Example2></Example2>

      <br />
      <hr />

      <Example3></Example3>
    </>
  );
}

export default ReactUseRefHook;
