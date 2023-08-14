import { TNavs } from "./models"
import { useTranslation } from "react-i18next"
const { t } = useTranslation("ns1")

export const NAVS: TNavs = [
  { to: "/", name: "Home" },
  { to: "/edboard", name: "Editorial Board" },
  { to: "/forauthor", name: "For Author" },
  { to: "/archive", name: "Archive" },
  { to: "/contact", name: t("title2") },
]
