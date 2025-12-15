import { useState } from "react";

function Reactjsx속성() {
  const [count, setCount] = useState(0);

  const eventHandler = () => {
    alert("이벤트속성은 카멜케이슨으로 작성");
  };

  function enabled() {
    setCount(count + 1);
  }

  return (
    <>
      {/* 클래스이름 */}
      <p className="">s</p>

      {/* 이벤트 속성 - 카멜케이슨으로 사용 */}
      <button type="button" onClick={eventHandler}>
        버튼
      </button>
      {/* 불린 속성 */}
      <button type="button" disabled>
        활성화
      </button>
      <button type="button" onClick={enabled} disabled={false}>
        비활성화 {count}
      </button>
    </>
  );
}

export default Reactjsx속성;
