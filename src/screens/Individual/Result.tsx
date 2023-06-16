import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  CheckIcon,
  Flex,
  FormControl,
  Heading,
  IconButton,
  Input,
  Pressable,
  Select,
  Spinner,
  Text,
  VStack,
} from "native-base";
import { publicAxios } from "../../utils/axios/axios";
import Modals from "../../components/common/Modals";
import { IDiplomaResults } from "../../utils/interface/interface";
import { Ionicons } from "@expo/vector-icons";
import { useToast } from "react-native-toast-notifications";
import { useNavigation } from "@react-navigation/native";
import GoBack from "../../components/common/GoBack";
import { SafeAreaView } from "react-native";

const Result = () => {
  const navigation = useNavigation();
  const toast = useToast();
  const [technology, setTechnology] = useState<string>("");
  const [roll, setRoll] = useState<string>("");
  const [data, setData] = useState<IDiplomaResults[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleSubmit = async () => {
    if (!technology || !roll) return toast.show("Please input required filed!");
    try {
      setLoading(true);
      const { data } = await publicAxios.get(
        `result?rollNumber=${roll}&technology=${technology}`
      );
      if (data) {
        if (data.status === "error") return toast.show(data?.message);
        toast.show("Result got it!");
        setData(data);
        setShowModal(true);
      } else {
        toast.show("Fail to get result!");
      }
    } catch (error: any) {
      if (!error) return toast.show("Server error!");
      toast.show(error?.response?.message || "Fail to get result!");
    } finally {
      setLoading(false);
      setTechnology("");
      setRoll("");
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#18181b" }}>
      <Flex flex={1} justifyContent="flex-start" w="full" h="full" bg="dark.50">
        <Pressable px={2} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle-sharp" size={34} color="white" />
        </Pressable>

        <Center flex={1}>
          <Heading
            textTransform="uppercase"
            fontSize="3xl"
            color="white"
            textAlign="center"
          >
            Individual Results
          </Heading>
        </Center>
      </Flex>
      <Box
        flex={3}
        borderTopLeftRadius="70px"
        borderTopRightRadius="70px"
        p={4}
        w="full"
        h="full"
        bg="dark.900"
      >
        <Center w="full" h="2/3">
          <VStack w="full" px={5} space={3}>
            <FormControl isRequired>
              <FormControl.Label
                _text={{
                  fontSize: "md",
                  fontWeight: "semibold",
                }}
              >
                Choose service
              </FormControl.Label>
              <Select
                accessibilityLabel="Choose technology"
                placeholder="Choose technology"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size={5} />,
                }}
                size="md"
                fontWeight="bold"
                p={4}
                selectedValue={technology}
                onValueChange={(tech) => setTechnology(tech)}
              >
                <Select.Item
                  label="DIPLOMA IN ENGINEERING"
                  value="diploma%20in%20engineering"
                />
                <Select.Item
                  label="DIPLOMA IN TOURISM AND HOSPITALITY"
                  value="diploma%20in%20tourism%20and%20hospitality"
                />
                <Select.Item
                  label="DIPLOMA IN TEXTILE ENGINEERING"
                  value="diploma%20in%20textile%20engineering"
                />
                <Select.Item
                  label="DIPLOMA IN AGRICULTURE"
                  value="diploma%20in%20agriculture"
                />
                <Select.Item
                  label="DIPLOMA IN FISHERIES"
                  value="diploma%20in%20fisheries"
                />
                <Select.Item
                  label="DIPLOMA IN FORESTRY"
                  value="diploma%20in%20forestry"
                />
                <Select.Item
                  label="DIPLOMA IN LIVESTOCK"
                  value="diploma%20in%20livestock"
                />
                <Select.Item
                  label="CERTIFICATE IN MARINE TRADE"
                  value="certificate%20in%20marine%20trade"
                />
                <Select.Item
                  label="DIPLOMA IN MEDICAL TECHNOLOGY"
                  value="diploma%20in%20medical%20technology"
                />
                <Select.Item
                  label="DIPLOMA IN TOURISM AND HOSPITALITY MANAGEMENT"
                  value="diploma%20in%20tourism%20and%20hospitality%20management"
                />
                <Select.Item
                  label="DIPLOMA IN HEALTH TECHNOLOGY AND SERVICE"
                  value="diploma%20in%20health%20technology%20and%20service"
                />
              </Select>
            </FormControl>
            <FormControl isRequired>
              <FormControl.Label
                _text={{
                  fontSize: "md",
                  fontWeight: "semibold",
                }}
              >
                Roll number
              </FormControl.Label>
              <Input
                size="md"
                p={4}
                fontWeight="bold"
                value={roll}
                placeholder="Roll number"
                keyboardType="numeric"
                onChangeText={(roll) => setRoll(roll)}
              />
            </FormControl>
            <Button
              onPress={handleSubmit}
              colorScheme="darkBlue"
              _text={{
                fontSize: "xl",
                fontWeight: "semibold",
              }}
            >
              {loading ? <Spinner size="lg" /> : "View Result"}
            </Button>
          </VStack>
        </Center>
        <Modals
          heading="Your result"
          isOpen={showModal}
          data={data as IDiplomaResults[]}
          onClose={() => setShowModal(false)}
        />
      </Box>
    </SafeAreaView>
  );
};

export default Result;
