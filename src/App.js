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
import AboutUsMission from "./components/pages/AboutUs/mission";
import AboutUsPrivacy from "./components/pages/AboutUs/privacy";
import AboutUsIntroduction from "./components/pages/AboutUs/Introduction";
import Loading from "./components/Loading";
import { useEffect, useState } from "react";
import * as database from './database';
import { useDispatch } from "react-redux";
import { setPosts } from "./redux/postSlice";

export default function App() {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      //const data = await database.load();
      const data = await database.loadPromoted();
      console.log(data)
      dispatch(setPosts(data));
      setLoading(false)
    })();
  }, [])

  return (
    <>
      <Header />
      {isLoading ?
        (<Loading />) :
        (<Routes>
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
        </Routes>)
      }
      <Footer />
    </>
  );
}
