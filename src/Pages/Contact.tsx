import { Box, Button, Center, Input, Text, VStack } from "@chakra-ui/react"
import { ElementType, useRef, useState } from "react"

export const Contact: React.FC = () => {
  const [selectedDocs, setSelectedDocs] = useState<File[]>([])
  const [fileName, setFileName] = useState<string[]>(["No choosen file"])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const onClickFileNamesetter = () => {
    const selectedFileNames = selectedDocs.map((item) => item.name)
    setFileName(selectedFileNames)
  }

  const onClickFileUploadHandler = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const functions = [onClickFileUploadHandler, onClickFileNamesetter]

  const handleButton = () => {
    functions.forEach((func) => func())
  }

  return (
    <Box h="100%">
      <Text textAlign="center" fontSize="2rem" color="rgb(0,39,110)" mt="2rem">
        Greeting!!! Here you can contact us and upload your recent paper{" "}
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
              <Input placeholder="Name &  Coauthor's name" />
              <Input placeholder="Article's name" />
              <Input placeholder="E-mail adress" />
              <Input
                ref={fileInputRef as any}
                type="file"
                accept=".pdf"
                display="none"
                multiple
                onChange={(el) => {
                  el.target.files?.length &&
                    setSelectedDocs(Array.from(el.target.files))
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
                  Select files
                </Button>
                <Text>{fileName}</Text>
              </Box>

              <Button type="submit" variant="outline" fontSize="14px">
                {" "}
                Submit
              </Button>
            </VStack>
          </Center>
        </Box>
      </Center>
    </Box>
  )
}
