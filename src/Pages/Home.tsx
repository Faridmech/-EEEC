import { Box, Center, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
export const Home: React.FC = () => {
  return (
    <Box>
      <Center>
        <Box
          marginTop="3rem"
          display="flex"
          justifyContent={{ md: "space-between", base: "center" }}
          width="800px"
          height="120px"
        >
          <Image src="/adnsu.png" boxShadow=" 5px 10px 12px #888888"></Image>
          <Image src="/Area.png" boxShadow=" 5px 10px 12px #888888"></Image>
          <Image
            src="/aztu.png"
            bg="rgb(19,29,100)"
            width="240px"
            boxShadow=" 5px 10px 12px #888888"
          ></Image>{" "}
        </Box>
      </Center>

      <Center>
        <Box width="1200px" marginTop="5rem" display={{ md: "flex" }}>
          <Box flexShrink={0}>
            <Image
              width={{ md: 400 }}
              src="/NY.jpeg"
              boxShadow=" 5px 10px 12px #888888"
            ></Image>
          </Box>
          <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
            <Text color={{ md: "red" }}>Dear Colleagues, </Text>
            <Text marginTop="0.8rem" textAlign="justify">
              In the last years our country has turned to the leader state of
              the region and one of the main energy safety guarantors of the
              Europe in the result of perfect strategy implemented by the
              initiative and administration of the honorable President Ilham
              Aliyev.
            </Text>
            <Text marginTop="0.8rem" textAlign="justify">
              We are very glad to represent the issue of a journal named
              “ELECTROENERGETICS, ELECTROTECHNICS, ELECTROMECHANICS + CONTROL”
              that initiated and founded by the Azerbaijan State Oil and
              Industrial University, Azerbaijan Scientific-Research & Design
              Prospecting Power Engineering Institute and The State Agency of
              Alternative and Renewable Energy Sources. Also this journal
              devoted to the sustainable development of energy sector which is
              considered one of the leading areas of the country’s economy.
            </Text>
            <Text marginTop="0.8rem" textAlign="justify">
              The journal is initially planned to be published twice in a year
              and the solution of important problems on power engineering will
              be reflected in it. The main purpose of journal is the publication
              of high-level articles dedicated to electric power systems, power
              stations, substations and their main equipments, electrotechnical
              complexes, automation and management means, the development of
              renewable energy sources and their activity. In the electricity
              development conditions the working out of the economic principles
              and methods of the energy security, energy efficiency issues are
              being intensively developed all over the world. At the same time
              application of modern innovative technologies, estimation of the
              renewable energy sources role, development of the economic aspects
              of the energy systems, assessment of the energy systems in the
              field of interstate cooperation condition and its legal base are
              important issues awaiting their solution. The topics will also
              cover systems analysis, management and information software,
              automation and technological processes management and their
              modeling, as well as electrical and heating appliances, electrical
              machinery and apparatus, electric drivers, high-voltage equipment,
              electrotechnical materials, development of the bases of economic
              sector electricity supply. Original research results, the modern
              applying state and conditions of the science-research means in
              this or other areas will be delivered to the attention of local
              and international experts.
            </Text>
            <Text marginTop="0.8rem" textAlign="justify">
              Information about materials of the symposiums, conferences and
              seminars held in the area of power engineering inside republic and
              internationally, as well as monographs, discussions, opinions will
              also be printed in the journal.
            </Text>
            <Text marginTop="0.8rem" textAlign="justify">
              Congratulations to everybody who contributed to the publishing of
              the journal. We wish successes to editorial staff in their future
              work. We would like to invite the potential authors of the
              international world to print their scientific articles in the
              journal of “ELECTROENERGETICS, ELECTROTECHNICS, ELECTROMECHANICS +
              CONTROL”.
            </Text>
            <Text marginTop="0.8rem" textAlign="justify" fontWeight="bold">
              Nurali A. Yusifbayli
            </Text>
            <Text fontWeight="bold">
              Vice-rector of Azerbaijan Technical University
            </Text>
            <Text fontWeight="bold">
              Doctor of technical science, professor
            </Text>
            <Text marginTop="0.8rem" fontWeight="bold">
              25 Hussein Javid avanue
            </Text>
            <Text fontWeight="bold">Baku, Azerbaijan</Text>
            <Text fontWeight="bold">Phone: (+99412) 538 94 76</Text>
          </Box>
        </Box>
      </Center>
      <Box height="50px"></Box>
    </Box>
  );
};
