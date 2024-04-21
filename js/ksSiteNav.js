// Load common Kansas Nav Bar Links

console.log("js loading");

var navLinks = document.getElementById("siteNav");
  
    navLinks.innerHTML = 
        `
        <ul>
            <li><a href="./chicago.html"><strong>Illinois Route 66</strong></a></li>
            <li><a href="./stlouis.html"><strong>Missouri Route 66</strong></a></li>
            <li><strong>Kansas Route 66</strong></li>
            <li><a href="./baxtersprings.html">Baxter Springs</a></li>
            <li><a href="./miami.html"><strong>Oklahoma Route 66</strong></a></li>
            <li><a href="./shamrock.html"><strong>Texas Route 66</strong></a></li>
            <li><a href="./endee.html"><strong>New Mexico Route 66</strong></a></li>
            <li><a href="./lupton.html"><strong>Arizona Route 66</strong></a></li>
            <li><a href="./amboy.html"><strong>California Route 66</strong></a></li> 
      </ul>  
        `;