import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';

import {Tester, TestHookStore} from 'cavy';
import AppSpec from './specs/AppSpec';

// if(process.env.TEST === "true"){
const testHookStore = new TestHookStore();

const AppWrapper = () =>
	<Tester specs={[AppSpec]} store={testHookStore} waitTime={1000} startDelay={3000}>
		<App/>
	</Tester>;

AppRegistry.registerComponent('FlickApp', () => AppWrapper);


// }else{
// 	AppRegistry.registerComponent('FlickApp', () => App);
// }
