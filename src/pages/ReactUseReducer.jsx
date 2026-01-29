import { useReducer } from "react";

const initialScore = [
  {
    id: 1,
    score: 0,
    name: "John",
  },
  {
    id: 2,
    score: 0,
    name: "Sally",
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return state.map((player) => {
        if (player.id === action.id) {
          return { ...player, score: player.score + 1 };
        } else {
          return player;
        }
      });
    default:
      return state;
  }
};

function Score() {
  const [score, dispatch] = useReducer(reducer, initialScore);

  const handleIncrease = (player) => {
    dispatch({ type: "INCREASE", id: player.id });
  };

  return (
    <>
      {score.map((player) => {
        return (
          <div key={player.id}>
            <label>
              <input type="button" onClick={() => handleIncrease(player)} value={player.name} />
              {player.score}
            </label>
          </div>
        );
      })}
    </>
  );
}

function ReactUseReducer() {
  return (
    <>
      <h1>useReducer</h1>
      <ol>
        <li>useReducer훅은 useState랑 비슷함</li>
        <li>사용자 정의 상태 로직을 허용</li>
        <li>복잡한 논리에 의존하는 여러 상태 정보를 추적 할 경우 useReducer이 사용됨</li>
      </ol>

      <h2>useReducer 훅은 세개의 인수를 받음</h2>
      <strong>useReducer(reducer , initialState , init)</strong>
      <ol>
        <li>reducer 함수는 사용자 정의 상태 로직을 포함</li>
        <li>인수는 initialState 단순 값일 수도 있지만 일반적으로 객체를 포함</li>
        <li>init인수는 선택 사항이며 상태를 초기화하는데 사용됨</li>
      </ol>
      <p>useReducer hook은 현재 객체 state와 dispatch 메서드를 반환</p>

      <br />
      <hr />
      <h2>useReducer 추적 사용 예시</h2>
      <Score></Score>
    </>
  );
}

export default ReactUseReducer;
