import Footer from "./components/Footer";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Form from './components/Forms'
import Settings from "./components/Settings";
import PostList from "./components/pages/PostList";
import Preference from "./components/pages/Preference";
import AboutUs from "./components/pages/AboutUs";
import HomePage from "./components/pages/HomePage";

export default function App() {

  return (
    <>
      <Header />
      <HomePage />
      <PostList />
      <Preference />
      <AboutUs />
      <Footer />
    </>
  );
}
