import { Box, Button, Center, Input, Text, VStack } from "@chakra-ui/react"
import { ElementType, useRef, useState } from "react"

export const Contact: React.FC = () => {
  const [selectedDocs, setSelectedDocs] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  console.log("selected", selectedDocs)

  const onClickFileUploadHandler = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
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
                onChange={(el) =>
                  el.target.files?.length &&
                  setSelectedDocs(Array.from(el.target.files))
                }
                width={{ lg: "500px", md: "400px", sm: "360px" }}
                height="50px"
                bg="rgb(25,71,117)"
                marginTop="50px"
                marginLeft={{ lg: "100px", md: "80px", sm: "20px" }}
                variant="ghost"
                color="white"
                _hover={{ backgroundColor: "white", color: "rgb(25,71,117)" }}
              />
              <Button
                variant="outline"
                fontSize="14px"
                onClick={onClickFileUploadHandler}
              >
                Select files
              </Button>
            </VStack>
          </Center>
        </Box>
      </Center>
    </Box>
  )
}
