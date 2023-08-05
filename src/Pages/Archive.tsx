import { Box, Heading, Image, Text, Center } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import React from "react"
import dataF from "./data.json"

interface dataF {
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
  return (
    <>
      {dataF.map((item) => {
        return (
          <Box display="flex" flexDirection="row">
            <Box>
              <Image src={item.url} width="400px" height="500px"></Image>
            </Box>
            <Box width="900px">
              <Text>{item.title}</Text>
              <Text>
                {item.Contens.map((i) => {
                  return (
                    <Box border="1px solid black">
                      <Text>
                        {i.author} Page- {i.page}
                      </Text>
                      <Text>{i.name}</Text>
                    </Box>
                  )
                })}
              </Text>
            </Box>
          </Box>
        )
      })}
    </>
  )
}
