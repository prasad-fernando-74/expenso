import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import SignIn from './components/SignIn';
import ExpenseList from './components/ExpenseList';
import NavBar from './components/NavBar';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key='root' hideNavBar>
                <Scene key='auth'>
                    <Scene 
                        key='signin' 
                        title='Sign In'
                        navBar={NavBar}
                        component={SignIn} 
                        initial 
                    />
                </Scene>
                <Scene key='main'>
                    <Scene 
                        key='expenseList' 
                        title='Expenses' 
                        navBar={NavBar}
                        component={ExpenseList} 
                        rightTitle='Sign Out'
                        onRight={() => Actions.auth()}
                        initial
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;
