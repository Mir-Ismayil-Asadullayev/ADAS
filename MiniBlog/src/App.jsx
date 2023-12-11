import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainBlog from "./pages/MainBlog";
import MainBlogItem from "./pages/MainBlogItem";
import SecondaryBlog from "./pages/SecondaryBlog";
import SecondaryBlogItem from "./pages/SecondaryBlogItem";
import './assets/css/App.css';

function App() {

  return (
    <>
      <BrowserRouter basename='/'>
        <Header />
        <Routes>
          <Route index element={<MainBlog />} />
          <Route path='main/:id' element={<MainBlogItem />} />
          <Route path='secondary' element={<SecondaryBlog />} />
          <Route path='secondaryitem' element={<SecondaryBlogItem />} />
          <Route path='*' element={<MainBlog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
