import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../utils/types/pageTypes";
import Wellcome from "./Wellcome/Wellcome";
import Cgpa from "./cgpa/Cgpa";
import Result from "./Individual/Result";
import { Box, Text } from "native-base";
import GoBack from "../components/common/GoBack";
import Notice from "./Notice/Notice";

const RootStack = createNativeStackNavigator<RootStackParamsList>();

const MainScreen = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Wellcome"
        screenOptions={{
          animation: "default",
        }}
      >
        <RootStack.Screen
          options={{
            headerShown: false,
            animation: "fade",
          }}
          name="Wellcome"
          component={Wellcome}
        />
        <RootStack.Screen
          options={{
            headerShown: false,
            animation: "slide_from_left",
          }}
          name="Cgpa"
          component={Cgpa}
        />
        <RootStack.Screen
          options={{
            headerShown: false,
            animation: "flip",
          }}
          name="Individual"
          component={Result}
        />
        <RootStack.Screen
          options={{
            headerShown: true,
            animation: "slide_from_right",
          }}
          name="Notice"
          component={Notice}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default MainScreen;
