import { Box, Text, Center, Image, Tooltip, Link } from "@chakra-ui/react"
import React from "react"

export const EdBoard: React.FC = () => {
  return (
    <Box>
      <Center>
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
      </Center>{" "}
      <Center>
        <Box display="flex" flexDirection="column">
          <Box
            width="1200px"
            height="10px"
            bg="blue.300"
            borderRadius="4px"
          ></Box>
          <Center>
            <Box display="flex" flexDirection="column" textAlign="center">
              <Text fontSize="30px" color="blue" fontWeight="bold">
                ELECTROENERGETICS, ELECTROTECHNICS
              </Text>

              <Text fontSize="30px" color="blue" fontWeight="bold">
                ELECTROMECHANICS + CONTROL
              </Text>
              <Text fontSize="30px" color="red" fontWeight="bold">
                Scientific – Industrial Journal
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
              Editor in-Chief
            </Text>
          </Center>
          <Tooltip label="Doctor of Thecnical Science, Professor , Click for  a wide information">
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
                Nurali Yusifbayli (Baku, Azerbaijan)
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
            Deputy Editors in-Chief
          </Text>
          <Text fontSize="1.4rem">Valiyev Vilayat (Baku, Azerbaijan)</Text>
          <Text
            border="2px solid black"
            width="360px"
            fontSize="1.4rem"
            fontWeight="bold"
          >
            Huseynov Asaf (Baku, Azerbaijan)
          </Text>
        </Box>
      </Center>
      <Center>
        {" "}
        <Box
          border="1px solid rgb(0,39,110)"
          marginTop="2rem"
          width="1200px"
          height={{ lg: "310px", md: "520px", sm: "520px" }}
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
              International Advisory Board
            </Text>
            <Box
              display="flex"
              flexDirection={{ lg: "row", md: "column", sm: "column" }}
              alignItems="center"
              justifyContent="space-between"
              marginBottom="10px"
            >
              <Text fontSize="1.4rem">Babanli Mustafa (Baku, Azerbaijan)</Text>
              <Text
                border="2px solid black"
                width="380px"
                fontSize="1.4rem"
                fontWeight="bold"
              >
                Arif Mehtiyev (Baku, Azerbaijan)
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection={{ lg: "row", md: "column", sm: "column" }}
              alignItems="center"
              justifyContent="space-between"
              marginBottom="10px"
            >
              <Text fontSize="1.4rem">Hashimov Arif (Baku, Azerbaijan)</Text>
              <Text width={{ lg: "380px" }} fontSize="1.4rem">
                Aliguliyev Rasim (Baku, Azerbaijan)
              </Text>
            </Box>

            <Box
              display="flex"
              flexDirection={{ lg: "row", md: "column", sm: "column" }}
              alignItems="center"
              justifyContent="space-between"
              marginBottom="10px"
            >
              <Text fontSize="1.4rem">Aliyev Telman (Baku, Azerbaijan)</Text>
              <Text fontSize="1.4rem" width={{ lg: "380px" }}>
                Chetin Elmas (Turkey)
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection={{ lg: "row", md: "column", sm: "column" }}
              alignItems="center"
              justifyContent="space-between"
              marginBottom="10px"
            >
              <Text fontSize="1.4rem">Kumbaroglu Gurkan (USA)</Text>
              <Text fontSize="1.4rem" width={{ lg: "380px" }}>
                Ayuyev Boris (Russia)
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection={{ lg: "row", md: "column", sm: "column" }}
              alignItems="center"
              justifyContent="space-between"
              marginBottom="10px"
            >
              <Text fontSize="1.4rem">Voropay Nikolay (Russia)</Text>
              <Text fontSize="1.4rem" width={{ lg: "380px" }}>
                Ozdemir Aydogan (Istanbul,Turkey)
              </Text>
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
          height={{ lg: "570px", md: "900px", sm: "900px" }}
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
              Editorial Board
            </Text>
            <Box
              display="flex"
              flexDirection={{ lg: "row", md: "column", sm: "column" }}
              alignItems="center"
              justifyContent="space-between"
              marginBottom="10px"
            >
              <Text fontSize="1.4rem">Aliyev Aydin (Baku, Azerbaijan)</Text>
              <Text width={{ lg: "380px" }} fontSize="1.4rem">
                Guliyev Huseyngulu (Baku,Azerbaijan)
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection={{ lg: "row", md: "column", sm: "column" }}
              alignItems="center"
              justifyContent="space-between"
              marginBottom="10px"
            >
              <Text fontSize="1.4rem">Ahmadov Elbrus (Baku, Azerbaijan)</Text>
              <Text width={{ lg: "380px" }} fontSize="1.4rem">
                Hasanov Zakir (Baku, Azerbaijan)
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection={{ lg: "row", md: "column", sm: "column" }}
              alignItems="center"
              justifyContent="space-between"
              marginBottom="10px"
            >
              <Text fontSize="1.4rem">Abdullayev Kamal (Baku, Azerbaijan)</Text>
              <Text width={{ lg: "380px" }} fontSize="1.4rem">
                Lazimov Tahir (Baku, Azerbaijan)
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection={{ lg: "row", md: "column", sm: "column" }}
              alignItems="center"
              justifyContent="space-between"
              marginBottom="10px"
            >
              <Text fontSize="1.4rem">
                Agamaliyev Mukhtar (Baku, Azerbaijan)
              </Text>
              <Text width={{ lg: "380px" }} fontSize="1.4rem">
                Musayev Musavar (Baku, Azerbaijan)
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection={{ lg: "row", md: "column", sm: "column" }}
              alignItems="center"
              justifyContent="space-between"
              marginBottom="10px"
            >
              <Text fontSize="1.4rem">Aliyev Fikret (Baku, Azerbaijan)</Text>
              <Text width={{ lg: "380px" }} fontSize="1.4rem">
                Nasibov Valeh (Baku, Azerbaijan)
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection={{ lg: "row", md: "column", sm: "column" }}
              alignItems="center"
              justifyContent="space-between"
              marginBottom="10px"
            >
              <Text fontSize="1.4rem">Abullayev Yashar (Baku, Azerbaijan)</Text>
              <Text width={{ lg: "380px" }} fontSize="1.4rem">
                Nurubayli Zulfugar (Baku, Azerbaijan)
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection={{ lg: "row", md: "column", sm: "column" }}
              alignItems="center"
              justifyContent="space-between"
              marginBottom="10px"
            >
              <Text fontSize="1.4rem">
                Dimirovski Georgi (Skopje, Macedonia)
              </Text>
              <Text width={{ lg: "380px" }} fontSize="1.4rem">
                Rajabli Kamran (USA)
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection={{ lg: "row", md: "column", sm: "column" }}
              alignItems="center"
              justifyContent="space-between"
              marginBottom="10px"
            >
              <Text fontSize="1.4rem">Izykowski Jan (Poland)</Text>
              <Text width={{ lg: "380px" }} fontSize="1.4rem">
                Rahmanov Nariman (Baku, Azerbaijan)
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection={{ lg: "row", md: "column", sm: "column" }}
              alignItems="center"
              justifyContent="space-between"
              marginBottom="10px"
            >
              <Text fontSize="1.4rem">Ilyushin Pavel (Russia)</Text>
              <Text width={{ lg: "380px" }} fontSize="1.4rem">
                Tabatabaei Naser (Iran)
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection={{ lg: "row", md: "column", sm: "column" }}
              alignItems="center"
              justifyContent="space-between"
              marginBottom="10px"
            >
              <Text fontSize="1.4rem">
                Farhadzadeh Elmar (Baku, Azerbaijan)
              </Text>
              <Text width={{ lg: "380px" }} fontSize="1.4rem">
                Yerokhin Pyotr (Russia)
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection={{ lg: "row", md: "column", sm: "column" }}
              alignItems="center"
              justifyContent="space-between"
              marginBottom="10px"
            >
              <Text fontSize="1.4rem">Guliyev Askar (Baku, Azerbaijan)</Text>
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
              Executive Editors
            </Text>

            <Text fontSize="1.4rem">Yusifbayli Fidan (Baku Azerbaijan)</Text>
            <Text fontSize="1.4rem">Marufov Ilkin (Baku, Azerbaijan)</Text>
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
              Editorial Assistants
            </Text>
            <Text fontSize="1.4rem">Huseynli Farid (Baku, Azerbaijan)</Text>
            <Text fontSize="1.4rem">Marufov Ilkin (Baku, Azerbaijan)</Text>
          </Box>
        </Box>
      </Center>
      <Box height="40px"></Box>
    </Box>
  )
}
