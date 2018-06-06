import React from "react";
import { Scene, Tabs, Stack } from "react-native-router-flux";
import { Icon } from "native-base";

import DefaultProps from "../constants/navigation";
import AppConfig from "../../constants/config";

import SignUpContainer from "../containers/SignUp";
import SignUpComponent from "../components/SignUp";

import LoginContainer from "../containers/Login";
import LoginComponent from "../components/Login";

import ForgotPasswordContainer from "../containers/ForgotPassword";
import ForgotPasswordComponent from "../components/ForgotPassword";

import AboutComponent from "../components/About";

const Index = (
	<React.Fragment>
		<Scene hideNavBar key="login" component={LoginContainer} Layout={LoginComponent}/> 
		<Scene back key="signup" title="Sign Up" component={SignUpContainer} Layout={SignUpComponent} {...DefaultProps.navbarProps}/> 
		<Scene key="signup" component={ForgotPasswordContainer} Layout={ForgotPasswordComponent}/>
		<Scene key="about" component={ForgotPasswordContainer} Layout={ForgotPasswordComponent}/>
	</React.Fragment> 
);

export default Index;
