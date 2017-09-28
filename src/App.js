import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
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
		return (
			<Provider store={createStore(reducers)}>
				<LoginForm />
			</Provider>
		);
	}
}

export default App;
