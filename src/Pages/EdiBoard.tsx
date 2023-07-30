import { Box, Text, Center, Image, Tooltip } from "@chakra-ui/react";
import React from "react";

export const EdBoard: React.FC = () => {
  return (
    <Box>
      <Center>
        <Box
          marginTop="3rem"
          marginBottom="7rem"
          display="flex"
          gap="30px"
          justifyContent={{ md: "space-between", base: "center" }}
          width="1000px"
          height="120px"
        >
          <Box display="flex" flexDirection="column">
            <Image
              src="/adnsu.png"
              boxShadow=" 5px 10px 12px #888888"
              height="150px"
            ></Image>
            <Text marginTop="10px">
              Azerbaijan State Oil and Industry University
            </Text>
          </Box>
          <Box display="flex" flexDirection="column">
            <Image
              src="/Area.png"
              boxShadow=" 5px 10px 12px #888888"
              height="200px"
              width="150px"
            ></Image>
            <Tooltip label="Azerbaijan Scientific-Research & Design Prospecting Power Engineering Institute">
              <Text marginTop="10px" marginLeft="-40px">
                Azerbaijan Scientific-Research...{" "}
              </Text>
            </Tooltip>
          </Box>
          <Box display="flex" flexDirection="column">
            <Image
              src="/aztu.png"
              bg="rgb(19,29,100)"
              boxShadow=" 5px 10px 12px #888888"
              height="150px"
            ></Image>{" "}
            <Center>
              <Text marginTop="10px">Azerbaijan Technical University</Text>
            </Center>
          </Box>
        </Box>
      </Center>{" "}
      <Center>
        <Box display="flex" flexDirection="column">
          <Box
            width="1200px"
            height="10px"
            bg="blue.300"
            borderRadius="4px"
          ></Box>
          <Center>
            <Box display="flex" flexDirection="column" textAlign="center">
              <Text fontSize="30px" color="blue" fontWeight="bold">
                ELECTROENERGETICS, ELECTROTECHNICS
              </Text>

              <Text fontSize="30px" color="blue" fontWeight="bold">
                ELECTROMECHANICS + CONTROL
              </Text>
              <Text fontSize="30px" color="red" fontWeight="bold">
                Scientific – Industrial Journal
              </Text>
            </Box>
          </Center>

          <Box
            width="1200px"
            height="10px"
            bg="blue.300"
            borderRadius="4px"
          ></Box>
        </Box>
      </Center>
    </Box>
  );
};
