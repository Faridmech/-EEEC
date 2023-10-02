import { Box, Button, Center, Input, Text, VStack } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import axios from "axios"
import React from "react"

export const Contact: React.FC = () => {
  const [recepient_email, setRecepientEmail] = useState("")
  const [name, setName] = useState("")
  const [articleName, setArticleName] = useState("")

  // function sendMail() {
  //   if (recepient_email && name && articleName) {
  //     axios
  //       .post("http://localhost:3003/eeec.az", {
  //         recepient_email,
  //         name,
  //         articleName,
  //       })
  //       .then(() => alert("Succesful"))
  //       .catch(() => alert("not right"))
  //     return
  //   }
  //   return alert("Fill all the gap")
  // }

  const [files, setFile] = useState<FileList | null>()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const onClickFileUploadHandler = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleButton = () => {
    onClickFileUploadHandler()
  }

  const { t } = useTranslation("ns1")
  return (
    <Box h="100%">
      <Text textAlign="center" fontSize="2rem" color="rgb(0,39,110)" mt="2rem">
        {t("title")}
      </Text>
      <Center>
        <Box
          bg="blackAlpha.50"
          marginTop="6rem"
          border="1px solid"
          borderColor="gray.300"
          borderRadius="8px"
          display="flex"
          flexDirection="row"
          p="40px"
          w="50%"
          h="70%"
        >
          <Center w="100%" h="100%">
            <VStack spacing="30px" w="100%" align="start">
              <Input
                placeholder={t("description.part1")}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                placeholder={t("description.part2")}
                onChange={(e) => setArticleName(e.target.value)}
              />
              <Input
                placeholder={t("description.part3")}
                onChange={(e) => setRecepientEmail(e.target.value)}
              />
              <Input
                ref={fileInputRef as any}
                type="file"
                accept=".pdf"
                display="none"
                multiple
                onChange={(e) => {
                  setFile(e.target.files)
                }}
              />
              <Box
                display="flex"
                flexDirection="row"
                gap="10px"
                alignItems="center"
              >
                <Button
                  variant="outline"
                  fontSize="14px"
                  onClick={handleButton}
                >
                  {t("description.part4")}
                </Button>
                <Text>{!files?.length && t("description.part6")}</Text>
                <Text>{files?.length && files[0].name}</Text>
              </Box>

              <Button type="submit" variant="outline" fontSize="14px">
                {t("description.part5")}
              </Button>
            </VStack>
          </Center>
        </Box>
      </Center>
    </Box>
  )
}
