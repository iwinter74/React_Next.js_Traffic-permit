import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Faq from "../components/Faq";
import Mycarousel from "../components/Mycarousel";

const faq = () => {
    return (
        <div>
        <Navigation />
            <Hero />
            <Faq />
            <Mycarousel />
            <Footer />
        <style jsx>{`
      div {
        background: url("/scene.png") left/cover no-repeat;
        height: 90vh;
        width: 100%
      }
      
      `}


      </style>
    </div> );
}
 
export default faq;