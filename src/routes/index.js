import React from "react";
import { Scene, Tabs, Stack } from "react-native-router-flux";
import { Icon } from "native-base";

import DefaultProps from "../constants/navigation";
import AppConfig from "../../constants/config";

import SignUpContainer from "../../containers/SignUp";
import SignUpComponent from "../components/SignUp";

import LoginContainer from "../../containers/Login";
import LoginComponent from "../components/Login";

import ForgotPasswordContainer from "../../containers/ForgotPassword";
import ForgotPasswordComponent from "../components/ForgotPassword";

import AboutComponent from "../components/About";

const Index = (
  <Stack>
    <Scene key="login" component={LoginContainer} Layout={LoginComponent}/> 
    <Scene key="signup" component={SignUpContainer} Layout={SignupComponent}/> 
    <Scene key="signup" component={ForgotPasswordContainer} Layout={ForgotPasswordComponent}/> 
  </Stack>
);

export default Index;
