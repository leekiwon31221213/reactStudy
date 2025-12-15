// 컴포넌트의 여는 태그와 닫는 태그 사이에 있는 콘텐츠를 다른 컴포넌트로 보낼 수 있음 props.children;

function React자식(props) {
  return <>{props.children}</>;
}
function React자식2(props) {
  const { name, age } = props;
  return <>{props.children}</>;
}

function React부모(props) {
  return (
    <>
      <h1>Props부모</h1>
      <React자식>
        <p>자식1: React자식1입니다.</p>
      </React자식>

      <React자식2>
        <p>자식2: React자식2입니다.</p>
      </React자식2>
    </>
  );
}

export default React부모;
