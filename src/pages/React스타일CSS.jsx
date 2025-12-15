/* 
1.인라인 스타일
2.외부스타일시트 import
3.css모듈
*/
import "../style/외부스타일시트.scss";
import styles from "../style/스타일.module.scss";
function React스타일CSS() {
  const jsCss = {
    backgroundColor: "#339DDC",
    color: "#fff",
  };
  return (
    <>
      <h1
        style={{
          backgroundColor: "#fff",
          color: "#333",
        }}
      >
        인라인CSS
      </h1>
      <p>인라인 스타일은 카멜케이슨으로</p>

      <h1 style={jsCss}>JS 객체로 Css</h1>

      <h1 className="style">import 외부스타일시트</h1>
      <h1 className={styles.module}>스타일모듈</h1>
    </>
  );
}

export default React스타일CSS;
