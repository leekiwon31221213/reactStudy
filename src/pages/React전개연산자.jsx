function React전개연산자() {
  const number1 = [1, 2, 3];
  const number2 = [4, 5, 6];
  const numberGroup = [...number1, ...number2];
  console.log(numberGroup);

  // 객체 전개 연산자
  const friend = {
    brand: "영이",
    model: "인",
    color: "흰",
  };

  const friend_more = {
    name: "조",
    year: 1995,
  };
  console.log({ ...friend, ...friend_more });
}

export default React전개연산자;
