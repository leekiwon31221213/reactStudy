/* 
리액트는 <input>, <textarea>, <select>  기존 HTML과 다르게 작용

HTML: 양식 요소는 사용자가 입력에 따른 고유값을 유지

React: form 요소의 값이 컴포넌트의 State속성에 보관되고 함수로만 업데이트 setState가 됨
*/

import React from "react";

function React폼() {
  const [name, setName] = React.useState("");

  function handleChange(e) {
    setName(e.target.value);
  }
  return (
    <>
      <form>
        <label>
          <span>리액트 폼</span>
          <input type="text" name={name} onChange={handleChange} />
        </label>
        <p>출력된 값: {name}</p>
      </form>
    </>
  );
}
/* 
1. useState React에서 hook 가져오기

2. 입력 값을 보관하는 상태 변수와 이를 업데이트하는 함수를 선언  const [name, setName]

3. 변경 이벤트를 처리하는 함수 선언
function handleChange(e) {
    setName(e.target.value);
  }

4. 입력 필드의 값을 state 변수로 설정하고 onChange 속성을 설정해 변경 이벤트 처리{handleChange}

5. 값 업데이트해 현재 값 표기 <p>출력된 값: {name}</p>
*/
export default React폼;
