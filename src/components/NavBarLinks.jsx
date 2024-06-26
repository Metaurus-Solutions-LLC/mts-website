// Load common nav bar nav links
// Future Links
//  <li>What we do</li>
//  <li>Products</li>
//  <li>News</li>

import { Link } from 'react-router-dom'

function NavBarLinks() {
    return (
        <div>
            <ul className="navs">
              <li className="mr-4 underline"><Link to="/">HomePage</Link></li>
              <li className="underline"><Link to="/email">Contact Us</Link></li>
            </ul>    
         </div>
    );
  }
    
export default NavBarLinks;