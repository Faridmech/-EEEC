import { Box, Button, Center, Input, Text, VStack } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"

export const Contact: React.FC = () => {
  const [selectedDocs, setSelectedDocs] = useState<File[]>([])
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

  console.log("files", files)

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
              <Input placeholder={t("description.part1")} />
              <Input placeholder={t("description.part2")} />
              <Input placeholder={t("description.part3")} />
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
