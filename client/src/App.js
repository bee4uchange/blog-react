import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Post from "./pages/Post/Post";
import Signin from "./pages/Signin/Signin";
import EditPost from "./pages/Post/EditPost/EditPost";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/posts" replace />} />{" "}
        <Route path="/posts" element={<Home />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/posts/:id/edit" element={ <EditPost />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
