import Footer from "./components/Footer";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Form from './components/Forms'
import ClassCounter from './playground/CounterClass/CounterClass'
import ClassFunction from './playground/CounterFunction/CounterFunction.js'

export default function App() {
  return (
    <>
      <Header />
      <ClassCounter />
      <ClassFunction />
      <Posts />
      <Form />
      <Footer />
    </>
  );
}
