import { Flex, Heading, Text } from "native-base";
import React from "react";

interface IWelComeBox {
  title: string;
  des: string;
    bg: string;
    press?: ()=>void
}

const WelComeBox = ({ des, title, bg, press }: IWelComeBox) => {
  return (
    <Flex
      shadow="3"
      bg={bg}
      align="center"
      borderColor="white"
      p={5}
      rounded="3xl"
    >
      <Heading pb={3} textTransform="uppercase" color="trueGray.900" fontSize="2xl">
        {title}
      </Heading>
      <Text textAlign="center" fontSize="md" color="gray.700">
        {des}
      </Text>
    </Flex>
  );
};

export default WelComeBox;
