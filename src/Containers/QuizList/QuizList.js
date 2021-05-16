import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import classes from './QuizList.module.css'
import axios from '../../axios/axios-quiz'
import Loader from '../../Components/UI/Loader/Loader'

export default class QuizList extends Component {
    state = {
        quizes: [],
        loading: true,
    };

    renderQuizes() {
        return this.state.quizes.map(q => {
            return (
                <li
                    key={q.id}
                >
                    <NavLink to={'/quiz/' + q.id}>
                        {q.name}
                    </NavLink>

                </li>
            )
        }) 
    }

    async componentDidMount() {
        try {
            const response = await axios.get('/quizes.json');

            const quizes = []

            Object.keys(response.data).forEach((key, i) => {
                quizes.push({
                    id: key,
                    name: `Тест №${i + 1}` 
                })
            });

            this.setState({
                quizes,
                loading: false
            })
        } catch(e) {
            console.log(e);
        }        
    }

    render() {
        return (
            <div className={classes.QuizList}>
                <div>
                    <h1>Список тестов</h1>
                    {this.state.loading 
                    ? <Loader /> 
                    : <ul>
                        {this.renderQuizes()}
                    </ul>}
                </div>
                
            </div>
        )
    }
}