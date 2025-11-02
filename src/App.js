import Footer from "./components/Footer";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Form from './components/Forms'
import Settings from "./components/Settings";
import PostList from "./components/pages/PostList";
import Preference from "./components/pages/Preference";
import AboutUs from "./components/pages/AboutUs";
import HomePage from "./components/pages/HomePage";
import { Route, Routes } from "react-router-dom";

export default function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/posts" element={<PostList />}></Route>
        <Route path="/preferences" element={<Preference />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
      </Routes>
      <Footer />
    </>
  );
}
