import { Box, Button, Center, Input, Text } from "@chakra-ui/react"
import { useState } from "react"

export const Contact: React.FC = () => {
  const [selectedDocs, setSelectedDocs] = useState<File[]>([])
  return (
    <Box>
      <Text
        textAlign="center"
        fontSize="2rem"
        marginTop="2rem"
        color="rgb(0,39,110)"
      >
        Greeting!!! Here you can contact us and upload your recent paper{" "}
      </Text>
      <Center>
        <Box
          bg="rgb(178,193,209)"
          marginTop="6rem"
          height="500px"
          width={{ lg: "1000px", md: "600px", sm: "400px" }}
          border="1px solid rgb(0,39,110)"
          borderRadius="30px"
          boxShadow="5px 10px 6px rgb(0,39,110)"
          display="flex"
          flexDirection="row"
        >
          <Box display="flex" flexDirection="column">
            {" "}
            <Input
              width={{ lg: "680px", md: "590px", sm: "390px" }}
              marginTop="50px"
              placeholder="Name &  Coauthor's name"
              marginLeft="5px"
              border="2px solid rgb(25,71,117)"
              height="50px"
              _hover={{ borderColor: "white" }}
            />
            <Input
              width={{ lg: "680px", md: "590px", sm: "390px" }}
              marginTop="50px"
              placeholder="Article's name"
              marginLeft="5px"
              border="2px solid rgb(25,71,117)"
              height="50px"
              _hover={{ borderColor: "white" }}
            />
            <Input
              width={{ lg: "680px", md: "590px", sm: "390px" }}
              marginTop="50px"
              placeholder="E-mail adress"
              marginLeft="5px"
              border="2px solid rgb(25,71,117)"
              height="50px"
              _hover={{ borderColor: "white" }}
            />
            <Input
              type="file"
              accept=".pdf"
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
          </Box>
        </Box>
        <Box
          position="absolute"
          marginTop={{ lg: "200px", md: "1200px", sm: "1200px" }}
          marginLeft={{ lg: "750px", md: "10px", sm: "10px" }}
          height="500px"
          width="350px"
          border="1px solid rgb(0,39,110)"
          borderRadius="30px"
          boxShadow="5px 10px 6px rgb(0,39,110)"
          bg="rgb(209,210,209)"
        >
          <Text marginTop="3rem" padding="7px" fontSize="1.2rem">
            {" "}
            After uploading your articles to the system and pressing the submit
            button below, our journal staff will add your article to the next
            edition of the journal (we ask you to pay attention to the order of
            preparation of articles).{" "}
          </Text>
          <Button
            bg="rgb(25,71,117)"
            width="300px"
            marginTop="9rem"
            marginLeft="25px"
            color="white"
            _hover={{ backgroundColor: "white", color: "rgb(25,71,117)" }}
          >
            Submit{" "}
          </Button>
        </Box>
      </Center>
    </Box>
  )
}
