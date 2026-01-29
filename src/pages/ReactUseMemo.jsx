import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const expensiveCalculation = (num) => {
  console.log("Calculating");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};
function NoUseMemo() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = expensiveCalculation(count);
  const increment = () => {
    setCount((count) => count + 1);
  };

  const addTodo = () => {
    setTodos((todo) => [...todo, "New Todo"]);
  };
  return (
    <>
      <div>
        <h2>NoUseMemo 할일목록</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>할일추가버튼</button>

        <hr />
        <br />

        <p>카운트 : {count}</p>
        <button onClick={increment}>+</button>
        <h2>비용이 많이 드는 계산</h2>
        <p>{calculation}</p>
        <p>예제에서는 Add Todo 버튼을 클릭할 때도 비용이 많이 드는 함수가 실행된다는 점에 유의</p>
      </div>
    </>
  );
}

function UseMemo() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const addTodo = () => {
    setTodos((todo) => [...todo, "New Todo"]);
  };

  return (
    <>
      <div>
        <h2>useMemo사용한 할일목록</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button type="button" onClick={addTodo}>
          할일 추가
        </button>
        <hr />
        <br />

        <p>카운트 : {count}</p>
        <button onClick={increment}>+</button>
        <h2>비용이 많이 드는 계산</h2>
        <p>{calculation}</p>
      </div>
    </>
  );
}
function ReactUseMemo() {
  return (
    <>
      <h1>ReactUseMemo</h1>
      <p>useMemo Hook은 메모이제이션된 값을 반환</p>
      <ol>
        <li>메모제이션은 값을 다시 계산할 필요가 없도록 값을 캐싱하는 것</li>
        <li>useMemo 훅은 종속 요소 중 하나가 업데이트 될 떄만 실행 됨</li>
      </ol>

      <ol>
        <li>useMemo와 useCallback Hook은 유사함</li>
        <li>useMemo 메모이제이션된 값을 반환</li>
        <li>useCallback 메모이제이션된 함수를 반환</li>

        <li>
          <Link to="/useCallback-hook">자세한 내용은 useCallback 챕터</Link>
        </li>
      </ol>
      <br />
      <hr />
      <h2>useMemo없이</h2>
      <ol>
        <li>
          useMemo를 사용하면 비용이 많이 들고 리소스를 많이 소모하는 함수가 불필요하게 실행되는 것을 방지
          <br /> <br /> 여기서 비용이란? 컴퓨터 자원과 시간을 많이 쓴다는 뜻
          <ol>
            <li>계산 시간이 오래걸림</li>
            <li>CPU 사용량이 높음</li>
            <li>메모리를 많이 사용함</li>
            <li>렌더링 지연 발생</li>
          </ol>
        </li>
      </ol>

      <br />
      <NoUseMemo></NoUseMemo>

      <br />
      <hr />

      <h2>useMemo 사용하기</h2>

      <ol>
        <li>
          위 성능 문제를 해결하기 위해서는 useMemo 훅을 사용하여 expensiveCalculation 함수를 메모이제이션 할 수 있음 <br />
          ➡️이렇게 하면 함수는 필요할 때만 실행
        </li>
        <li>비용이 많이 드는 함수 호출을 useMemo로 감쌀 수 있음</li>
        <li>
          useMemo는 두번째 매개변수로 의존성 배열을 받음 <br />
          ➡️ 이 배열에 지정된 값이 변경될 때만 함수가 다시 실행
        </li>
        <li>useMemo 사용 예제에서는 count가 변경될 때만 비용이 많이드는 함수가 실행되고, todo가 추가될 때 실행안됨</li>
      </ol>

      <UseMemo></UseMemo>
    </>
  );
}

export default ReactUseMemo;
