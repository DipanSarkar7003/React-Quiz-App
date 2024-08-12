import { useContext } from "react";
import { appContext } from "../App";
import Options from "./Options";

function Question() {
  const { questions, curIndex, currentQuestion } = useContext(appContext);
  // console.log(questions);

  return (
    <div>
      <h4>{currentQuestion.question}</h4>
      <Options />
    </div>
  );
}

export default Question;
