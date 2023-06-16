import React, { useState } from "react";
import {
  Button, Flex,
  FormControl,
  HStack,
  Heading,
  Input,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  Spinner, VStack
} from "native-base";
import CgpaModel from "../../components/common/CgpaModel";
import { Ionicons } from "@expo/vector-icons";
import { useToast } from "react-native-toast-notifications";
import { useNavigation } from "@react-navigation/native";

const Cgpa = () => {
  const navigation = useNavigation();
  const toast = useToast();
  const [loading, setLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  // all useStates

  const [first, setFirst] = useState<string>("");
  const [second, setSecond] = useState<string>("");
  const [third, setThird] = useState<string>("");
  const [fourth, setFourth] = useState<string>("");
  const [fifth, setFifth] = useState<string>("");
  const [sixth, setSixth] = useState<string>("");
  const [seventh, setSeventh] = useState<string>("");
  const [eight, setEight] = useState<string>("");

  const [point, setPoint] = useState<string>("");
  const [gread, setGread] = useState<string>("");

  // cgpa calculaton
  const getCgpa = () => {
    if (
      !first ||
      !second ||
      !third ||
      !fourth ||
      !fifth ||
      !sixth ||
      !seventh ||
      !eight
    ) {
      return toast.show("input field is required!😒");
    }
    const cgpa =
      (Number(first) * 0.05 +
        Number(second) * 0.05 +
        Number(third) * 0.1 +
        Number(fourth) * 0.1 +
        Number(fifth) * 0.2 +
        Number(sixth) * 0.2 +
        Number(seventh) * 0.2 +
        Number(eight) * 0.1) /
      1.0;
    const new_cgpa = cgpa.toFixed(2);
    // let grade = "";

    if (Number(new_cgpa) === 4.0) {
      setGread("A+");
    } else if (Number(new_cgpa) >= 3.75) {
      setGread("A");
    } else if (Number(new_cgpa) >= 3.5) {
      setGread("A-");
    } else if (Number(new_cgpa) >= 3.25) {
      setGread("B+");
    } else if (Number(new_cgpa) >= 3.0) {
      setGread("B");
    } else if (Number(new_cgpa) >= 2.75) {
      setGread("B-");
    } else if (Number(new_cgpa) >= 2.5) {
      setGread("C+");
    } else if (Number(new_cgpa) >= 2.25) {
      setGread("C");
    } else if (Number(new_cgpa) >= 2.0) {
      setGread("C-");
    } else {
      setGread("F");
    }
    const finalres = String(new_cgpa + " " + gread);
    setPoint(finalres);
    setShowModal(true);
    setFirst("");
    setSecond("");
    setThird("");
    setFourth("");
    setFifth("");
    setSixth("");
    setSeventh("");
    setEight("");
  };

  const reset = () => {
    setFirst("");
    setSecond("");
    setThird("");
    setFourth("");
    setFifth("");
    setSixth("");
    setSeventh("");
    setEight("");
    toast.show("Reseted!");
  };

  return (
    <>
      <KeyboardAvoidingView style={{ flex: 1, backgroundColor: "#18181b" }}>
        <ScrollView contentContainerStyle={{ flex: 1 }} bounces={false}>
          <Flex safeArea bg="dark.50" flex={5}>
            <Flex
              position="relative"
              flex={1}
              bg="dark.50"
              align="center"
              justify="center"
            >
              <Pressable
                top={0}
                left={1}
                position="absolute"
                px={2}
                onPress={() => navigation.goBack()}
              >
                <Ionicons
                  name="arrow-back-circle-sharp"
                  size={34}
                  color="white"
                />
              </Pressable>
              <Heading
                textTransform="uppercase"
                fontSize="3xl"
                color="white"
                textAlign="center"
              >
                CGPA Calculator
              </Heading>
            </Flex>
            <Flex
              flex={4}
              bg="white"
              borderTopLeftRadius="70px"
              borderTopRightRadius="70px"
              p={4}
            >
              <VStack py={2} space={5}>
                <FormControl isRequired>
                  <Heading
                    my={5}
                    fontWeight="bold"
                    color="dark.50"
                    textAlign="center"
                  >
                    Enter Your GPA
                  </Heading>

                  <HStack space={3} alignItems="center">
                    <Input
                      flex={1}
                      size="md"
                      p={4}
                      fontWeight="bold"
                      value={first}
                      placeholder="1st Semester"
                      keyboardType="numeric"
                      onChangeText={(roll) => setFirst(roll)}
                    />
                    <Input
                      flex={1}
                      size="md"
                      p={4}
                      fontWeight="bold"
                      value={second}
                      placeholder="2nd Semester"
                      keyboardType="numeric"
                      onChangeText={(roll) => setSecond(roll)}
                    />
                  </HStack>
                </FormControl>
                <FormControl isRequired>
                  <HStack space={3} alignItems="center">
                    <Input
                      flex={1}
                      size="md"
                      p={4}
                      fontWeight="bold"
                      value={third}
                      placeholder="3rd Semester"
                      keyboardType="numeric"
                      onChangeText={(roll) => setThird(roll)}
                    />
                    <Input
                      flex={1}
                      size="md"
                      p={4}
                      fontWeight="bold"
                      value={fourth}
                      placeholder="4th Semester"
                      keyboardType="numeric"
                      onChangeText={(roll) => setFourth(roll)}
                    />
                  </HStack>
                </FormControl>
                <FormControl isRequired>
                  <HStack space={3} alignItems="center">
                    <Input
                      flex={1}
                      size="md"
                      p={4}
                      fontWeight="bold"
                      value={fifth}
                      placeholder="5th Semester"
                      keyboardType="numeric"
                      onChangeText={(roll) => setFifth(roll)}
                    />
                    <Input
                      flex={1}
                      size="md"
                      p={4}
                      fontWeight="bold"
                      value={sixth}
                      placeholder="6th Semester"
                      keyboardType="numeric"
                      onChangeText={(roll) => setSixth(roll)}
                    />
                  </HStack>
                </FormControl>
                <FormControl isRequired>
                  <HStack space={3} alignItems="center">
                    <Input
                      flex={1}
                      size="md"
                      p={4}
                      fontWeight="bold"
                      value={seventh}
                      placeholder="7th Semester"
                      keyboardType="numeric"
                      onChangeText={(roll) => setSeventh(roll)}
                    />
                    <Input
                      flex={1}
                      size="md"
                      p={4}
                      fontWeight="bold"
                      value={eight}
                      placeholder="8th Semester"
                      keyboardType="numeric"
                      onChangeText={(roll) => setEight(roll)}
                    />
                  </HStack>
                </FormControl>
                <Button
                  onPress={getCgpa}
                  colorScheme="darkBlue"
                  _text={{
                    fontSize: "xl",
                    fontWeight: "semibold",
                  }}
                >
                  {loading ? <Spinner size="lg" /> : "Calculate"}
                </Button>
                <Button
                  onPress={() => reset()}
                  colorScheme="darkBlue"
                  _text={{
                    fontSize: "xl",
                    fontWeight: "semibold",
                  }}
                >
                  {loading ? <Spinner size="lg" /> : "Reset"}
                </Button>
                <CgpaModel
                  heading="Your result"
                  isOpen={showModal}
                  gread={gread}
                  point={point}
                  onClose={() => setShowModal(false)}
                />
              </VStack>
            </Flex>
          </Flex>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Cgpa;
