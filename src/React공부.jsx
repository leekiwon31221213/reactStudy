import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./style/router-nav.scss";
import React배열Array from "./pages/React배열";
import React카운터 from "./pages/React카운터";
import React전개연산자 from "./pages/React전개연산자";
import Reactjsx속성 from "./pages/Reactjsx속성";
import Reactjsx조건문 from "./pages/Reactjsx조건문";
import React컴포넌트 from "./pages/React컴포넌트";
import React프롭스 from "./pages/Reactprops프롭스";
import ReactProps구조분해 from "./pages/ReactProps구조분해";
import React자식 from "./pages/ReactProps자식";
import React이벤트 from "./pages/React이벤트";
import Reactif조건부렌더링 from "./pages/Reactif조건부렌더링";
import React논리연산자조건부렌더링 from "./pages/React논리연산자조건부렌더링";
import React삼항연산자렌더링 from "./pages/React삼항연산자조건부렌더링";
import React목록List from "./pages/React목록List";
import React폼 from "./pages/React폼";
import React폼제출 from "./pages/React폼제출";
import ReactTextarea from "./pages/ReactTextarea";
import ReactSelect옵션 from "./pages/ReactSelect";
import ReactForms여러필드입력 from "./pages/ReactForms여러필드입력";
import React체크박스 from "./pages/React체크박스";

import React라디오버튼 from "./pages/React라디오";
import React포털 from "./pages/React포털";
import React서스펜서 from "./pages/React서스펜스";
import React스타일CSS from "./pages/React스타일CSS";
import React심화스타일모듈 from "./pages/React심화스타일모듈";
import React스타일인자바스크립트 from "./pages/ReactCssInJs";
import React라우터중요 from "./pages/React라우터중요";

// person 객체 정의 추가 (React프롭스 컴포넌트에서 사용)
const person = {
  name: "홍길동",
  age: 25,
  job: "프론트엔드개발자",
};

function React공부모음() {
  return (
    <>
      <BrowserRouter>
        <nav className="router-nav">
          <Link to="/">홈</Link>
          <Link to="/array">배열</Link>
          <Link to="/counter">카운터</Link>
          <Link to="/spread">전개연산자(콘솔확인)</Link>
          <Link to="/jsx-props">JSX속성</Link>
          <Link to="/jsx-condition">JSX조건문</Link>
          <Link to="/component">컴포넌트</Link>
          <Link to="/props">프롭스</Link>
          <Link to="/props-destruct">프롭스구조분해</Link>
          <Link to="/child">자식컴포넌트</Link>
          <Link to="/event">이벤트</Link>
          <Link to="/if-render">if조건부</Link>
          <Link to="/logic-render">논리연산자</Link>
          <Link to="/ternary-render">삼항연산자</Link>
          <Link to="/list">목록</Link>
          <Link to="/form">폼</Link>
          <Link to="/form-submit">폼제출</Link>
          <Link to="/textarea">Textarea</Link>
          <Link to="/select">Select</Link>
          <Link to="/multi-form">여러필드폼</Link>
          <Link to="/checkbox">체크박스</Link>
          <Link to="/radio">라디오</Link>
          <Link to="/portal">포털</Link>
          <Link to="/suspense">서스펜스</Link>
          <Link to="/css">스타일CSS</Link>
          <Link to="/css-module">스타일모듈</Link>
          <Link to="/css-in-js">스타일JS</Link>
          <Link to="/router">라우터중요</Link>
        </nav>

        <Routes>
          <Route path="/array" element={<React배열Array name="프롭스전달" />} />
          <Route path="/counter" element={<React카운터 />} />
          <Route path="/spread" element={<React전개연산자 />} />
          <Route path="/jsx-props" element={<Reactjsx속성 />} />
          <Route path="/jsx-condition" element={<Reactjsx조건문 />} />
          <Route path="/component" element={<React컴포넌트 name="리액트" />} />
          <Route path="/props" element={<React프롭스 friend="Vue" name="리액트" person={person} />} />
          <Route path="/props-destruct" element={<ReactProps구조분해 brand="속성" model="한국" color="보라" />} />
          <Route path="/child" element={<React자식 />} />
          <Route path="/event" element={<React이벤트 />} />
          <Route path="/if-render" element={<Reactif조건부렌더링 if조건={false} />} />
          <Route path="/logic-render" element={<React논리연산자조건부렌더링 name1="&&" name2="" />} />
          <Route path="/ternary-render" element={<React삼항연산자렌더링 삼항연산자={true} />} />
          <Route path="/list" element={<React목록List />} />
          <Route path="/form" element={<React폼 />} />
          <Route path="/form-submit" element={<React폼제출 />} />
          <Route path="/textarea" element={<ReactTextarea />} />
          <Route path="/select" element={<ReactSelect옵션 />} />
          <Route path="/multi-form" element={<ReactForms여러필드입력 />} />
          <Route path="/checkbox" element={<React체크박스 />} />
          <Route path="/radio" element={<React라디오버튼 />} />
          <Route path="/portal" element={<React포털 />} />
          <Route path="/suspense" element={<React서스펜서 />} />
          <Route path="/css" element={<React스타일CSS />} />
          <Route path="/css-module" element={<React심화스타일모듈 />} />
          <Route path="/css-in-js" element={<React스타일인자바스크립트 />} />
          <Route path="/router/*" element={<React라우터중요></React라우터중요>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default React공부모음;
