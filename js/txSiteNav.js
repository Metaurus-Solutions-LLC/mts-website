// Load common Texas site nav bar

console.log("js loading");

var navLinks = document.getElementById("siteNav");
  
    navLinks.innerHTML = 
        `
        <ul>
            <li><a href="./chicago.html"><strong>Illinois Route 66</strong></a></li>
            <li><a href="./stlouis.html"><strong>Missouri Route 66</strong></a></li>
            <li><a href="./baxtersprings.html"><strong>Kansas Route 66</strong></a></li>
            <li><a href="./miami.html"><strong>Oklahoma Route 66</strong></a></li>
            <li><strong>Texas Route 66</strong></li>
            <li><a href="./shamrock.html">Shamrock</a></li>
            <li><a href="./mclean.html">McLean</a></li>
            <li><a href="./britten.html">Britten</a></li>
            <li><a href="./amarillo.html">Amarillo</a></li>    
            <li><a href="./vega.html">Vega</a></li>
            <li><a href="./road2adrian.html">Road to Adrian</a></li>
            <li><a href="./adrian.html">Adrian</a></li>
            <li><a href="./road2glenrio.html">Road to Glenrio</a></li>    
            <li><a href="./glenrio.html">Glenrio</a></li>
            <li><a href="./endee.html"><strong>New Mexico Route 66</strong></a></li>
            <li><a href="./lupton.html"><strong>Arizona Route 66</strong></a></li>
            <li><a href="./amboy.html"><strong>California Route 66</strong></a></li>   
        </ul>  
        `;