import { useState, useTransition } from "react";
/* 

useTransition 사용되는 곳
1. 사용자 인터페이스가 멈출 수 있는 느린 작업
2. 당장 중요하지 않은 업데이트
3. 검색 결과가 표시되는 데 시간

Suspense(서스펜서) useTransition(전환) 차이점

서스펜서 👉 페이지 이동 + 데이터/컴포넌트 로딩
전환 👉 같은 페이지 안에서 상태 변경이 무거울 때

상황	              Suspense	        useTransition
페이지 이동	        ✅ 자주 씀	        ❌ 거의 안 씀
데이터 로딩	        ✅ 필수	          ❌ 직접 관여 X
한 페이지 안 UI	    ❌	                ✅ 주력
로딩 UI	            fallback	         isPending

*/

function SearchResults({ query }) {
  const items = [];
  if (query) {
    for (let i = 0; i < 200; i++) {
      items.push(
        <li key={i}>
          결과 {query} - {i}
        </li>
      );
    }
  }
  return (
    <>
      <h2>실제 예제</h2>
      <p>이 예시의 작동 방식</p>
      <ol>
        <li>입력 필드에 입력하면 즉시 업데이트트됨</li>
        <li>검색 결과 업데이트는 같이 묶여 있음 startExampleTransition</li>
        <li>결과 업데이트 동안 examplePending True가 됨</li>
        <li>검색 결과가 많더라도 사용 자 인터페이스는 반응성을 유지</li>
      </ol>

      <ol>
        <li>
          <h2>useTransition Hook(useTransition은 Hook을 사용)</h2>
          <p>useTransition Hook은 두 개의 항목을 반환(return)함</p>
          <ol>
            <li>examplePending : 전환이 활성화되어 있는지 여부를 알려줌 </li>
            <li>startTransition : 업데이트를 전환으로 표시하는 함수</li>
          </ol>
        </li>
      </ol>
      <ul>{items}</ul>
    </>
  );
}

function ReactTransitions전환() {
  // 기본 예시
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setText(e.target.value);
    startTransition(() => {
      setResult(e.target.value);
    });
  };

  // 실제예제 변수
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [examplePending, startExampleTransition] = useTransition();

  const handleChange2 = (e) => {
    setInput(e.target.value);
    startExampleTransition(() => {
      setQuery(e.target.value);
    });
  };

  return (
    <>
      <h1>useTransition</h1>
      <input type="text" value={text} onChange={handleChange} /> {isPending ? <p>로딩중...</p> : <p>{result}에 대한 결과</p>}
      <ol>
        <li>입력 필드가 즉시업데이트(긴급 업데이트)</li>
        <li>검색 결과 업데이트 전환(긴급하지 않음)</li>
        <li>전환이 진행되는 동안 로딩중... 메세지가 표시</li>
      </ol>
      <br />
      <hr />
      <br />
      <input type="text" value={input} onChange={handleChange2} placeholder="입력해주세여" />
      {examplePending && <p>로딩중...</p>}
      <SearchResults query={query}></SearchResults>
    </>
  );
}

export default ReactTransitions전환;
