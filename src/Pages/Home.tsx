import { Box, Center, Image, Text } from "@chakra-ui/react";
import React from "react";

export const Home: React.FC = () => {
  return (
    <Center>
      <Box
        marginTop="3rem"
        display="flex"
        justifyContent="space-between"
        width="700px"
        height="120px"
      >
        <Image src="/adnsu.png"></Image>
        <Image src="/Area.png"></Image>
        <Image src="/aztu.png" bg="rgb(19,29,100)"></Image>
      </Box>
    </Center>
  );
};
