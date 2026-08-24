import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import BookMarks from "./pages/bookmarks/BookMarks";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookmarks" element={<BookMarks />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
