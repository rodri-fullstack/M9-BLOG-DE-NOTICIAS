import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NewsDetail from "./pages/NewsDetail";
import CreateNews from "./pages/CreateNews";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/noticias/:id" element={<NewsDetail />} />
        <Route path="/crear-noticia" element={<CreateNews />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;