import Header from "./components/Header/Header";
import "./App.scss";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Post from "./pages/Post/Post";
import Footer from "./components/Footer/Footer";
import Signin from "./pages/Signin/Signin";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/posts" replace />} />{" "}
        <Route path="/posts" element={<Home />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
