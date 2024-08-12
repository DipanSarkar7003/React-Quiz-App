import { useContext } from "react";
import { appContext } from "../App";

function NextButton() {
  const { answer, dispatch, curIndex, questions, status } =
    useContext(appContext);


  if (answer == null) return null;
  // if (curIndex == questions.length - 1) return null;

  if (curIndex < questions.length - 1) {
    return (
      <button
        // disabled = {curIndex==questions.length-1 ? true: false}
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "nextQuestion" });
        }}
      >
        Next
      </button>
    );
  } else {
    return (
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "finished" });
        }}
      >
        finish
      </button>
    );
  }
}

export default NextButton;
