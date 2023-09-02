import { Link } from "react-router-dom"
import "../i18n/config"
import { useTranslation } from "react-i18next"
import {
  Box,
  HStack,
  Text,
  Tooltip,
  VStack,
  Link as ChakraLink,
  Select,
} from "@chakra-ui/react"
import React, { ChangeEvent } from "react"
import { NAVS } from "./const"
import { useIsActiveRoute } from "./hooks"
import { Image } from "@chakra-ui/react"
import { GrUserAdmin } from "react-icons/gr"
import { changeLanguage } from "i18next"
interface IProps {
  langValue: string
}
export const Navigations: React.FC = () => {
  const { checkIsActive } = useIsActiveRoute()

  const langValueHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    changeLanguage(e.target.value)
  }
  const { t } = useTranslation("ns1")
  return (
    <HStack
      zIndex={10}
      w="100%"
      borderRadius="5px"
      p="5px"
      bg="rgb(245,245,245)"
      pos="sticky"
      flexDirection="column"
      alignContent="space-between"
    >
      <HStack justify="space-around" w="100%">
        <Box
          display="flex"
          alignItems="center"
          width="67px"
          height="30px"
          bg="rgb(0,49,119)"
          borderRadius="5px"
        >
          <Tooltip
            label="ELECTROENERGETICS, ELECTROTECHNICS, ELECTROMECHANICS + CONTROL"
            hasArrow
          >
            <Text color="white" fontWeight="bold" fontSize="1.6rem">
              EEEC
            </Text>
          </Tooltip>
        </Box>
        <HStack
          alignItems="center"
          gap={{ lg: "5rem", md: "3rem", sm: "1rem" }}
          ml={{ lg: "10rem", md: "6rem", sm: "3rem" }}
        >
          <ChakraLink href="http://asoiu.edu.az/" width="fit-content">
            <Tooltip
              label=" Azerbaijan State Oil and Industry University"
              hasArrow
            >
              <Image
                src="/adnsu.png"
                borderRadius="10%"
                height={{ lg: "45px", md: "35px", sm: "35px" }}
              />
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
              />
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
              />
            </Tooltip>
          </ChakraLink>
        </HStack>

        <Box display="flex" flexDirection="row" gap="10px" alignItems="center">
          <Box>
            <Select onChange={(e) => langValueHandler(e)}>
              <option value="en">🇺🇸 English</option>
              <option value="az">🇦🇿 Azərbaycan</option>
            </Select>
          </Box>
          <Box
            width="40px"
            height="40px"
            bg="rgb(200,200,200)"
            fontSize="1.6rem"
            borderRadius="50%"
            cursor="pointer"
            pt="4px"
            pl="9px"
            ml={{ lg: "2rem", md: "1.4rem", sm: "0.5rem" }}
          >
            <GrUserAdmin />
          </Box>
        </Box>
      </HStack>

      <Box display="flex" flexDirection="row" gap="15px">
        {NAVS.map((nav) => {
          const isActive = checkIsActive(nav.to)
          return (
            <Link style={{ cursor: "pointer" }} key={nav.to} to={nav.to}>
              <VStack
                fontSize={{ lg: "1.2rem", md: "1rem", sm: "0.9rem" }}
                spacing="0"
                transition="0.2s ease-in"
                color={isActive ? "blue.400" : "rgb(0,59,90)"}
              >
                <Text
                  textUnderlineOffset={5}
                  transition="0.05s ease-in"
                  textDecoration={isActive ? "underline" : "unset"}
                >
                  {t(`nav.${nav.name}`)}
                </Text>
              </VStack>
            </Link>
          )
        })}
      </Box>
    </HStack>
  )
}
