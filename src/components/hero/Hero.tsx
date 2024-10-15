import "./hero.css";
import IceCream from "../../assets/iceCream.png";
import Minion from "../../assets/minion.png";

const Hero = () => {
  return (
    <div className="page">
      <div className="hero">
        <div className="hero_infos">
          <div className="hero_infos_title">
            <h2>Grab the best ice cream.</h2>
            <img src={Minion} alt="" />
          </div>
          <p>
            We ditched the dairy we cut the sugar infused mood-boosting
            adaptogens.
          </p>
          <button>Shop Flavors</button>
        </div>
        <div className="hero_img">
          <img src={IceCream} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
