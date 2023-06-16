import React from "react";
import {
  Flex,
  HStack,
  Heading,
  Image,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  Text,
} from "native-base";
import { WellcomeScreen } from "../../utils/types/pageTypes";
import WelComeBox from "../../components/Welcome/WelComeBox";
// import logo from "../../../assets/icon.png"

const Wellcome = ({ navigation }: WellcomeScreen) => {
  return (
    <KeyboardAvoidingView flex={1}>
      <ScrollView contentContainerStyle={{ flex: 1 }} bounces={false}>
        <Flex safeArea bg="gray.50" flex={10}>
          <Flex align="center" justify="center" flex={2}>
            <Heading color="gray.900" textTransform="uppercase" fontSize="3xl">
              BTEB result GAi
            </Heading>
            <Text fontSize="lg" fontWeight="light" color="coolGray.500">
              Curious Crew
            </Text>
          </Flex>
          <Flex flex={6} px={3} flexDir="column">
            <HStack mb={2} w="full" justifyContent="space-between">
              <Pressable
                w="48%"
                onPress={() => navigation.navigate("Individual")}
              >
                <WelComeBox
                  title="Result"
                  des="Individual Student Result"
                  bg="#3498DB"
                />
              </Pressable>

              <Pressable w="48%" onPress={()=>navigation.navigate("Cgpa")}>
                <WelComeBox
                  title="CGPA"
                  des="Get CGPA Based On All Semester"
                  bg="#E6B0AA"
                />
              </Pressable>
            </HStack>
            <HStack mt={2} mb={2} w="full" justifyContent="space-between">
              <Pressable w="48%" onPress={()=>navigation.navigate("Notice")}>
                <WelComeBox
                  title="notice"
                  des="BTEB All Notice! All About Our Study"
                  bg="#D2B4DE"
                />
              </Pressable>
              <Pressable w="48%">
                <WelComeBox
                  title="Comming"
                  des="New Options Comming Soon"
                  bg="#F9E79F"
                />
              </Pressable>
            </HStack>
            <HStack mt={2} mb={2} w="full" justifyContent="space-between">
              <Pressable w="48%">
                <WelComeBox
                  title="Comming"
                  des="New Options Comming Soon"
                  bg="#BFC9CA"
                />
              </Pressable>
              <Pressable w="48%">
                <WelComeBox
                  title="Comming"
                  des="New Options Comming Soon"
                  bg="#85C1E9"
                />
              </Pressable>
            </HStack>
          </Flex>
          {/* <Flex py={2} flex={2} align="center">
            <Image
              w="48"
              h="48"
              source={require("../../../assets/icon.png")}
              alt="logo"
            />
          </Flex> */}
        </Flex>
      </ScrollView>
    </KeyboardAvoidingView>
    // <Center w="full" h="full">
    //   <VStack>
    //     <Flex align="center">
    //       <Heading fontSize="3xl" color="gray.900">
    //         BTEB Result GAI
    //       </Heading>
    //       <Text fontSize="sm" colorScheme="gray">
    //         Created by Team Curious Crew
    //       </Text>
    //     </Flex>

    //     <HStack
    //       px={5}
    //       justifyContent="space-between"
    //       borderColor="green.400"
    //       my={5}
    //     >
    //       <Button
    //         size="lg"
    //         variant="solid"
    //         colorScheme="darkBlue"
    //         onPress={() => navigation.navigate("Cgpa")}
    //       >
    //         CGPA
    //       </Button>

    //       <Button
    //         size="lg"
    //         colorScheme="indigo"
    //         variant="solid"
    //         onPress={() => navigation.navigate("Individual")}
    //       >
    //         Result
    //       </Button>
    //     </HStack>
    //   </VStack>
    // </Center>
  );
};

export default Wellcome;
