import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthenticationStack } from './navigations';

export const App = () => {
	return (
		<NavigationContainer>
			<AuthenticationStack />
		</NavigationContainer>
	);
};
