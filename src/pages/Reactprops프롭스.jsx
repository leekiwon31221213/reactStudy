// props는 리액트 컴포넌트에 전달되는 인수 해당 속성은 HTML 속성을 통해 구성 요소로 전달

function React프롭스(props) {
  return (
    <>
      <p>리액트 친구: {props.friend}</p>
      <p>프론트엔드 라이브러리: {props.name}</p>

      {/* 객체로 전달 */}
      <div>
        <p>사람 이름: {props.person.name}</p>
        <p>사람 나이: {props.person.age}</p>
        <p>사람 직업: {props.person.job}</p>
      </div>
    </>
  );
}

export default React프롭스;
