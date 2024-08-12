import { useContext } from "react";
import { appContext } from "../App";

function Options() {
  const {  dispatch, answer, currentQuestion } =
    useContext(appContext);
  const isAnswared = answer !== null;
  return (
    <div className="options">
      {currentQuestion.options.map((item, index) => (
        <button
          className={`btn btn-option ${index == answer ? "answer" : ""} ${
            isAnswared
              ? index == currentQuestion.correctOption
                ? " correct"
                : "wrong"
              : ""
          }  `}
          disabled={isAnswared ? true : false}
          key={index}
          onClick={() => {
            dispatch({
              type: "answared",
              payload: index,
              point:
                index == currentQuestion.correctOption
                  ? Number(currentQuestion.points)
                  : 0,
            });
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default Options;
