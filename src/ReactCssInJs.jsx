/* 

Css-in-Js는 자바스크립트 코드 내에 Css를 직접 작성할 수 있는 스타일링 기법

Css-in-Js 쓰면 좋은점
1.js를 사용하여 css 작성
2.컴포넌트 범위 스타일 생성
3.동적으로 스타일링가능
4.CSS클래스 이름 충돌방지

*/

import styled, { createGlobalStyle } from "styled-components";
const JsCss = styled.div`
  padding: 20px;
  background-color:#fff;
  color:#333;
  font-weight:600;
`;

const H2Button = styled.button`
padding:20px;
background-color:${(props) => (props.btntype === "primary" ? "#007bff" : "#6c757d")};
color:#333;
font-weight:600;
`;

const PrimaryButton = styled(H2Button)`
background-color:#007bff;
`;

const SuccessButton = styled(H2Button)`
background-color:#28a745;
`;

const GlobalStyle = createGlobalStyle`

h3{
font-size:20px;
color:red;
}
span{
font-size:17px;
color:blue;
}

`;
function React스타일인자바스크립트() {
  return (
    <>
      <h1>Css-in-Js</h1>
      <JsCss>
        <p>JsCss 변수로 css 사용하기</p>
        <p>npm install styled-components</p>
      </JsCss>

      <h2>스타일이 적용된 컴포넌트의 속성</h2>
      <strong>css-in-js는 props를 사용하여 스타일을 동적으로 만들 수있는게 강점임</strong>
      <H2Button btntype="primary">버튼</H2Button>

      <h2>스타일 확장</h2>
      <p>여러 요소에 동일한 스타일을 적용하는 또 다른 방법은 기존 스타일 구성 요소를 확장</p>
      <p>컴포넌트 와 동일한 스타일을 가지 면서도 배경색은 각각 다른 PrimaryButton 와 를 만들 수 있음</p>

      <PrimaryButton>PrimaryButton변수 버튼</PrimaryButton>
      <SuccessButton>SuccessButton변수 버튼</SuccessButton>

      <h2>컴포넌트 범위 스타일</h2>
      <p>CSS Modules 와 마찬가지로 CSS-in-JS에서 생성된 스타일은 해당 컴포넌트에 적용됨</p>
      <p>이러한 요소에는 고유한 이름이 부여되며, 해당 요소를 가져오는 구성 요소에서만 사용할 수 있음</p>
      <GlobalStyle></GlobalStyle>
      <h3>글로벌 스타일</h3>
      <span>전역 스타일을 생성할 수 있으며, 이러한 스타일은 일반 클래스 이름을 가지며 모든 구성 요소에서 사용할 수 있음</span>
    </>
  );
}

export default React스타일인자바스크립트;
