import Footer from "./components/Footer";
import Header from "./components/Header";
import PostList from "./components/pages/PostList";
import Preference from "./components/pages/Preference";
import AboutUs from "./components/pages/AboutUs";
import HomePage from "./components/pages/HomePage";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./components/pages/NotFoundPage";
import PostItemPage from "./components/pages/PostItemPage";
import PostFormPage from "./components/pages/PostFormPage";


export default function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/posts" element={<PostList />}></Route>
        <Route path="/posts/:id" element={<PostItemPage />}></Route>
        <Route path="/postform" element={<PostFormPage />}></Route>
        <Route path="/preferences" element={<Preference />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
}
