import { useState, createContext, useContext } from "react";
const UserContext = createContext();
function Example1() {
  const [user, setUser] = useState("린스");
  return (
    <>
      <h2>중첩된 컴포넌트를 통해 props 전달</h2>
      <h2>{`Hello ${user}!`}</h2>
      <Example2 user={user}></Example2>
    </>
  );
}

function Example2({ user }) {
  return (
    <>
      <p>Example2</p>
      <Example3 user={user}></Example3>
    </>
  );
}
function Example3({ user }) {
  return (
    <>
      <p>Example3</p>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

function Solution1() {
  const [user, setUser] = useState("린스");
  return (
    <>
      <UserContext.Provider value={user}>
        <Solution2>
          <h2>{`Hello ${user}!`}</h2>
        </Solution2>
      </UserContext.Provider>
    </>
  );
}

function Solution2() {
  return (
    <>
      <p>Solution2</p>
      <Solution3></Solution3>
    </>
  );
}

function Solution3() {
  const user = useContext(UserContext);

  return (
    <>
      <p>Solution3</p>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

function ReactuseContext({ user }) {
  return (
    <>
      <h1>ReactuseContext</h1>
      <p>useContext는 상태를 전역적으로 관리하는 방법</p>
      <p>useContext는 Hook과 함께 사용하면 단독으로 사용할 useState때보다 더 쉽게 깊게 중첩된 구성 요소 간에 상태를 공유할 수 있음</p>

      <hr />
      <br />
      <h2>useContext문제점</h2>
      <ol>
        <li>상태는 스택에서 상태에 접근해야 하는 최상위 부모 컨포넌트가 보유해야함</li>
        <li>ex) 스택의 맨위와 맨 아래에 있는 컴포넌트는 모두 상태에 접근해야함</li>
        <li>useContext를 사용하지 않고 구현하려면 각 중첩 컴포넌트를 통해 상태를 "Props"로 전달해야함 이를 "prop drilling"이라고 함</li>
      </ol>

      <br />
      <hr />
      <h3>문제점 예시</h3>
      <Example1 user={user}></Example1>
      <br />
      <hr />
      <h2>해결책</h2>
      <p>컨텍스트 생성</p>
      <span>컨텍스트를 가져와 createContext 초기화해야함</span>

      <h3>자식 컴포넌트를 컨텍스트 제공자로 감싸고 상태 값을 제공</h3>
      <Solution1></Solution1>
    </>
  );
}

export default ReactuseContext;
