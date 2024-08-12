import { useContext } from "react";
import { appContext } from "../App";
import Question from "./Question";

export default function Progress() {
  const { curIndex , questions , points  } = useContext(appContext);
  const maxPossiblePoints = questions.reduce((acc  , item )=> acc + item.points , 0)

  return (
    <header className="progress">

      <progress max={questions.length-1} value={curIndex}></progress>
      <p>
        Question <strong>{curIndex +1}</strong> / {questions.length}
      </p>
      <p><strong>{points} / </strong> {maxPossiblePoints}</p>
    </header>
  );
}
