import { Box, Heading, Image, Text, Center, Input } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import React from "react"
import dataF from "./data.json"

interface iProps {
  title: string
  url: string
  content: [
    {
      author: string
      name: string
      page: number
    }
  ]
}

export const Archive: React.FC = () => {
  const [searchText, setSearchText] = useState("")
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)
  }

  const [filteredData, setFilteredData] = useState(dataF)

  useEffect(() => {
    // Filter the data based on the search text
    const filteredItems = dataF.filter((item) =>
      item.Contens.some(
        (i) =>
          i.author.toLowerCase().includes(searchText.toLowerCase()) ||
          i.name.toLowerCase().includes(searchText.toLowerCase())
      )
    )
    setFilteredData(filteredItems)
  }, [searchText])

  return (
    <>
      <Center marginTop="2rem">
        <Input
          type="text"
          placeholder="Search author name || article name"
          mt="1rem"
          mb="1.5rem"
          value={searchText}
          onChange={handleSearch}
          width="700px"
          borderRadius="17px"
          borderColor="black"
          border="2px solid"
        />
      </Center>

      {filteredData.map((item) => {
        return (
          <Center>
            <Box display="flex" flexDirection="row" mt="1.4rem">
              <Box>
                <Image src={item.url} width="400px" height="500px"></Image>
              </Box>
              <Box marginLeft="2rem" width="800px">
                <Text
                  textAlign="center"
                  mt="1.5rem"
                  mb="1.5rem"
                  fontWeight="bold"
                  fontSize="1.3rem"
                >
                  {item.title}
                </Text>
                <Text>
                  {item.Contens.map((i, index) => {
                    return (
                      <Box>
                        <Text fontWeight="bold" color="blue.900">
                          {" "}
                          {index + 1 + "- "}
                          {i.author}
                        </Text>
                        <Text
                          marginLeft="23px"
                          fontFamily="Inconsolata, monospace"
                          color="blue.400"
                        >
                          {i.name} (Page- {i.page})
                        </Text>
                      </Box>
                    )
                  })}
                </Text>
              </Box>
            </Box>
          </Center>
        )
      })}
    </>
  )
}
