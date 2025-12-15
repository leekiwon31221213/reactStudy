function Reactif조건부렌더링(props) {
  const if조건 = props.if조건;
  if (if조건) {
    return <React조건부렌더링1 />;
  } else {
    return <React조건부렌더링2 />;
  }
}
/* if 조건부 */
function React조건부렌더링1() {
  return (
    <>
      <h1>조건부렌더링1</h1>
    </>
  );
}

function React조건부렌더링2() {
  return (
    <>
      <h1>조건부렌더링2</h1>
    </>
  );
}
/*  */

/* 논리 연산자 */
function React조건부렌더링3(props2) {
  return (
    <>
      <h1>
        {props2.name && (
          <span>
            논리 연산자는 {props2.name1}과 {props2.name2}가 있음
          </span>
        )}
      </h1>
    </>
  );
}

/* 삼항연산자 */
function React조건부렌더링5() {}
function React조건부렌더링6() {}
export default Reactif조건부렌더링;
