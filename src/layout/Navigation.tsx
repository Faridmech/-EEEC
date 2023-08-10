import { Link } from "react-router-dom"

import {
  Box,
  Center,
  HStack,
  Text,
  Tooltip,
  VStack,
  Link as ChakraLink,
  LinkProps,
} from "@chakra-ui/react"
import React from "react"
import { NAVS } from "./const"
import { useIsActiveRoute } from "./hooks"
import { Image } from "@chakra-ui/react"

export const Navigations: React.FC = () => {
  const { checkIsActive } = useIsActiveRoute()

  return (
    <HStack
      zIndex={10}
      w="100%"
      spacing="20px"
      borderRadius="5px"
      p="5px"
      bg="rgb(245,245,245)"
      pos="sticky"
      top="5px"
      alignItems="center"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="67px"
        height="30px"
        bg="rgb(0,49,119)"
        borderRadius="5px"
      >
        <Tooltip label="ELECTROENERGETICS, ELECTROTECHNICS, ELECTROMECHANICS + CONTROL">
          <Text
            color="white"
            fontWeight="bold"
            fontSize="1.6rem"
            margin="0"
            padding="0"
          >
            EEEC
          </Text>
        </Tooltip>
      </Box>
      <Box display="flex" gap="13px" position="sticky" zIndex={200} flex={1}>
        <ChakraLink href="http://asoiu.edu.az/">
          <Tooltip
            label=" Azerbaijan State Oil and Industry University"
            hasArrow
          >
            <Image
              marginLeft="1rem"
              src="/adnsu.png"
              borderRadius="10%"
              height={{ lg: "45px", md: "35px", sm: "35px" }}
            ></Image>
          </Tooltip>
        </ChakraLink>

        <ChakraLink href=" http://azenerji.com/en/about/pei.html">
          <Tooltip
            hasArrow
            label="Azerbaijan Scientific-Research & Design Prospecting Power Engineering Institute"
          >
            <Image
              src="/Area.png"
              borderRadius="10%"
              height={{ lg: "45px", md: "35px", sm: "35px" }}
            ></Image>
          </Tooltip>
        </ChakraLink>

        <ChakraLink href="https://www.aztu.edu.az/en">
          <Tooltip label="Azerbaijan Technical University" hasArrow>
            <Image
              borderRadius="10%"
              src="/aztu.png"
              bg="rgb(19,29,100)"
              height={{ lg: "45px", md: "35px", sm: "35px" }}
              width="80px"
            ></Image>
          </Tooltip>
        </ChakraLink>
      </Box>
      <Box display="flex" flexDirection="row" gap="15px" flex={2}>
        {NAVS.map((nav) => {
          const isActive = checkIsActive(nav.to)
          return (
            <Link style={{ cursor: "pointer" }} key={nav.to} to={nav.to}>
              <VStack
                fontSize={{ lg: "1.3rem", md: "0.9rem", sm: "0.9rem" }}
                spacing="0"
                transition="0.2s ease-in"
                color={isActive ? "blue.400" : "rgb(0,59,90)"}
              >
                <Text
                  textUnderlineOffset={5}
                  transition="0.05s ease-in"
                  textDecoration={isActive ? "underline" : "unset"}
                >
                  {nav.name}
                </Text>
              </VStack>
            </Link>
          )
        })}
      </Box>
    </HStack>
  )
}
