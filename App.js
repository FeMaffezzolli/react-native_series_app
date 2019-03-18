import React, { Component } from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation';

import LoginPage from './src/pages/LoginPage';

const AppStackNavigator = createStackNavigator(
	{
		Home: {
			screen: LoginPage,
			navigationOptions: {
				title:"Bem vindo!"
			}
		}
	},
	{
		defaultNavigationOptions:
		{
			title:"Series",
			headerTintColor: "black",
			headerStyle: {
				backgroundColor: "#f8de00"
			},
			headerTitleStyle: {
				fontSize: 30,
				color: "black"
			}
		}
	}
)

const AppContainer = createAppContainer(AppStackNavigator);

export default class App extends Component {
	render() {
		return <AppContainer />;
	}
}
