import React, {Component} from 'react'
import Layout from './hoc/Layout/Layout.js';
import Quiz from './Containers/Quiz/Quiz.js';
import Auth from './Containers/Auth/Auth.js';
import QuizCreator from './Containers/QuizCreator/QuizCreator';
import QuizList from './Containers/QuizList/QuizList';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Logout from './Components/Logout/Logout.js';
import { autoLogin } from './store/actions/auth.js';

class App extends Component {
    componentDidMount() {
        this.props.autoLogin()
    }
    render() {
        let routs = (
            <Switch>
                <Route path="/auth" component={Auth} />
                <Route path="/quiz/:id" component={Quiz} />
                <Route path="/" exact component={QuizList} />
                <Redirect to="/" />
            </Switch>
        )

        if (this.props.isAuthenticated) {
            routs = (
                <Switch>
                    <Route path="/quiz-creator" component={QuizCreator} />
                    <Route path="/quiz/:id" component={Quiz} />
                    <Route path="/logout" component={Logout}/>
                    <Route path="/" exact component={QuizList} />                    
                    <Redirect to="/" />
                </Switch>
            )
        }

        return (
            <Layout>
                {routs} 
            </Layout>
          );
    }  
}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.auth.token
    }
}

function mapDispatchToProps(dispatch) {
    return {
        autoLogin: () => dispatch(autoLogin())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
