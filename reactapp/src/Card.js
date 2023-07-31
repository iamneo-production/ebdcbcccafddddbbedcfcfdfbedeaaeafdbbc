import React, {useState } from 'react';
import Button from '../Button/Button';
const Card = ({key, question, correctAnswerMarkUpdate, attempt, options, answer}) => {const[state, setState] = useState(false);
function disableBtn()
{
    setState(true);
}
}