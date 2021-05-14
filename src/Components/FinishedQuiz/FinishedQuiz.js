import React from 'react';
import classes from './FinishedQuiz.module.css';

const FinishedQuiz = (props) => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++;
        }
        return total;
    }, 0)
    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {props.quiz.map((q, i) => {
                    const cls = [
                        'fa',
                        props.results[q.id] === 'error' ? 'fa-times' : 'fa-check',
                        classes[props.results[q.id]],
                    ]
                    return (
                        <li key={i}>
                            <strong>{i + 1}</strong>.&nbsp;
                            {q.question}
                            <i className={cls.join(' ')}/>
                        </li>
                    )
                })}
            </ul>

            <p>Right {successCount} from {props.quiz.length}</p>
            <div>
                <button>Repeat</button>
            </div>
        </div>
    )
}

export default FinishedQuiz;