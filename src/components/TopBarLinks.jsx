// Load common top bar nav links
// Future Links
//  <li class="flex items-start list-none mr-4 m-2">713-555-1212</li>
//  <li class="flex items-start list-none mr-4 m-2">info@metaurus-solutions.com</li>
//  <li>News</li>
//
//  <div class="justify-content: end; text-[white] text-2xl mr-8 m-2">
//    <a href="https://twitter.com/TedWetekamp" target="_blank"><i class="fab fa-twitter fa-2x"></i></a>
//    <a href="https://www.instagram.com/tedwetekamp/" target="_blank"><i class="fab fa-instagram-square fa-2x"></i></a>
//    <a href="https://www.linkedin.com/in/ted-wetekamp-a6a2281" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a>
//    <a href="./pages/email.html" target="_blank"><i class="fa fa-envelope-square fa-2x"></i></a>
//  </div>

import { Link } from 'react-router-dom'

function TopBarLinks() {
    return (
        <div className="topBar">
            <ul className="flex items-start list-none ml-8">
              <li className="flex items-start list-none mr-4 m-2">Houston, TX</li>
              <li className="flex items-start list-none mr-4 m-2 underline"><Link to="/email">Contact Us</Link></li>
            </ul>
            <div className="justify-content: end; text-[white] text-2xl mr-8 m-2"></div>
            <div class="justify-content: end; text-[white] text-2xl mr-8 m-2">
              <a href="https://www.linkedin.com/company/metaurus-solutions-llc/" target="_blank"><i className="fab fa-linkedin fa-2x mx-2"></i></a>
              <a href="./pages/email.html" target="_blank"><i className="fa fa-envelope-square fa-2x mx-2"></i></a>
            </div>
         </div>
    );
  }
    
export default TopBarLinks;