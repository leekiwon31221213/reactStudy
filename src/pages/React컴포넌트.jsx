// 1. 컴포넌트는 독립적이고 재사용 가능한 코드 조각
// 컴포넌트를 생성시 반드시 첫 글자는 대문자

// 구성 요소 내의 구성 요소
function React컴포넌트내부(props) {
  return (
    <>
      <p>구성 요소 렌더링: {props.number}</p>
    </>
  );
}

function React컴포넌트(porps) {
  return (
    <>
      <p>리액트 컴포넌트</p>

      {/* 속성 props */}
      {/* main.jsx에서 확인 */}
      <p>이름: {porps.name}</p>

      <React컴포넌트내부 number="1"></React컴포넌트내부>
      <React컴포넌트내부 number="2"></React컴포넌트내부>
    </>
  );
}

export default React컴포넌트;
