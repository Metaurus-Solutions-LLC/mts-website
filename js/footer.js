// Load common Footer

console.log("footer js loading");

var footerBar = document.getElementById("footerBar");
  
    footerBar.innerHTML = 
        `
        <address>
          <span>Ted Wetekamp</span>
          <span>2511 Jamestown Mall</span>
          <span>Houston, TX</span>
          <span>77057</span>
        </address>
        <div class="icons-container">
          <a href="https://www.facebook.com/profile.php?id=100009279132307" target="_blank"><i class="fab fa-facebook fa-2x"></i></a>
          <a href="https://twitter.com/TedWetekamp" target="_blank"><i class="fab fa-twitter fa-2x"></i></a>
          <a href="https://www.instagram.com/tedwetekamp/" target="_blank"><i class="fab fa-instagram-square fa-2x"></i></a>
          <a href="https://www.linkedin.com/in/ted-wetekamp-a6a2281" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a>
          <a href="email.html" target="_blank"><i class="fa fa-envelope-square fa-2x"></i></a>
        </div>
        `;       