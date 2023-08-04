import { Box, Image, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import React from "react"
import dataF from "./data.json"
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer"

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
  const [selectedDocs, setSelectedDocs] = useState<File[]>([])

  const docs = [
    { uri: require("./EV1N12010.pdf") }, // Local File
  ]
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
          <Box height="600px" width="500px">
            <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
          </Box>
        )
      })}

      <input
        type="file"
        accept=".pdf"
        multiple
        onChange={(el) =>
          el.target.files?.length &&
          setSelectedDocs(Array.from(el.target.files))
        }
      />
      <DocViewer
        documents={selectedDocs.map((file) => ({
          uri: window.URL.createObjectURL(file),
          fileName: file.name,
        }))}
        pluginRenderers={DocViewerRenderers}
      />
    </>
  )
}
