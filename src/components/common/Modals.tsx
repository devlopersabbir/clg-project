import {
  Box,
  Center,
  Divider,
  HStack,
  Heading,
  Modal,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { IModalView, IDiplomaResults } from "../../utils/interface/interface";

const Modals: React.FC<IModalView> = ({ heading, isOpen, onClose, data }) => {
  return (
    <Center w="full" h="full" mx={2}>
      <Modal isOpen={isOpen} onClose={onClose} size="full" bg="dark.500">
        <Modal.Content w="full" bg="gray.200">
          <Modal.Header bg="gray.200">{heading}</Modal.Header>
          <Modal.CloseButton />
          <Modal.Body>
            <ScrollView>
              <VStack alignItems="center" space={1} pb={5}>
                <Heading textAlign="center" fontSize="2xl">
                  {data && data[0]?.institute}
                </Heading>
                <Text
                  textTransform="capitalize"
                  fontSize="lg"
                  fontWeight="normal"
                >
                  {data && data[0]?.technology}
                </Text>
                <Text fontSize="lg">Roll : {data && data[0]?.roll}</Text>
              </VStack>
              <Divider mb={3} />
              <VStack space={3}>
                {data &&
                  data?.map((item: IDiplomaResults, index: number) => (
                    <Results
                      key={index}
                      semister={item?.semester}
                      date={item?.Date}
                      isPassed={item?.results?.passed}
                      subjectCode={item?.results?.subjects}
                      gpa={item?.results?.gpa}
                    />
                  ))}
              </VStack>
            </ScrollView>
            <Box mt={5}>
              <Text textAlign="center" color="black" fontWeight="bold">
                Developed by Curious Crew
              </Text>
            </Box>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default Modals;

interface IResults {
  semister?: string;
  isPassed?: any;
  date?: string;
  subjectCode?: string | null;
  gpa?: string;
}

const Results = ({ date, isPassed, semister, subjectCode, gpa }: IResults) => {
  return (
    <>
      <HStack justifyContent="space-between" pb={1}>
        <Text fontSize="md" color={isPassed !== null ? "green.500" : "red.500"}>
          {semister} {isPassed !== null ? " Passed" : "Fail"}
        </Text>
        <Text fontSize="md">{date}</Text>
      </HStack>
      <Box bg="white" p={3} rounded="lg">
        <Text fontSize="md" fontWeight="semibold">
          {isPassed !== null ? gpa : subjectCode}
        </Text>
      </Box>
    </>
  );
};
