// 구조분해를 사용하면 구성 요소가 받는 속성을 제한할 수 있음

function ReactProps구조분해(props, color) {
  const { brand, model } = props;
  return (
    <>
      <h1>속성제한</h1>
      <p>속성 제한됨: color:{color}</p>

      {/* 속성제한 */}
      <p>
        구성 요소는 모든 속성을 받지만, 구조 분해를 사용하여 구성 요소 내부의 속성을 제한: Brand:{brand} Model: {model}
      </p>

      {/* 구조분해 ...rest*/}
      <ReactProps구조분해Rest brand="내가브랜드" model="한국" color="보라"></ReactProps구조분해Rest>

      <ReactProps기본값설정></ReactProps기본값설정>
    </>
  );
}

function ReactProps구조분해Rest({ color, brand, ...rest }) {
  return (
    <>
      <h1>구조분해Rest</h1>
      <p>
        Brand: {brand} <br />
        Rest.model: {rest.model} <br />
        Color: {color}
      </p>
    </>
  );
}

function ReactProps기본값설정({ color = "블루", brand }) {
  return (
    <>
      <h1>Props 기본값설정</h1>
      <p>
        Brand: {brand} <br />
        Color: {color}
      </p>
    </>
  );
}
export default ReactProps구조분해;
