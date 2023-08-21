import { Box, Center, Image, Link, Text } from "@chakra-ui/react"
import React from "react"
import { useTranslation } from "react-i18next"
export const Home: React.FC = () => {
  const { t } = useTranslation("ns2")
  return (
    <Box>
      <Center>
        <Box width="1200px" marginTop="5rem" display={{ md: "flex" }}>
          <Box flexShrink={0}>
            <Image
              width={{ md: 400 }}
              src="/NY.jpeg"
              boxShadow=" 5px 10px 12px #888888"
              borderRadius="8px"
            ></Image>
            <Link href="https://www.aztu.edu.az/az/page/prorektorlar-107">
              <Text
                marginTop="2rem"
                textAlign="justify"
                fontWeight="bold"
                bg="rgb(210,210,210)"
                width="150px"
                cursor="pointer"
                borderRadius="5px"
                boxShadow="  5px 1px 60px #888888"
              >
                {t("title")}
              </Text>
            </Link>

            <Text fontWeight="bold" marginTop="0.4rem">
              {t("description.part1")}
            </Text>
            <Text fontWeight="bold">{t("description.part2")}</Text>
            <Text marginTop="0.8rem" fontWeight="bold">
              {t("description.part3")}
            </Text>
            <Text fontWeight="bold">{t("description.part4")}</Text>
            <Text fontWeight="bold">{t("description.part5")}</Text>
          </Box>
          <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
            <Text color={{ md: "red" }}>{t("description.part6")} </Text>
            <Text marginTop="0.8rem" textAlign="justify">
              {t("description.part7")}
            </Text>
            <Text marginTop="0.8rem" textAlign="justify">
              {t("description.part8")}
            </Text>
            <Text marginTop="0.8rem" textAlign="justify">
              {t("description.part9")}
            </Text>
            <Text marginTop="0.8rem" textAlign="justify">
              {t("description.part10")}
            </Text>
            <Text marginTop="0.8rem" textAlign="justify">
              {t("description.part11")}
            </Text>
          </Box>
        </Box>
      </Center>
      <Box height="50px"></Box>
    </Box>
  )
}
