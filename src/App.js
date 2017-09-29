import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyC_GT84-lGtRYlQPvgwD0oT5qPkYOstp8M',
			authDomain: 'manager-8470d.firebaseapp.com',
			databaseURL: 'https://manager-8470d.firebaseio.com',
			projectId: 'manager-8470d',
			storageBucket: 'manager-8470d.appspot.com',
			messagingSenderId: '662923904915'
		};
		firebase.initializeApp(config);
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
				<LoginForm />
			</Provider>
		);
	}
}

export default App;
