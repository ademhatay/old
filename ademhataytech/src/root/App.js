import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import Blog from "../components/Blog/Blog";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Login from "../components/LoginSignup/Login";
import Register from "../components/LoginSignup/Register";
import Artictle from "../components/Blog/Artictle";
import Categories from "../components/Categories/Categories";
import SingleCategory from "../components/Categories/SingleCategory";

function App() {
  return (
    <div className="dark:bg-gray-800 dark:text-gray-300">
      <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="blog" element={<Blog />}></Route>
            <Route path="blog/post/id/1" element={<Artictle />}></Route>
          <Route path="categories" element={<Categories />} />
          <Route path="categories/category/id/1" element={<SingleCategory />}></Route>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />

    </div>
  );
}

export default App;
