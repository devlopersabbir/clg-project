import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "native-base";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const GoBack = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      position="absolute"
      top={2}
      left={2}
      onPress={() => navigation.goBack()}
      mr={2}
    >
      <Ionicons name="arrow-back-circle-sharp" size={34} color="white" />
    </Pressable>
  );
};

export default GoBack;
