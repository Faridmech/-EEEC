import i18next from "i18next"
import { initReactI18next } from "react-i18next"
import ns1 from "./en/ns1.json"
import ns2 from "./en/ns2.json"

import zs1 from "./az/zs1.json"
import zs2 from "./az/zs2.json"

import ns3 from "./en/ns3.json"
import zs3 from "./az/zs3.json"

import ns4 from "./en/ns4.json"
import zs4 from "./az/zs4.json"

import ns5 from "./en/ns5.json"
import zs5 from "./az/zs5.json"

export const defaultNS = "ns1"

i18next.use(initReactI18next).init({
  lng: "en", // if you're using a language detector, do not define the lng option
  debug: true,
  resources: {
    en: {
      ns1,
      ns2,
      ns3,
      ns4,
      ns5,
    },
    az: {
      ns1: zs1,
      ns2: zs2,
      ns3: zs3,
      ns4: zs4,
      ns5: zs5,
    },
  },
  defaultNS,
})
