import About from "./componants/About/About";
import Home from "./componants/Home/Home";
import Navbar from "./componants/Navbar/Navbar";
import Car  from "./componants/Car/car";
import Survices from "./componants/NameSurvice/Survices";
import Footer from "./componants/Footer/Footer";



function App() {
  
  return <div className="bg-[#171d32] h-auto w-full overflow-hidden">
    <Navbar />
    <Home />
    <About />
    <Car />
    <Survices />
    <Footer />

  </div>
   

}

export default App;
