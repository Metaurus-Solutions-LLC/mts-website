// Load common nav bar nav links

var navBarLinks = document.getElementById("navBarLinks");
  
    navBarLinks.innerHTML = 
        `
        <ul class="navs">
            <li class="mr-4 underline"><a href="./index.html">Home</a></li>
            <!--     <li>What we do</li>            -->
            <!--     <li>Products</li>              -->
            <!--     <li>News</li>                  -->
            <li class="underline"><a href="./pages/email.html" target="_blank">Contact Us</a></li>
        </ul>
        `;