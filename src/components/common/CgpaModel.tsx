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
import { CModelView } from "../../utils/interface/interface";

const CgpaModel: React.FC<CModelView> = ({
  heading,
  isOpen,
  onClose,
  gread,
  point,
}) => {
  return (
    <Center w="full" h="full" mx={2}>
      <Modal isOpen={isOpen} onClose={onClose} size="full" bg="dark.500">
        <Modal.Content w="full" bg="gray.200">
          <Modal.Header bg="gray.200">{heading}</Modal.Header>
          <Modal.CloseButton />
          <Modal.Body>
            <ScrollView>
              <VStack alignItems="center" space={2} pb={5}>
                <HStack alignItems="center">
                  <Heading fontSize="lg" color="green.600">
                    Point:{" "}
                  </Heading>
                  <Text fontWeight="bold">{point}</Text>
                </HStack>
                <HStack alignItems="center">
                  <Heading fontSize="lg" color="green.600">
                    Gread:{" "}
                  </Heading>
                  <Text fontWeight="bold">{gread}</Text>
                </HStack>
              </VStack>
              <Divider mb={3} />
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

export default CgpaModel;
