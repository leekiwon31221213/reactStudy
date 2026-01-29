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
import ReactTransitions전환 from "./pages/ReactTransitions전환";
import ReactForwardRef from "./pages/ReactForwardRef";
import ReactHook from "./pages/ReactHook";
import ReactUseStateHook from "./pages/ReactUseStateHook";
import ReactuseEffectHook from "./pages/ReactuseEffectHook";
import ReactuseContext from "./pages/ReactuseContext";
import ReactUseRefHook from "./pages/ReactUseRefHook";

import ReactUseReducer from "./pages/ReactUseReducer";

import ReactUseCallBack from "./pages/ReactUseCallBack";
import ReactUseMemo from "./pages/ReactUseMemo";
import ReactCustomHook from "./pages/ReactCustomHook";
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
          <Link to="/array">1. 배열</Link>
          <Link to="/counter">2. 카운터</Link>
          <Link to="/spread">3. 전개연산자(콘솔확인)</Link>
          <Link to="/jsx-props">4. JSX속성</Link>
          <Link to="/jsx-condition">5. JSX조건문</Link>
          <Link to="/component">6. 컴포넌트</Link>
          <Link to="/props">7. 프롭스</Link>
          <Link to="/props-destruct">8. 프롭스구조분해</Link>
          <Link to="/child">9. 자식컴포넌트</Link>
          <Link to="/event">10. 이벤트</Link>
          <Link to="/if-render">11. if조건부</Link>
          <Link to="/logic-render">12. 논리연산자</Link>
          <Link to="/ternary-render">13. 삼항연산자</Link>
          <Link to="/list">14. 목록</Link>
          <Link to="/form">15. 폼</Link>
          <Link to="/form-submit">16. 폼제출</Link>
          <Link to="/textarea">17. Textarea</Link>
          <Link to="/select">18. Select</Link>
          <Link to="/multi-form">19. 여러필드폼</Link>
          <Link to="/checkbox">20. 체크박스</Link>
          <Link to="/radio">21. 라디오</Link>
          <Link to="/portal">22. 포털</Link>
          <Link to="/suspense">23. 서스펜스</Link>
          <Link to="/css">24. 스타일CSS</Link>
          <Link to="/css-module">25. 스타일모듈</Link>
          <Link to="/css-in-js">26. 스타일JS</Link>
          <Link to="/router">27. 라우터중요</Link>
          <Link to="/react-transitions">28. React 전환(transitions)</Link>
          <Link to="/forward-ref">29. ReactForwardRef(포워드레프)</Link>
          <Link to="/hook">30. ReactHook(훅)</Link>
          <Link to="/useState-hook">31. ReactUseStateHook(유즈스테이트훅)</Link>
          <Link to="/useEffect-hook">32. ReactuseEffectHook(유즈이펙트훅)</Link>
          <Link to="/useContext-hook">33. useContextHook(유즈콘텍스트훅)</Link>
          <Link to="/useRef-hook">34. useRefHook(유즈레프훅)</Link>
          <Link to="/useReducer-hook">35. useReducer(유즈리듀서)</Link>
          <Link to="/useCallback-hook">36. useCallback(유즈콜백)</Link>
          <Link to="/useMemo-hook">37. useMemo(유즈메모)</Link>
          <Link to="/custom-hook">38. customHook(커스텀훅)</Link>
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

          <Route path="/react-transitions" element={<ReactTransitions전환></ReactTransitions전환>}></Route>

          <Route path="/forward-ref" element={<ReactForwardRef></ReactForwardRef>}></Route>
          <Route path="/hook" element={<ReactHook></ReactHook>}></Route>
          <Route path="/useState-hook" element={<ReactUseStateHook></ReactUseStateHook>}></Route>
          <Route path="/useEffect-hook" element={<ReactuseEffectHook></ReactuseEffectHook>}></Route>
          <Route path="/useContext-hook" element={<ReactuseContext></ReactuseContext>}></Route>
          <Route path="/useRef-hook" element={<ReactUseRefHook></ReactUseRefHook>}></Route>
          <Route path="/useReducer-hook" element={<ReactUseReducer></ReactUseReducer>}></Route>
          <Route path="/useCallback-hook" element={<ReactUseCallBack></ReactUseCallBack>}></Route>

          <Route path="/useMemo-hook" element={<ReactUseMemo></ReactUseMemo>}></Route>

          <Route path="/custom-hook" element={<ReactCustomHook></ReactCustomHook>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default React공부모음;
