import { Link } from 'react-router-dom'
import NavBarLinks from './NavBarLinks';
import TopBarLinks from './TopBarLinks';
import logo from '../assets/metaurus_solutions_logo_dark.png'

function Header() {
  return (
    <nav>
      <TopBarLinks/>
      <div className="navBar">
        <div class="logo-container">
          <Link to="/"><img src={logo} alt="Logo"/></Link>
        </div>
        <div className="company-name">
          <h1>Metaurus Solutions, LLC</h1>
        </div>
        <NavBarLinks/>
      </div>  
   </nav>
  );
}

export default Header;