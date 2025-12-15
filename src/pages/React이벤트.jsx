function React이벤트() {
  const 이벤트_발생 = () => {
    alert("버튼이 클릭되었습니다!");
  };

  return (
    <>
      <h1>이벤트 발생</h1>
      <button onClick={이벤트_발생}>React이벤트</button>

      <React이벤트_인수전달></React이벤트_인수전달>

      <React이벤트_객체></React이벤트_객체>
    </>
  );
}
function React이벤트_인수전달() {
  const 인수전달 = (a) => {
    alert(a);
  };

  return (
    <>
      <h1>이벤트 인수전달</h1>
      <button
        onClick={() => {
          인수전달("인수전달");
        }}
      >
        React이벤트_인수전달
      </button>
    </>
  );
}

function React이벤트_객체() {
  const 객체 = (a, b) => {
    alert(b.type);
  };

  return (
    <>
      <h1>React이벤트_객체</h1>
      <button
        onClick={(e) => {
          객체("객체", e);
        }}
      >
        React이벤트_객체
      </button>
    </>
  );
}

export default React이벤트;
