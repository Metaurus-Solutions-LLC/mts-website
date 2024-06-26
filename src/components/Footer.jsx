// Load common nav bar nav links
// Future Links
// <address class="not-italic mb-4">
//   <span class="mx-[0.4rem] my-0">Ted Wetekamp</span>
//   <span class="mx-[0.4rem] my-0>2511 Jamestown Mall</span>
//   <span class="mx-[0.4rem] my-0>Houston, TX</span>
//   <span class="mx-[0.4rem] my-0>77057</span>
// </address>
// <div class="icons-container">
//   <a href="https://www.facebook.com/profile.php?id=100009279132307" target="_blank"><i class="fab fa-facebook fa-2x"></i></a>  -->
//   <a href="https://twitter.com/TedWetekamp" target="_blank"><i class="fab fa-twitter fa-2x"></i></a>                           -->
//   <a href="https://www.instagram.com/tedwetekamp/" target="_blank"><i class="fab fa-instagram-square fa-2x"></i></a>           -->
//   <a href="https://www.linkedin.com/in/ted-wetekamp-a6a2281" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a>         -->
//   <a href="email.html" target="_blank"><i class="fa fa-envelope-square fa-2x"></i></a>                                         -->
// </div> 

import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="bg-[#182335] text-[rgba(255,255,255,0.7)] w-full m-auto p-8">
      <ul className="flex flex-row">
        <li className="mr-4"><Link to="/">HomePage</Link></li>
        <li><Link to="/email">Contact Us</Link></li>
      </ul>
   </div>
  );
}

export default Footer;