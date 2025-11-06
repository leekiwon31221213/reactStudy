function React논리연산자조건부렌더링(props) {
  return (
    <>
      {/* name1이 있으면 오른쪽 문장 보여줌 */}
      {props.name1 && <h1>논리 AND 연산자는 {props.name1} 입니다!</h1>}

      {/* name2가 없으면 오른쪽 문장 보여줌 */}
      {props.name2 || <h1>논리 OR 연산자는 값이 없습니다!</h1>}
    </>
  );
}

export default React논리연산자조건부렌더링;
