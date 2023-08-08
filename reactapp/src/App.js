import { useState } from "react";
import "./App.css";
import Banner from "./components/UI/Banner/Banner";
import Button from "./components/UI/Button/Button";
import Card from "./components/UI/Card/Card";
import questions from "./Data/data";

function App() {
  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);
  const [questionsCorrect, setQuestionsCorrect] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});

  const startTest = () => {
    setQuestionsCorrect(0);
    setSelectedOptions({});
    setStart(true);
  };

  function func(questionId, correct) {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [questionId]: correct,
    }));
    if (correct === true) {
      setQuestionsCorrect((prevCorrect) => prevCorrect + 1);
    }
  }

  function showResults() {
    setStart(false);
    setEnd(true);
  }

  function checkAllQuestionsAnswered() {
    for (const question of questions) {
      if (!selectedOptions[question.questionId]) {
        return false;
      }
    }
    return true;
  }

  return (
    <div className="app">
      <h1>Quizz App</h1>

      {start ? (
        <div className="container">
          <div className="card-container">
            {questions.map(
              ({
                questionId,
                question,
                option1,
                option2,
                option3,
                option4,
                answer,
              }) => {
                return (
                  <Card
                    key={questionId}
                    question={question}
                    correctAnswerMarkUpdate={(correct) => func(questionId, correct)}
                    attempt={(correct) => func(questionId, correct)}
                    options={{
                      option1: option1,
                      option2: option2,
                      option3: option3,
                      option4: option4,
                    }}
                    answer={answer}
                  />
                );
              }
            )}
          </div>
          {checkAllQuestionsAnswered() && <Button onClick={showResults}>{"Show results"}</Button>}
        </div>
      ) : (
        <div className="end">
          {end && <Banner>You have answered {questionsCorrect} / {questions.length} Correctly</Banner>}
          <Button onClick={startTest}>{"Start Quiz"}</Button>
        </div>
      )}
    </div>
  );
}

export default App;
