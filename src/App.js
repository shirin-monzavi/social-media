import Footer from "./components/Footer";
import Header from "./components/Header";
import PostList from "./components/pages/PostList";
import Preference from "./components/pages/Preference";
import AboutUs from "./components/pages/AboutUs";
import HomePage from "./components/pages/HomePage";
import { data, Route, Routes } from "react-router-dom";
import NotFoundPage from "./components/pages/NotFoundPage";
import PostItemPage from "./components/pages/PostItemPage";
import PostFormPage from "./components/pages/PostFormPage";
import AboutUsMission from "./components/pages/AboutUs/mission";
import AboutUsPrivacy from "./components/pages/AboutUs/privacy";
import AboutUsIntroduction from "./components/pages/AboutUs/Introduction";
import { useEffect } from "react";
import * as database from './database';

export default function App() {

  useEffect(() => {
    var result = database.load();
    console.log(result);
    // var result = database.load()
    //   .then((result) => {
    //     console.log(result)
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    // const result = database.load();
    // console.log('result', result);
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/posts" element={<PostList />}></Route>
        <Route path="/posts/:id" element={<PostItemPage />}></Route>
        <Route path="/postform" element={<PostFormPage />}></Route>
        <Route path="/preferences" element={<Preference />}></Route>
        <Route path="/about-us" element={<AboutUs />}>
          <Route path="" element={<AboutUsIntroduction />} />
          <Route path="mission" element={<AboutUsMission />} />
          <Route path="privacy" element={<AboutUsPrivacy />} />
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
}
