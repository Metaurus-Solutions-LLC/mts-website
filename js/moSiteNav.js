// Load common Missouri site nav bar

console.log("js loading");

var navLinks = document.getElementById("siteNav");
  
    navLinks.innerHTML = 
        `
        <ul>
            <li><a href="./chicago.html"><strong>illinois Route 66</strong></a></li> 
            <li><strong>Missouri Route 66</strong></li>
            <li><a href="./stlouis.html">St. Louis</a></li>
            <li><a href="./eureka.html">Eureka</a></li>
            <li><a href="./pacific.html">Pacific</a></li>
            <li><a href="./stclair.html">St. Clair</a></li>    
            <li><a href="./cuba.html">Cuba</a></li>
            <li><a href="./hookerscut.html">Hooker's Cut</a></li>
            <li><a href="./devilselbow.html">Devil's Elbow</a></li>    
            <li><a href="./lebanon.html">Lebanon</a></li>
            <li><a href="./strafford.html">Strafford</a></li>
            <li><a href="./springfieldm.html">Springfield</a></li>
            <li><a href="./springfield2parissprings.html">Springfield to Paris Springs</a></li>    
            <li><a href="./parissprings.html">Paris Springs</a></li>
            <li><a href="./spencer.html">Spencer</a></li>
            <li><a href="./carthage.html">Carthage</a></li>
            <li><a href="./baxtersprings.html"><strong>Kansas Route 66</strong></a></li>     
            <li><a href="./miami.html"><strong>Oklahoma Route 66</strong></a></li>
            <li><a href="./shamrock.html"><strong>Texas Route 66</strong></a></li>
            <li><a href="./endee.html"><strong>New Mexico Route 66</strong></a></li>
            <li><a href="./lupton.html"><strong>Arizona Route 66</strong></a></li>
            <li><a href="./amboy.html"><strong>California Route 66</strong></a></li>   
        </ul>  
        `;