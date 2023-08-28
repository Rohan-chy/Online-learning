import Header from "./Components/Header"
import Banner from "./Components/Banner"
import './App.css';
import Service from "./Components/Service";
import Contact from "./Components/Contact";
import Plan from "./Components/Plan";
import Footer from "./Components/Footer";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Banner />
     <Service/>
     <Contact/>
     <Plan/>
     <Footer/>
     </Router>
  );
}

export default App;
