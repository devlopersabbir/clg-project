import React from "react";
import AppContainer from "./src/components/AppContainer";
import MainScreen from "./src/screens/MainScreen";
import { ToastProvider } from "react-native-toast-notifications";

const App = () => {
  return (
    <AppContainer>
      <ToastProvider
        duration={3000}
        placement="bottom"
        animationType="slide-in"
        swipeEnabled={true}
      >
        <MainScreen />
      </ToastProvider>
    </AppContainer>
  );
};

export default App;
