import React, {useState } from 'react';
import Button from '../Button/Button';
const Card = ({key, question, correctAnswerMarkUpdate, attempt, options, answer}) => 
{
    const[state, setState] = useState(false);
    function disableBtn()
    {
        setState(true);
    }
    return(
        <div>
        <h4>
            {question}
        </h4>
        <Button onClick = {disableBtn} disabled = {state}> {options.option1} </Button>
        <Button onClick = {disableBtn} disabled = {state}> {options.option2} </Button>
        <Button onClick = {disableBtn} disabled = {state}> {options.option3} </Button>
        <Button onClick = {disableBtn} disabled = {state}> {options.option4} </Button>
        </div>
    )

}