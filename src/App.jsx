import { Routes,Route,BrowserRouter } from "react-router-dom"

import Books from "@/Components/Book"
import Categories from "./Components/Categories"
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Books/> } />
       <Route path="/categories" element={<Categories/> } />
     </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
