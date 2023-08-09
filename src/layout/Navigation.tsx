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
    <Box display="flex" flexDirection="row">
      <Box
        mt="7px"
        display="flex"
        justifyContent={{ md: "space-between", base: "center" }}
        gap="9px"
        position="relative"
        zIndex={200}
      >
        <ChakraLink href="http://asoiu.edu.az/">
          <Tooltip
            label=" Azerbaijan State Oil and Industry University"
            hasArrow
          >
            <Image
              marginLeft="1rem"
              src="/adnsu.png"
              borderRadius="10%"
              height="45px"
            ></Image>
          </Tooltip>
        </ChakraLink>

        <ChakraLink href=" http://azenerji.com/en/about/pei.html">
          <Tooltip
            hasArrow
            label="Azerbaijan Scientific-Research & Design Prospecting Power Engineering Institute"
          >
            <Image src="/Area.png" borderRadius="10%" height="45px"></Image>
          </Tooltip>
        </ChakraLink>

        <ChakraLink href="https://www.aztu.edu.az/en">
          <Tooltip label="Azerbaijan Technical University" hasArrow>
            <Image
              borderRadius="10%"
              src="/aztu.png"
              bg="rgb(19,29,100)"
              height="45px"
            ></Image>
          </Tooltip>
        </ChakraLink>
      </Box>
      <HStack
        zIndex={10}
        w="100%"
        justify="center"
        spacing="20px"
        borderRadius="5px"
        p="10px"
        bg="blackAlpha.100"
        pos="sticky"
        top="5px"
        alignItems="center"
        position="absolute"
      >
        {NAVS.map((nav) => {
          const isActive = checkIsActive(nav.to)
          return (
            <Link style={{ cursor: "pointer" }} key={nav.to} to={nav.to}>
              <VStack
                fontSize="1.3rem"
                fontWeight="bold"
                spacing="0"
                transition="0.2s ease-in"
                color={isActive ? "blue.400" : "black"}
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
      </HStack>
    </Box>
  )
}
