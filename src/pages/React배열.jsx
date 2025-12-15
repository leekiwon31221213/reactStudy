function React배열Array(props) {
  /* 배열 Array */
  const fruit = ["apple", "banana", "orange"];

  /* 객체 Object */
  const users = [
    { id: 1, name: "홍길동", age: 20 },
    { id: 2, name: "김철수", age: 22 },
    { id: 3, name: "신짱구", age: 25 },
  ];

  return (
    <>
      <div className="App">
        <h1>Hello World!</h1>
      </div>
      {/* 배열 Array */}
      <ul>
        {fruit.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
      {/* 객체 Object */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>고유 아이디: {user.id}</p>
            <p>이름: {user.name}</p>
            <p>나이: {user.age}</p>
          </li>
        ))}
      </ul>

      {/* 소품 구조 분해 */}
      <h1>props {props.name}</h1>
    </>
  );
}

export default React배열Array;
