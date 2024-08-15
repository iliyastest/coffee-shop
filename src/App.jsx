import Aos from "aos"
import { useEffect } from "react"
import 'aos/dist/aos.css';
import Navbar from "./components/Navbar";
import Homme from "./components/Homme";
import Services from "./components/Services";
import Banner from "./components/Banner";
import AppStore from "./components/AppStore";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";




function App() {

  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 700,
      easing: 'ease-in',
      delay: 100
    })
  }, [])


  return <>
    <div className="overflow-hidden ">
      <Navbar />
      <Homme />
      <Services />
      <Banner />
      <AppStore />
      <Testimonial />
      <Footer />
    </div>

  </>




}

export default App
