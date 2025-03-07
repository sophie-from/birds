import BirdFinder from "./components/BirdFinder";
import Navigation from './components/nav';
import Header from './components/header';
import Footer from './components/footer';
import { HashRouter, Routes, Route } from "react-router";
import Quiz from "./pages/quiz";
import HomePage from "./pages/HomePage.jsx";

function App() {

  return (
<HashRouter basename="/">
<Header/>
<Routes>
  <Route path="/" element={<HomePage/>}></Route>
  <Route path="quiz" element={<Quiz/>}></Route>
  </Routes>
    <Footer/>    
    </HashRouter> )
}

export default App;
