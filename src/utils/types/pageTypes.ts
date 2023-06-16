import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamsList = {
  Wellcome?: undefined;
  Main?: undefined;
  Cgpa?: undefined;
  Individual?: undefined;
  Notice?: undefined;
};

export type WellcomeScreen = NativeStackScreenProps<
  RootStackParamsList,
  "Wellcome"
>;
export type MainScreen = NativeStackScreenProps<RootStackParamsList, "Main">;
export type NoticeScreen = NativeStackScreenProps<RootStackParamsList, "Notice">;
export type CgpaScreen = NativeStackScreenProps<RootStackParamsList, "Cgpa">;
export type IndividualScreen = NativeStackScreenProps<
  RootStackParamsList,
  "Individual"
>;
