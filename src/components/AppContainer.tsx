import { NativeBaseProvider } from "native-base";
import React from "react";

interface IAppContainerProps {
  children: React.ReactNode;
}

const AppContainer: React.FC<IAppContainerProps> = ({ children }) => {
  return <NativeBaseProvider>{children}</NativeBaseProvider>;
};

export default AppContainer;
