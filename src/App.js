import Header from "./components/Header/Header";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Post from "./pages/Post/Post";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/post/:id" element={<Post />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
