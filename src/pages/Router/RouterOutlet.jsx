import { Link, Outlet } from "react-router-dom";

function ReactOutlet() {
  return (
    <>
      <div>
        <h2>리액트 Outlet</h2>
        <nav style={{ fontSize: "20px" }}>
          <Link to="test1">Router테스트1</Link> | <Link to="test2">Router테스트2</Link>
        </nav>

        <Outlet></Outlet>
        <p>아우렛(outlet) : 하위 경로의 콘텐츠를 렌더링할 위치를 지정</p>
      </div>
    </>
  );
}

export default ReactOutlet;
