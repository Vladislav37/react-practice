import React, {Component} from 'react'
import Layout from './hoc/Layout/Layout.js';
import Quiz from './Containers/Quiz/Quiz.js';
import Auth from './Containers/Auth/Auth.js';
import QuizCreator from './Containers/QuizCreator/QuizCreator';
import QuizList from './Containers/QuizList/QuizList';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/auth" component={Auth} />
                    <Route path="/quiz-creator" component={QuizCreator} />
                    <Route path="/quiz/:id" component={Quiz} />
                    <Route path="/" component={QuizList} />
                </Switch>        
            </Layout>
          );
    }  
}

export default App;
