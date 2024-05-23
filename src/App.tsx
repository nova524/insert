import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/index"
import About from "./pages/about"
import "./App.css"

function App() {
  return (
  <>
    <BrowserRouter>
      <header>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <p>login</p>
      </header>
      <hr></hr>
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  </>
  );
}

export default App;
