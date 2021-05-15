import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import classes from './QuizList.module.css'

export default class QuizList extends Component {
    renderQuizes() {
        return [1,2,3].map((q,i) => {
            return (
                <li
                    key={i}
                >
                    <NavLink to={'/quiz/' + q}>
                        Тест {q}
                    </NavLink>

                </li>
            )
        }) 
    }

    render() {
        return (
            <div className={classes.QuizList}>
                <div>
                    <h1>Список тестов</h1>
                    <ul>
                        {this.renderQuizes()}
                    </ul>
                </div>
                
            </div>
        )
    }
}