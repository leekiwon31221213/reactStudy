import { useState, useEffect } from "react";
import useFetch from "./useFetch";

// 패치하는 기본방법
const FetchBasicMethod = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())

      .then((data) => setData(data));
  }, []);
  const divBox = data && data.length >= 100 ? "height" : "";

  return (
    <>
      <div className={divBox} style={divBox ? { height: "200px", overflow: "auto" } : {}}>
        {data &&
          data.map((item) => {
            return <p key={item.id}>{item.title}</p>;
          })}
      </div>
    </>
  );
};

// 커스텀 훅을 이용한 패치 방법
const CustomHook = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  const divBox = data && data.length >= 100 ? "height" : "";
  return (
    <>
      <div className={divBox} style={divBox ? { height: "100px", overflow: "auto" } : {}}>
        {data &&
          data.map((item) => {
            return <p key={item.id}>{item.title}</p>;
          })}
      </div>
    </>
  );
};

function ReactCustomHook() {
  return (
    <>
      <h1>ReactCustomHook</h1>
      <ol>
        <li>커스텀 훅은 항상 use로 시작해야함 ex) useFetch</li>
        <li>아래 코드는 URL에서 데이터를 가져와 화면에 표시하는 예시</li>
        <li>데이터를 가져오기 위해 JSONPlaceholder 서비스를 사용해 가짜 데이터를 가져올것</li>
      </ol>

      <br />
      <h2>커스텀훅 없이 fetch하기</h2>
      <FetchBasicMethod></FetchBasicMethod>
      <br />
      <hr />
      <h2>커스텀훅만들어 fetch하기</h2>
      <ol>
        <li>커스텀 훅 만들기 - fetch로직이 다른 컴포넌트에서도 필요할 수 있으므로</li>
        <li>fetch 로직을 새파일로 옮겨서 커스텀 훅으로 사용 가능</li>
        <li>
          3-1. 파일이름은 반드시 use로 시작 <br />
          3-2. .js로 끝나야함
          <br />
          3-3. 컴포넌트와 같은 디렉토리에 위치해야함
        </li>
      </ol>
      <CustomHook></CustomHook>
    </>
  );
}

export default ReactCustomHook;
