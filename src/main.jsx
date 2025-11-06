import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Counter from "./Counter.jsx";
import 전개연산자 from "./전개연산자.jsx";
import Jsx속성 from "./Jsx속성.jsx";
import 조건문 from "./Jsx조건문.jsx";
import React컴포넌트 from "./React컴포넌트.jsx";
import React프롭스 from "./Reactprops프롭스.jsx";
import ReactProps구조분해 from "./ReactProps구조분해.jsx";
import React자식 from "./ReactProps자식.jsx";
import React이벤트 from "./React이벤트.jsx";
import Reactif조건부렌더링 from "./Reactif조건부렌더링.jsx";
import React논리연산자조건부렌더링 from "./React논리연산자조건부렌더링.jsx";
import React삼항연산자렌더링 from "./React삼항연산자조건부렌더링.jsx";
import React목록List from "./React목록List.jsx";
import React폼 from "./React폼.jsx";

// person 객체 정의 추가 (React프롭스 컴포넌트에서 사용)
const person = {
  name: "홍길동",
  age: 25,
  job: "프론트엔드개발자",
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App name="프롭스전달" />
    <Counter></Counter>
    <전개연산자></전개연산자>
    <Jsx속성></Jsx속성>
    <조건문></조건문>
    <React컴포넌트 name="리액트"></React컴포넌트>

    <React프롭스 friend="Vue" name="리액트" person={person}></React프롭스>

    <ReactProps구조분해 brand="속성" model="한국" color="보라"></ReactProps구조분해>
    <React자식></React자식>
    <React이벤트></React이벤트>
    <Reactif조건부렌더링 if조건={false}></Reactif조건부렌더링>
    <React논리연산자조건부렌더링 name1="&&" name2=""></React논리연산자조건부렌더링>
    <React삼항연산자렌더링 삼항연산자={true}></React삼항연산자렌더링>
    <React목록List></React목록List>
    <React폼></React폼>
  </StrictMode>
);
