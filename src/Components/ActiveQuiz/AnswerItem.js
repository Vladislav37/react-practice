import React from 'react';
import classes from './AnswerItem.module.css'

const AnswerItem = props => {
    const classesLi = [classes.AnswerItem]

    if (props.state) {
        classesLi.push(classes[props.state]);
    } 

    return (
        <li 
            className={classesLi.join(' ')}
            onClick = {() => props.onAnswerClick(props.answer.id)}
            
        >
            {props.answer.text}
        </li>
    )
}

export default AnswerItem;