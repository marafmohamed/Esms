import './App.css';
import Aboutus from './Components/Aboutus';
import Agenda from './Components/Agenda';
import Brand from './Components/Brand';
import FAQ from './Components/FAQ';
import Footer from './Components/Footer';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App flex flex-col overflow-x-hidden items-center bg-white ">
      <Navbar/>
      <HeroSection/>
      <Aboutus/>
      <Brand/>
      <Agenda/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;
