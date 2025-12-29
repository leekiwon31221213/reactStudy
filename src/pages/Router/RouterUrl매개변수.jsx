import { Link, Routes, Route, useParams } from "react-router-dom";

function Info() {
  const { firstName } = useParams();
  console.log(useParams());
  return <p>{firstName} 입니다</p>;
}
function RouterUrl매개변수() {
  return (
    <>
      <h2>URL 매개변수</h2>

      <nav>
        <Link to="/router/url-parameter/Emil">Emil</Link> | <Link to="/router/url-parameter/Tobias">Tobias</Link> | <Link to="/router/url-parameter/Linus">Linus</Link> |
      </nav>

      <Routes>
        <Route path=":firstName" element={<Info />} />
      </Routes>
    </>
  );
}

export default RouterUrl매개변수;
