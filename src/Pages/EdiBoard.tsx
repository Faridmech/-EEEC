import { Box, Text, Center, Image, Tooltip, Link } from "@chakra-ui/react"
import React from "react"
import { useTranslation } from "react-i18next"

export const EdBoard: React.FC = () => {
  const { t } = useTranslation("ns5")
  return (
    <Box>
      {/* <Center>
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
              borderRadius="15px"
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
              borderRadius="15px"
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
              borderRadius="15px"
            ></Image>{" "}
            <Center>
              <Text marginTop="10px">Azerbaijan Technical University</Text>
            </Center>
          </Box>
        </Box>
      </Center>{" "} */}
      <Center>
        <Box display="flex" flexDirection="column">
          <Box
            width="1200px"
            height="10px"
            bg="blue.300"
            borderRadius="4px"
            mt="2rem"
          ></Box>
          <Center>
            <Box display="flex" flexDirection="column" textAlign="center">
              <Text fontSize="30px" color="blue" fontWeight="bold">
                {t("title")}
              </Text>

              <Text fontSize="30px" color="blue" fontWeight="bold">
                {t("title1")}
              </Text>
              <Text fontSize="30px" color="red" fontWeight="bold">
                {t("title2")}
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
      <Center>
        <Box
          border="1px solid rgb(0,39,110)"
          marginTop="2rem"
          width="1200px"
          height="100px"
          boxShadow="5px 10px 6px rgb(0,39,110)"
          borderRadius="10px"
          cursor="pointer"
        >
          <Center>
            <Text fontSize="2rem" fontWeight="bold" textDecoration="none">
              {t("description.part2")}
            </Text>
          </Center>
          <Tooltip label={t("description.part45")}>
            <Link
              href="https://en.wikipedia.org/wiki/Nurali_Yusifbayli"
              textDecoration="none"
            >
              <Text
                fontSize="1.5rem"
                color="rgb(0,39,110)"
                fontWeight="bold"
                paddingLeft="4px"
                textDecoration="none"
              >
                {t("description.part1")}
              </Text>
            </Link>
          </Tooltip>
        </Box>
      </Center>
      <Center>
        {" "}
        <Box
          border="1px solid rgb(0,39,110)"
          marginTop="2rem"
          width="1200px"
          height="130px"
          boxShadow="5px 10px 6px #888888"
          borderRadius="10px"
          paddingLeft="4px"
        >
          <Text
            fontSize="2rem"
            fontWeight="bold"
            textDecoration="none"
            textAlign="center"
          >
            {t("description.part3")}
          </Text>
          <Text fontSize="1.4rem">{t("description.part4")}</Text>
          <Text
            border="2px solid black"
            width="380px"
            fontSize="1.4rem"
            fontWeight="bold"
          >
            {t("description.part5")}
          </Text>
        </Box>
      </Center>
      <Center>
        {" "}
        <Box
          border="1px solid rgb(0,39,110)"
          marginTop="2rem"
          width="1200px"
          height={{ lg: "360px", md: "520px", sm: "520px" }}
          boxShadow="5px 10px 6px #888888"
          borderRadius="10px"
          paddingLeft="4px"
          paddingRight="10px"
        >
          <Box width="1000px" marginLeft="5rem">
            <Text
              fontSize="2rem"
              fontWeight="bold"
              textDecoration="none"
              textAlign="center"
              marginBottom="2.8rem"
            >
              {t("description.part6")}
            </Text>
            <Box
              display="flex"
              flexDirection={{ lg: "row", md: "column", sm: "column" }}
              alignItems="center"
              justifyContent="space-between"
              marginBottom="10px"
            >
              <Text fontSize="1.4rem"> {t("description.part7")}</Text>
              <Text
                border="2px solid black"
                width="380px"
                fontSize="1.4rem"
                fontWeight="bold"
              >
                {t("description.part8")}
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection={{ lg: "row", md: "column", sm: "column" }}
              alignItems="center"
              justifyContent="space-between"
              marginBottom="10px"
            >
              <Text fontSize="1.4rem"> {t("description.part9")}</Text>
              <Text width={{ lg: "380px" }} fontSize="1.4rem">
                {t("description.part10")}
              </Text>
            </Box>

            <Box
              display="flex"
              flexDirection={{ lg: "row", md: "column", sm: "column" }}
              alignItems="center"
              justifyContent="space-between"
              marginBottom="10px"
            >
              <Text fontSize="1.4rem">{t("description.part11")}</Text>
              <Text fontSize="1.4rem" width={{ lg: "380px" }}>
                {t("description.part12")}
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection={{ lg: "row", md: "column", sm: "column" }}
              alignItems="center"
              justifyContent="space-between"
              marginBottom="10px"
            >
              <Text fontSize="1.4rem"> {t("description.part13")}</Text>
              <Text fontSize="1.4rem" width={{ lg: "380px" }}>
                {t("description.part14")}
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection={{ lg: "row", md: "column", sm: "column" }}
              alignItems="center"
              justifyContent="space-between"
              marginBottom="10px"
            >
              <Text fontSize="1.4rem"> {t("description.part15")}</Text>
              <Text fontSize="1.4rem" width={{ lg: "380px" }}>
                {t("description.part16")}
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection={{ lg: "row", md: "column", sm: "column" }}
              alignItems="center"
              justifyContent="space-between"
              marginBottom="10px"
            >
              <Text fontSize="1.4rem"> {t("description.part26")}</Text>
            </Box>
          </Box>
        </Box>
      </Center>
      <Center>
        {" "}
        <Box
          border="1px solid rgb(0,39,110)"
          marginTop="2rem"
          width="1200px"
          height={{ lg: "610px", md: "900px", sm: "900px" }}
          boxShadow="5px 10px 6px #888888"
          borderRadius="10px"
          paddingLeft="4px"
          paddingRight="10px"
        >
          <Box width="1000px" marginLeft="5rem">
            <Text
              fontSize="2rem"
              fontWeight="bold"
              textDecoration="none"
              textAlign="center"
              marginBottom="2.8rem"
            >
              {t("description.part17")}
            </Text>
            <Box
              display="flex"
              flexDirection={{ lg: "row", md: "column", sm: "column" }}
              alignItems="center"
              justifyContent="space-between"
              marginBottom="10px"
            >
              <Text fontSize="1.4rem">{t("description.part18")}</Text>
              <Text width={{ lg: "380px" }} fontSize="1.4rem">
                {t("description.part19")}
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection={{ lg: "row", md: "column", sm: "column" }}
              alignItems="center"
              justifyContent="space-between"
              marginBottom="10px"
            >
              <Text fontSize="1.4rem">{t("description.part20")}</Text>
              <Text width={{ lg: "380px" }} fontSize="1.4rem">
                {t("description.part21")}
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection={{ lg: "row", md: "column", sm: "column" }}
              alignItems="center"
              justifyContent="space-between"
              marginBottom="10px"
            >
              <Text fontSize="1.4rem">{t("description.part22")}</Text>
              <Text width={{ lg: "380px" }} fontSize="1.4rem">
                {t("description.part23")}
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection={{ lg: "row", md: "column", sm: "column" }}
              alignItems="center"
              justifyContent="space-between"
              marginBottom="10px"
            >
              <Text fontSize="1.4rem">{t("description.part24")}</Text>
              <Text width={{ lg: "380px" }} fontSize="1.4rem">
                {t("description.part25")}
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection={{ lg: "row", md: "column", sm: "column" }}
              alignItems="center"
              justifyContent="space-between"
              marginBottom="10px"
            >
              <Text fontSize="1.4rem">{t("description.part26")}</Text>
              <Text width={{ lg: "380px" }} fontSize="1.4rem">
                {t("description.part27")}
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection={{ lg: "row", md: "column", sm: "column" }}
              alignItems="center"
              justifyContent="space-between"
              marginBottom="10px"
            >
              <Text fontSize="1.4rem">{t("description.part28")}</Text>
              <Text width={{ lg: "380px" }} fontSize="1.4rem">
                {t("description.part29")}
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection={{ lg: "row", md: "column", sm: "column" }}
              alignItems="center"
              justifyContent="space-between"
              marginBottom="10px"
            >
              <Text fontSize="1.4rem">{t("description.part30")}</Text>
              <Text width={{ lg: "380px" }} fontSize="1.4rem">
                {t("description.part31")}
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection={{ lg: "row", md: "column", sm: "column" }}
              alignItems="center"
              justifyContent="space-between"
              marginBottom="10px"
            >
              <Text fontSize="1.4rem">{t("description.part32")}</Text>
              <Text width={{ lg: "380px" }} fontSize="1.4rem">
                {t("description.part33")}
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection={{ lg: "row", md: "column", sm: "column" }}
              alignItems="center"
              justifyContent="space-between"
              marginBottom="10px"
            >
              <Text fontSize="1.4rem">{t("description.part34")}</Text>
              <Text width={{ lg: "380px" }} fontSize="1.4rem">
                {t("description.part35")}
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection={{ lg: "row", md: "column", sm: "column" }}
              alignItems="center"
              justifyContent="space-between"
              marginBottom="10px"
            >
              <Text fontSize="1.4rem">{t("description.part36")}</Text>
              <Text width={{ lg: "380px" }} fontSize="1.4rem">
                {t("description.part37")}
              </Text>
            </Box>

            <Box
              display="flex"
              flexDirection={{ lg: "row", md: "column", sm: "column" }}
              alignItems="center"
              justifyContent="space-between"
              marginBottom="10px"
            >
              <Text fontSize="1.4rem">{t("description.part38")}</Text>
              <Text width={{ lg: "380px" }} fontSize="1.4rem">
                {t("description.part47")}
              </Text>
            </Box>

            <Box
              display="flex"
              flexDirection={{ lg: "row", md: "column", sm: "column" }}
              alignItems="center"
              justifyContent="space-between"
              marginBottom="10px"
            >
              <Text fontSize="1.4rem">{t("description.part48")}</Text>
            </Box>
          </Box>
        </Box>
      </Center>
      <Center>
        <Box
          border="1px solid rgb(0,39,110)"
          marginTop="2rem"
          width="1200px"
          height={{ lg: "170px", md: "240px", sm: "240px" }}
          boxShadow="5px 10px 6px #888888"
          borderRadius="10px"
          display="flex"
          flexDirection={{ lg: "row", md: "column", sm: "column" }}
          alignItems="center"
        >
          <Box
            width={{ lg: "600px", md: "", sm: "" }}
            marginLeft="5rem"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            marginBottom="7px"
          >
            <Text fontSize="2rem" fontWeight="bold">
              {t("description.part39")}
            </Text>

            <Text fontSize="1.4rem">{t("description.part40")}</Text>
            <Text fontSize="1.4rem">{t("description.part41")}</Text>
          </Box>

          <Box
            width={{ lg: "600px", md: "", sm: "" }}
            marginLeft={{ lg: "7rem", md: "5rem", sm: "5rem" }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            marginBottom="7px"
          >
            <Text fontSize="2rem" fontWeight="bold">
              {t("description.part42")}
            </Text>
            <Text fontSize="1.4rem">{t("description.part44")}</Text>
            <Text fontSize="1.4rem">{t("description.part43")}</Text>
          </Box>
        </Box>
      </Center>
      <Box height="40px"></Box>
    </Box>
  )
}
