function React삼항연산자렌더링(props) {
  const 삼항연산자 = props.삼항연산자;
  return 삼항연산자 ? <React조건부렌더링1 /> : <React조건부렌더링2 />;
}
/* if 조건부 */
function React조건부렌더링1() {
  return (
    <>
      <h1>삼항연산자가참일때</h1>
    </>
  );
}

function React조건부렌더링2() {
  return (
    <>
      <h1>삼항연산자가거짓일때</h1>
    </>
  );
}
/*  */

export default React삼항연산자렌더링;
