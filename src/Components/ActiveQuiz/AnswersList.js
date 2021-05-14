import React from 'react';
import classes from './AnswersList.module.css';
import AnswerItem from './AnswerItem.js'

const AnswersList = props => (
    <ul className ={classes.AnswersList}>
        {props.answers.map((answer, i) => {
            return (
                <AnswerItem
                    key={i} 
                    answer={answer}
                    onAnswerClick = {props.onAnswerClick}
                />
            )
        })}
    </ul>
)

export default AnswersList;