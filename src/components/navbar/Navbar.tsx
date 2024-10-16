import "./navbar.css";
import profile from "../../assets/profile.png";
import hamb from "../../assets/hamb.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_wrapper">
        <h1>Creamy</h1>
        <nav>
          <ul>
            <li>About</li>
            <li>Products</li>
            <li>Moods</li>
            <li>Flavors</li>
            <li>Ingredients</li>
          </ul>
        </nav>
        <div className="navbar_wrapper_menu">
          <img src={profile} alt="profile" />
          <div>
            <img src={hamb} alt="hamb" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
