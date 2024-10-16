import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Footer from "../components/footer/Footer";
import './home.css';

export const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};
