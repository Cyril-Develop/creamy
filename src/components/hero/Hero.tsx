import "./hero.css";
import IceCream from "../../assets/iceCream.png";
import Minion from "../../assets/minion.png";
import Spoon from "../../assets/spoon.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_wrapper">
        <div className="hero_wrapper_infos">
          <div>
            <h2>Grab the best ice cream.</h2>
            <img src={Minion} alt="" />
          </div>
          <p>
            We ditched the dairy we cut the sugar infused mood-boosting
            adaptogens.
          </p>
          <button>Shop Flavors</button>
        </div>
        <div className="hero_wrapper_img">
          <img src={IceCream} alt="" />
        </div>
      </div>
      <img className="hero_wrapper_spoon" src={Spoon} alt="" />
    </div>
  );
};

export default Hero;
