import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/auth" element={<h1>Auth</h1>} />
          <Route path="/rated" element={<h1>Rated page</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

