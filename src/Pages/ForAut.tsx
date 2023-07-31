import { Text, Center, Box } from "@chakra-ui/react";
import React from "react";

export const ForAuthor: React.FC = () => {
  return (
    <Box>
      <Center>
        <Text fontWeight="bold" fontSize="1.8rem" marginTop="2rem">
          MANUSCRIPT REQUIREMENTS
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
            A first page of a manuscript must include UDC index (align left),
            given name, middle name and family name of an author, co-authors, a
            title. The manuscript must contain an abstract up to 400-600
            characters including spaces and 5-6 keywords.
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
            The title of the article, the abstract and the names of the authors
            must be done in Russian and English and presented in the beginning
            of the manuscript.
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
            The manuscript must be structured. A standard structure is
            recommended: introduction, research objectives (including problem
            statement), results (main part), discussion, conclusion.
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
            The text of the manuscript should be provided in printed form and on
            electronic media. The text must be formatted accordingly: Times New
            Roman, 12 pt, 1.15 spacing, all margins 2 cm. Pages must be numbered
            from the bottom right. The volume of the manuscript should not
            exceed 10-15 A4 pages including figures, table and references or no
            more than 40 000 characters including spaces. The recommended number
            of figures is 2-3.
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
            Tables are in the body of the manuscript, formatted with 1.15
            interval, 11 pt.
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
            The numbering of the formulas must be continuous throughout the
            article and indicated in brackets in ascending order (by numbers 1,
            2, etc.) on the right side.
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
            Illustrations must be provided in the text of the manuscript in
            electronic form. In the figures unnecessary parts and inscriptions
            should be avoided, where all the inscriptions should be replaced by
            numbers or letters. All the figures must be referenced and explained
            in the captions or in the text. The lines in the figures should be
            clear (5-6 pix), the width of the figures should not exceed 140 mm,
            height 200 mm. The font of letters and numbers in the figures must
            be Times New Roman (9-10 pt). The figures should be black and white,
            with different types of hatching (to allow further reduction of the
            figures).
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
            Figure captions are provided in the text of the manuscript,
            formatted 1.15 interval, 12 pt.
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
            The list of necessary references must be in the end of the
            manuscript with a continuous numbering in Arabic numerals. When
            using materials from other sources correct referencing to these
            sources is required. In the text of the manuscript references must
            be given in square brackets [1]. The bibliographic description in
            the reference list is given in the following order: Monography
            (book): surname, initials of the author (s), full name of the
            monograph, place of publication, publisher, year of publication; For
            periodicals – surname, initials of the author (s), title of the
            article, title of the journal, year of publication, volume, number,
            pages. Bibliographic description in Russian must also be presented
            in Latin transliteration.
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
            After the list of references, information about the author (s) must
            be given: position, academic degree, title, e-mail or contact phone
            number.
          </Text>
        </Box>
      </Center>
      <Box height="50px"></Box>
    </Box>
  );
};
