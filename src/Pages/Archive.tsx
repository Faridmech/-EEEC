import { Box, Image, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import React from "react"
import dataF from "./data.json"
import { title } from "process"

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
  // const getCuisine = async () => {
  //   const data = await fetch(
  //     `https://www.themealdb.com/api/json/v1/1/search.php?s=${type}`
  //   );
  //   const recipes = await data.json();
  //   setCuisine(recipes.meals);
  //   console.log("Cusine", recipes.meals);
  // };

  return (
    <>
      {dataF.map((item) => {
        return (
          <Box>
            <Image src={item.url} width="400px" height="500px"></Image>
          </Box>
        )
      })}
    </>
  )
}
