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
import { CModelView, GDiplomaResults } from "../../utils/interface/interface";

const CgpaModel: React.FC<CModelView> = ({ heading, isOpen, onClose, data }) => {
    return (
        <Center w="full" h="full" mx={2}>
            <Modal isOpen={isOpen} onClose={onClose} size="full" bg="dark.500">
                <Modal.Content w="full" bg="gray.200">
                    <Modal.Header bg="gray.200">{heading}</Modal.Header>
                    <Modal.CloseButton />
                    <Modal.Body>
                        <ScrollView>
                            <VStack alignItems="center" space={1} pb={5}>
                                {data && (
                                    <Results
                                        key={0}
                                        result={data[7]?.result}
                                    />
                                )}

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

interface GResult {
    result?: any;

}

const Results = ({ result }: GResult) => {
    return (
        <>
            <HStack justifyContent="space-between" pb={1}>

                <Text fontSize="md">{result}</Text>
            </HStack>

        </>
    );
};
