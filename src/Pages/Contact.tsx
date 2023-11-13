import React, { useRef, useState } from "react"
import {
  Box,
  Button,
  Center,
  FormControl,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react"
import { useTranslation } from "react-i18next"

interface FormValues {
  name: string
  articleName: string
  recepient_email: string
}

const initValues: FormValues = {
  name: "",
  articleName: "",
  recepient_email: "",
}

const initState = { values: initValues as FormValues } // Type assertion

export const Contact: React.FC = () => {
  const [state, setState] = useState(initState)
  const { values } = state

  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }))
  }

  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const onBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event
    setTouched((prev) => ({ ...prev, [target.name]: true }))
    console.log("tou", setTouched)
  }

  const [files, setFile] = useState<FileList | null>()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const onClickFileUploadHandler = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }
  const handleButton = () => {
    onClickFileUploadHandler()
  }
  const { t } = useTranslation("ns1")

  return (
    <Box h="100%">
      <Text textAlign="center" fontSize="2rem" color="rgb(0,39,110)" mt="2rem">
        {t("title")}
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
          h="70%">
          <Center w="100%" h="100%">
            <VStack spacing="30px" w="100%" align="start">
              <FormControl isRequired isInvalid={touched.name && !values.name}>
                <Input
                  name="name"
                  placeholder={t("description.part1")}
                  onChange={onHandleChange}
                  onBlur={onBlur}
                  value={values.name}
                />
              </FormControl>

              <FormControl
                isRequired
                isInvalid={touched.articleName && !values.articleName}>
                <Input
                  name="articleName"
                  placeholder={t("description.part2")}
                  onChange={onHandleChange}
                  onBlur={onBlur}
                  value={values.articleName}
                />
              </FormControl>
              <FormControl
                isRequired
                isInvalid={touched.recepient_email && !values.recepient_email}>
                <Input
                  name="recepient_email"
                  placeholder={t("description.part3")}
                  onChange={onHandleChange}
                  onBlur={onBlur}
                  value={values.recepient_email}
                />
              </FormControl>
              <Input
                ref={fileInputRef as any}
                type="file"
                accept=".pdf"
                display="none"
                multiple
                onChange={(e) => {
                  setFile(e.target.files)
                }}
              />
              <Box
                display="flex"
                flexDirection="row"
                gap="10px"
                alignItems="center">
                <Button
                  variant="outline"
                  fontSize="14px"
                  onClick={handleButton}>
                  {t("description.part4")}
                </Button>
                <Text>{!files?.length && t("description.part6")}</Text>
                <Text>{files?.length && files[0].name}</Text>
              </Box>

              <Button type="submit" variant="outline" fontSize="14px">
                {t("description.part5")}
              </Button>
            </VStack>
          </Center>
        </Box>
      </Center>
    </Box>
  )
}
