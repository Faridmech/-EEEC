import { Route, Routes } from "react-router-dom"
import { Layout } from "./layout"
import { Home } from "./Pages/Home"
import { EdBoard } from "./Pages/EdiBoard"
import { ForAuthor } from "./Pages/ForAut"
import { Contact } from "./Pages/Contact"
import { Archive } from "./Pages/Archive"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/edboard" element={<EdBoard />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/forauthor" element={<ForAuthor />} />
      </Route>
    </Routes>
  )
}
