import { Text, Center, Box } from "@chakra-ui/react"
import React from "react"
import { useTranslation } from "react-i18next"
export const ForAuthor: React.FC = () => {
  const { t } = useTranslation("ns3")
  return (
    <Box>
      <Center>
        <Text fontWeight="bold" fontSize="1.8rem" marginTop="2rem">
          {t("title")}
        </Text>
      </Center>

      <Center>
        <Box
          display="flex"
          flexDirection={{ lg: "row", md: "column", base: "column" }}
          gap="2rem"
          marginTop="3rem"
          width="1300px"
        >
          <Text
            flex="1"
            boxShadow=" 5px 10px 12px rgb(0,39,110)"
            padding="7px"
            textAlign="justify"
            alignSelf="center"
            border="2px solid rgb(0,39,110) "
          >
            {t("description.part1")}
          </Text>

          <Text
            flex="1"
            boxShadow=" 5px 10px 12px rgb(0,39,110)"
            padding="7px"
            textAlign="justify"
            alignContent="center"
            alignSelf="center"
            border="2px solid rgb(0,39,110) "
          >
            {t("description.part2")}
          </Text>
        </Box>
      </Center>

      <Center>
        <Box
          display="flex"
          flexDirection={{ lg: "row", md: "column", base: "column" }}
          gap="2rem"
          marginTop="3rem"
          width="1300px"
        >
          <Text
            flex="1"
            boxShadow=" 5px 10px 12px rgb(0,39,110)"
            padding="7px"
            textAlign="justify"
            alignSelf="center"
            border="2px solid rgb(0,39,110) "
          >
            {t("description.part3")}
          </Text>

          <Text
            flex="1"
            boxShadow=" 5px 10px 12px rgb(0,39,110)"
            padding="7px"
            textAlign="justify"
            alignContent="center"
            alignSelf="center"
            border="2px solid rgb(0,39,110) "
          >
            {t("description.part4")}
          </Text>
        </Box>
      </Center>

      <Center>
        <Box
          display="flex"
          flexDirection={{ lg: "row", md: "column", base: "column" }}
          gap="2rem"
          marginTop="3rem"
          width="1300px"
        >
          <Text
            flex="1"
            boxShadow=" 5px 10px 12px rgb(0,39,110)"
            padding="7px"
            textAlign="justify"
            alignSelf="center"
            border="2px solid rgb(0,39,110) "
          >
            {t("description.part5")}
          </Text>

          <Text
            flex="1"
            boxShadow=" 5px 10px 12px rgb(0,39,110)"
            padding="7px"
            textAlign="justify"
            alignContent="center"
            alignSelf="center"
            border="2px solid rgb(0,39,110) "
          >
            {t("description.part6")}
          </Text>
        </Box>
      </Center>

      <Center>
        <Box
          display="flex"
          flexDirection={{ lg: "row", md: "column", base: "column" }}
          gap="2rem"
          marginTop="3rem"
          width="1300px"
        >
          <Text
            flex="1"
            boxShadow=" 5px 10px 12px rgb(0,39,110)"
            padding="7px"
            textAlign="justify"
            alignSelf="center"
            border="2px solid rgb(0,39,110) "
          >
            {t("description.part7")}
          </Text>

          <Text
            flex="1"
            boxShadow=" 5px 10px 12px rgb(0,39,110)"
            padding="7px"
            textAlign="justify"
            alignContent="center"
            alignSelf="center"
            border="2px solid rgb(0,39,110) "
          >
            {t("description.part8")}
          </Text>
        </Box>
      </Center>

      <Center>
        <Box
          display="flex"
          flexDirection={{ lg: "row", md: "column", base: "column" }}
          gap="2rem"
          marginTop="3rem"
          width="1300px"
        >
          <Text
            flex="1"
            boxShadow=" 5px 10px 12px rgb(0,39,110)"
            padding="7px"
            textAlign="justify"
            alignSelf="center"
            border="2px solid rgb(0,39,110) "
          >
            {t("description.part9")}
          </Text>

          <Text
            flex="1"
            boxShadow=" 5px 10px 12px rgb(0,39,110)"
            padding="7px"
            textAlign="justify"
            alignContent="center"
            alignSelf="center"
            border="2px solid rgb(0,39,110) "
          >
            {t("description.part10")}
          </Text>
        </Box>
      </Center>
      <Box height="50px"></Box>
    </Box>
  )
}
