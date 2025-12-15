function React목록List() {
  const items = ["리액트", "뷰", "앵귤러", "스벨트"];

  // console.log(items);

  return (
    <>
      <h1>리액트 목록(LIST)</h1>
      <ul>
        {items.map((item, idx) => {
          return (
            <li key={idx}>
              키값: {idx}　리스트: {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default React목록List;
