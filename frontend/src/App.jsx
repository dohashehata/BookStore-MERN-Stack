import { Routes ,Route} from "react-router-dom"
import Home from "./pages/Home.jsx"
import CreateBooks from "./pages/CreateBooks.jsx"
import ShowBooks from "./pages/ShowBooks.jsx"
import DeleteBook from "./pages/DeleteBook.jsx"
import EditBooks from "./pages/EditBooks.jsx"

export default function App() {
  return (
   <Routes>
    <Route path="/"  element={<Home/>}/>
    <Route path="/books/create"  element={<CreateBooks/>} />
    <Route path="/books/details/:id"  element={<ShowBooks/>} />
    <Route path="/books/edit/:id"  element={<EditBooks/>} />
    <Route path="/books/delete/:id"  element={<DeleteBook/>} />
   </Routes>
  )
}
