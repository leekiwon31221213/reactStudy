/* 
스타일 모듈 사용 하면 좋은점 

특정 구성 요소에 로컬로 범위가 지정된 CSS를 작성 할 수 있음.

CSS 클래스 이름 충돌을 방지하고 스타일을 더 쉽게 유지 관리

.module.css , .module.scss로 파일로 가져올 수 있음

*/
import styles from "./style/심화스타일.module.scss";
function React심화스타일모듈() {
  return (
    <>
      <h1>React 심화스타일모듈</h1>
      <p className={styles.h1}>하나의 모듈 적용</p>
      <p className={`${styles.h1} ${styles.cursorPointer}`}>두개의 모듈 적용</p>

      <h1 className="global">글로벌 클래스</h1>
      <h1 className="global">글로벌 클래스와 로컬 클래스 결합</h1>
      <p className={styles.localClass}>동일한 CSS 모듈에서 글로벌 클래스와 로컬클래스 결합이 가능</p>
    </>
  );
}

export default React심화스타일모듈;
