import { useContext } from "react";
import { appContext } from "../App";
function StartScreen() {
  const { numQuestions , dispatch} = useContext(appContext) ;
 

  return (
    <div className="start">
      <h2>Welcome to the React Quiz</h2>
      <h3> {numQuestions} questions to test your mastery </h3>
      <button className="btn btn-ui" onClick={()=>dispatch({type : "ready" ,})}> let's start</button>
    </div>
  );
}

export default StartScreen;
