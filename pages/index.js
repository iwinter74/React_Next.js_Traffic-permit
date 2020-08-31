import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import HowTo from "../components/HowTo";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div>
      <Navigation />
      <Hero />
      <About />
      <HowTo />
      <Footer />
      <style jsx>{`
      div {
        background: url("/scene.png") left/cover no-repeat;
        height: 90vh;
        width: 100%
      }
      
      `}


      </style>
    </div>
  )
}
