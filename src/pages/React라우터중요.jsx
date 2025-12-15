import { Routes, Route, Link } from "react-router-dom";
import Router테스트1 from "./Router/Router테스트1";
import Router테스트2 from "./Router/Router테스트2";
/* 
리엑트 Router(라우터)

1. 라우팅은 서로 다르 뷰 간의 탐색을 처리하는 것 
2. 애플리케이션을 위한 표준 라우팅 라이브러리
  2-1. 단일 페이지 애플리케이션을 이동
  2-2. URL 매개변수 및 쿼리 문자열 처리
  2-3. 브라우저 기록 및 탐색 관리
  2-4. 중첩 경로 및 레이아웃 생성
  2-5. 인증을 위한 보호된 경로를 구현

👉 라우터가 없으면 React는 단일 페이지로 제한되어 다른 뷰 사이를 이동할 수 없음 

👉 설치 방법
npm install react-router-dom 


👉 기본 라우팅

1. Link : URL을 업데이트하는 탐색 링크 생성
2. Routes 모든 경로 정의를 담는 컨테이너
3. Route URL 경로와 구성 요소 간의 매핑을 정의


👉 서브 메뉴 만드는 원리
1. /router/* 
같은 부모 라우트는 계속 화면에 남아 있고, 그 안에서 하위 페이지가 바뀌는 방식

2. Link는 “이동할 주소(목적지)”
<Link to="/router/test1"> 이런 식으로 서브 메뉴를 만듬

3. Route의 path는 “이 주소일 때 어떤 컴포넌트를 보여줄지”
<Routes> 안에 <Route path="test1" element={<Router테스트1 />} />
이런 식으로 “어떤 서브 메뉴를 누르면 어떤 컴포넌트를 보여줄지” 지정

*/
function React라우터중요() {
  return (
    <>
      <nav className="sub-menu">
        <Link to="/router/test1">Router테스트1</Link>
        <Link to="/router/test2">Router테스트2</Link>
      </nav>

      <Routes>
        <Route path="test1" element={<Router테스트1 />} />
      </Routes>

      <Routes>
        <Route path="test2" element={<Router테스트2 />} />
      </Routes>
    </>
  );
}
export default React라우터중요;
