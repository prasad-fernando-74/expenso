import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import SignIn from './components/SignIn';
import ExpenseList from './components/ExpenseList';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key='root' hideNavBar>
                <Scene key='auth'>
                    <Scene 
                        key='signin' 
                        component={SignIn} 
                        title='Please Sign In' 
                        initial 
                    />
                </Scene>
                <Scene key='main'>
                    <Scene 
                        rightTitle='Sign Out'
                        onRight={() => Actions.auth()}
                        key='expenseList' 
                        component={ExpenseList} 
                        title='Expenses' 
                        initial
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;
