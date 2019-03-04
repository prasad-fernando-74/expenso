import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <View style={styles.containerStyle}>
                    <Router />
                </View>
            </Provider>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
};

export default App;
