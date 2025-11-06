function 조건문() {
  /* if문은 지원하지만 jsx에서는 지원하지 않으며 삼항연산자를 사용해야함 */

  const x = 3;
  let fruit = "바나나";

  if (x > 3) {
    fruit = "포도";
  } else {
    fruit = "바나나";
  }

  return (
    <>
      {/* if */}
      <p>if문: {fruit}</p>

      {/* 삼항연산자 */}
      <p>삼항연산자: {x > 3 ? "포도" : "바나나"}</p>
    </>
  );
}

export default 조건문;
