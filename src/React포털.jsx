// 리액트 포털은 부모 구성 요소의 DOM 계층 외부에서 HTML을 렌더링하는 방법을 제공
// 이 기능(포탈)은 모달,툴팁, 대화상자와 같은 컨테이너 레이아웃을 벗어날때 유용
// 첫번째 인수로는 (children) 문자열 또는 조각과 같은 렌더링 가능한 react 콘텐츠
// 두번째 인수는 (domNode) 포털이 대신 삽입되어야하는 DOM 요소
// createPortal(children, domNode);

import { useState } from "react";
import { createPortal } from "react-dom";

//모달 포털 컴포넌트
function PotalModal({ isOpen, onClose, children }) {
  return createPortal(
    <div
      id="modal-popup"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        visibility: isOpen ? "visible" : "hidden",
        opacity: isOpen ? 1 : 0,
        transition: "opacity 0.3s ease, visibility 0.3s ease",

        pointerEvents: isOpen ? "auto" : "none",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "8px",
          transition: "transform 0.3s ease",
        }}
      >
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    //  createPortal(children, domNode);
    document.body /* domNode가 생성되는곳 */
  );
}

//포털 예시 컴포넌트
function React포털() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h1>리액트 포털</h1>
      <button onClick={() => setIsOpen(true)}>모달버튼</button>

      <PotalModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>모달 온</h2>
        <p>모달창열렸습니다</p>
      </PotalModal>
    </>
  );
}

export default React포털;
