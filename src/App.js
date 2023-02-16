// import logo from './logo.svg';
import './App.css';
import LandingContent from './components/LandingContent';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
// import Landingpage from './components/Landingpage';

// import LandingContent from "./components/LandingContent";

function App() {
  return (
    <div style={{textAlign:"center", marginLeft:"auto", marginRight:"auto"}}>
     <Navbar /> 
     <LandingContent />
     <AboutMe /> 
     <Projects /> 
     <Footer />
    </div>
  );
}

export default App;
