import { useContext, useEffect } from "react";
import { appContext } from "../App";

function Timer() {
  const { dispatch, questions, secRemaining } = useContext(appContext);

  const minute = Math.floor(secRemaining / 60);
  const seconds = secRemaining % 60;

  useEffect(() => {
    // Start a timer when the component mounts.

    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    // Clear the interval when the component is unmounted.
    return () => clearInterval(id);
  }, [questions, dispatch]);

  return (
    <div className="timer">
      {" "}
      {minute < 10 ? "0" : ""}
      {minute} : 
      {seconds < 10 ? "0" : ""}
      {seconds}
    </div>
  );
}

export default Timer;
