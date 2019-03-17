import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';

import LoginPage from './src/pages/LoginPage';

const AppStackNavigator = createStackNavigator({
	Home: LoginPage
})

const AppContainer = createAppContainer(AppStackNavigator);

export default class App extends Component {
	render() {
		return <AppContainer />;
	}
}
