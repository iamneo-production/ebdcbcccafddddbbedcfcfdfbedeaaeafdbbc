import { useState } from 'react';
import './App.css';
import Button from "./components/UI/Button/Button";
import Card from "./components/UI/Card/Card";

function App() {

  var qCards;
  var startBtn;

  const questionData = [
    {
      key:1,
      question:'Who is the father of the nation ?',
      options : {
        option1: 'Mahatma Gandhi',
        option2: 'Jawaharlal Nehru',
        option3: 'Donald Trump',
        option4: 'Barrack Obama'
      },
      answer : 'Mahatma Gandhi'
    },
    {
      key : 2,
      question : "What color are the leaves?",
      options : {
        option1 : "Blue",
        option2 : "Red",
        option3 : "Yellow",
        option4 : "Green",
      },
      answer : "Green"
    },
    // ... other questionData entries ...
  ];

  const [startFlag, setStartFlag] = useState(false);
  const [buttonText, setButtonText] = useState('Start Quiz');

  function handleStart() {
    setStartFlag(true);
    setButtonText('Started');
  }

  if (startFlag) {
    qCards = 
    <div>
      {
        questionData.map((data) => 
          <Card question={data.question} options={{
            option1 : data.options.option1,
            option2 : data.options.option2,
            option3 : data.options.option3,
            option4 : data.options.option4,
          }} />
        )
      }
    </div> 
    startBtn = <></>;
  } else {
    startBtn = <Button onClick={handleStart}>Start Quiz</Button>;
  }
  
  return (
    <div className="App">
      <h1>Quizz App</h1>
      {qCards}
      {startBtn}
    </div>
  );
}

export default App;
