import "./App.css";
import NavBar from "./components/Navbar";
import Section1 from "./components/Section1";
import AboutMe from "./components/AboutMe";
import ImgGalery from "./components/ImgGalery";
import AboutTO from "./components/AboutTO";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Section1 />
      <AboutMe />
      <AboutTO />
      <ImgGalery />
      <Footer />
    </div>
  );
}

export default App;
