// 양식에 제어된 입력 필드가 여러개 있는 경우 한가지 방법으로 상태관리 가능

/*
 1. 각 입력에 대한 별도의 useState 호출

 2. 모든 양식 필드 값을 보관하기 위해 객체와 함께 단일 useState 호출

 일반적으로 양식에 더  사용이 되는 2번 방법으로 진행

각 입력 필드에 고유한 이름 속성 확인할것 또한 상태를 초기화할때는 문자열 대신 객체를 사용하고 초기값이 없으면 빈 객체를 사용
 */
import { useState } from "react";

function ReactForms여러필드입력() {
  //  초기값을 정해줄때
  const [inputs, setInputs] = useState({
    첫번째이름: "이",
    두번째이름: "로또",
  });

  //  const [inputs, setInputs] = useState({}); 빈객체로 만들때

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }

  return (
    <>
      <form>
        <label>
          <span>첫번째 이름:</span>
          <input type="text" name="첫번째이름" value={inputs.첫번째이름} onChange={handleChange} />
        </label>
        <label>
          <span>두번째 이름:</span>
          <input type="text" name="두번째이름" value={inputs.두번째이름} onChange={handleChange} />
        </label>
        <p>
          벨류　{inputs.첫번째이름} + {inputs.두번째이름}
        </p>
      </form>
    </>
  );
}

export default ReactForms여러필드입력;
