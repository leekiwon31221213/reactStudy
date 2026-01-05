import { forwardRef, useRef } from "react";
const MyInput = forwardRef((props, ref) => {
  return <input type="text" ref={ref} {...props} />;
});
function ReactForwardRef() {
  const inputRef = useRef();
  const focusInput = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <h1>ReactForwardRef(리액트포워드레프)</h1>
      <p>forwardRef 컴포넌트가 자식 요소 중 하나에 대한 참조를 전달할 수 있도록 해줌</p>
      <p>컴포넌트 내부에서 DOM 요소에 대한 직접 참조를 제공하는 것과 같음</p>

      <ul>
        <li>입력 요소에 집중</li>
        <li>애니메이션 트리거링</li>
        <li>DOM 요소 측정</li>
        <li>타사 라이브러리와 통합</li>
      </ul>

      <MyInput ref={inputRef}></MyInput>
      <button onClick={focusInput}>포커스 인풋</button>

      <ol>
        <li>입력 컴포넌트를 다음으로 감쌈 forwardRef</li>
        <li>컴포넌트를 두 번째 매개변수로 ref를 받음</li>
        <li>부모는 입력 요소를 직접 제어 가능함</li>
      </ol>
      <strong>forwardRef는 Dom요소에 직접 접근해야 할 때만 사용할 것 대부분의 경우 props와 state를 대신 사용할 수 있음</strong>
    </>
  );
}

export default ReactForwardRef;
