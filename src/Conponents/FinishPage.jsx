import React, { useContext } from "react";
import { appContext } from "../App";

function FinishPage() {
  const { points, maxPossiblePoints, highscore, status, dispatch } =
    useContext(appContext);
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <>
      <p className="result">
        you scored {points} out of {maxPossiblePoints} ({Math.ceil(percentage)}
        %)
      </p>
      <p className="highscore">(Highscore : {highscore}) </p>

      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "restart" });
        }}
      >
        restart
      </button>
    </>
  );
}

export default FinishPage;
