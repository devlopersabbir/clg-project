import {
  Box,
  Flex,
  Heading,
  Pressable,
  ScrollView, VStack
} from "native-base";
import React, { useEffect, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { noticeRequiest } from "../../utils/axios/axios";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Notices } from "../../utils/interface/interface";
import { Linking } from "react-native";
import { useToast } from "react-native-toast-notifications";

const Notice = () => {
  const navigation = useNavigation();
  const toast = useToast();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Notices[]>([]);

  const getNotice = async () => {
    setLoading(true);
    try {
      const response = await noticeRequiest.get(
        `/datatable/notices_view.php?domain_id=6340&lang=bn&subdomain=bteb.portal.gov.bd&content_type=notices`
      );
      setData(response?.data?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getNotice();
  }, []);

  return (
    <Flex bg="gray.50" flex={1}>
      <Pressable
        top={0}
        left={1}
        position="absolute"
        px={2}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back-circle-sharp" size={34} color="white" />
      </Pressable>
      <ScrollView>
        {data.map((data: any, i: number) => (
          <VStack key={i} safeArea px={3} py={0} shadow="2" w="full" bg="white">
            <Flex flexDir="row" align="center" justify="space-between">
              <Box w="90%" borderRightWidth="2" borderRightColor="gray.400">
                <Heading fontSize="lg">{data[1]}</Heading>
              </Box>
              <Pressable
                onPress={async () => {
                  const singleData = data[3];
                  const startIndex = singleData.indexOf('href="') + 6;
                  const endIndex = singleData.indexOf('"', startIndex);
                  const url = singleData.slice(startIndex, endIndex);

                  // Remove the leading '//'
                  const cleanedUrl = url.replace(/^\/\//, "");
                  const supported = await Linking.canOpenURL(
                    cleanedUrl as string
                  );
                  if (supported) {
                    await Linking.openURL(cleanedUrl);
                  } else {
                    toast.show("Unable to open URL");
                  }
                }}
                w="10%"
                pl={3}
                alignItems="center"
                justifyContent="center"
              >
                <FontAwesome5 name="file-pdf" size={24} color="red" />
              </Pressable>
            </Flex>
          </VStack>
        ))}
      </ScrollView>
    </Flex>
  );
};

export default Notice;
