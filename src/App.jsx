import { createContext, useEffect, useReducer } from "react";
import Header from "./Conponents/Header";
import Main from "./Conponents/Main";
import "./index.css";
import Loader from "./Conponents/Loader.jsx";
import Error from "./Conponents/Error.jsx";
import Question from "./Conponents/Question.jsx";
import StartScreen from "./Conponents/StartScree.jsx";
import NextButton from "./Conponents/NextButton.jsx";
import Progress from "./Conponents/Progress.jsx";
import FinishPage from "./Conponents/FinishPage.jsx";
import Timer from "./Conponents/Timer.jsx";

// "loading " , "error " , "ready " , "active" , "finished"
const initialState = {
  questions: [],
  status: "loading",
  curIndex: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secRemaining:300,
};
function reducer(state, action) {
  switch (action.type) {
    case "dataRecived":
      return { ...state, questions: action.payload, status: "dataRecived" };

    case "error":
      return { ...state, status: "error" };

    case "ready":
      return { ...state, status: "ready" };

    case "answared":
      console.log(action);
      return {
        ...state,
        answer: action.payload,
        points: state.points + action.point,
      };
    case "nextQuestion":
      return { ...state, curIndex: state.curIndex + 1, answer: null };

    case "finished":
      return {
        ...state,
        status: "finished",
        answer: null,
        highscore:
          state.highscore > state.points ? state.highscore : state.points,
      };
    case "restart":
      console.log(state);
      return { ...initialState, questions: state.questions, status: "ready" };
    // return {...state }

    case "tick":
      return { ...state, secRemaining: state.secRemaining - 1 , status : state.secRemaining == 0 ? "finished" : state.status };
  }
}
const appContext = createContext();
function App() {
  const [{ questions, status, answer, curIndex, points, highscore , secRemaining }, dispatch] =
    useReducer(reducer, initialState);

  useEffect(() => {
    //FETCH QUESTIONS FROM API
    function fetchData() {
      fetch("http://localhost:9000/questions")
        .then((res) => res.json())
        .then((data) => dispatch({ type: "dataRecived", payload: data }))
        .catch((err) => dispatch({ type: "error", payload: err }));
    }
    fetchData();
  }, []);
  const numQuestions = questions.length;
  const currentQuestion = questions[curIndex];
  const maxPossiblePoints = questions.reduce(
    (acc, item) => acc + item.points,
    0
  );
  console.log(questions);

  return (
    <appContext.Provider
      value={{
        questions,
        numQuestions,
        dispatch,
        curIndex,
        answer,
        currentQuestion,
        points,
        maxPossiblePoints,
        highscore,
        status,
        secRemaining
      }}
    >
      <div className="app">
        <Header />
        <Main>
          {status == "loading" && <Loader />}
          {status == "error" && <Error />}
          {status == "dataRecived" && <StartScreen />}
          {status == "ready" && (
            <>
              <Progress />
              <Question />
            </>
          )}
          <footer>
            {status == "ready" && <Timer />}
            <NextButton />
            {status == "finished" && <FinishPage />}
          </footer>
        </Main>
      </div>
    </appContext.Provider>
  );
}
export default App;
export { appContext };
