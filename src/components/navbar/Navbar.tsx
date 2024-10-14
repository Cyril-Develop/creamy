import './navbar.css'
import profile from '../../assets/profile.png';
import hamb from '../../assets/hamb.png';

const Navbar = () => {
  return (
    <div className='navbar'>
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
      <div className="navbar_menu">
        <img src={profile} alt="profile" />
        <div className="navbar_menu__hamb">
          <img src={hamb} alt="hamb" />
        </div>
      </div>
    </div>
  )
}

export default Navbar