import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import SignIn from './components/SignIn';
import ExpenseList from './components/ExpenseList';
import NavBar from './components/NavBar';
import BillDetails from './components/BillDetails';
import Bill from './components/Bill';

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
                        initial
                    />
                    <Scene
                        key='billDetails'
                        title='Bill Details'
                        navBar={NavBar}
                        component={BillDetails}
                    />
                    <Scene
                        key='bill'
                        title='Bill'
                        navBar={NavBar}
                        component={Bill}
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;
