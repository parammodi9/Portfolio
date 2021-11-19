// Detects if device is on iOS 
const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test( userAgent );
}
// Detects if device is in standalone mode
const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

// Checks if should display install popup notification:
if (isIos() && !isInStandaloneMode()) {
  this.setState({ showInstallMessage: true });
}



// Function expression to select element

const selectElement = (s) => document.querySelector(s);
const navLinks = document.querySelectorAll(".nav-link");

selectElement(".burger-menu-icon").addEventListener("click", () => {
    selectElement(".nav-list").classList.toggle("active");
    selectElement(".burger-menu-icon").classList.toggle("toggle")
    
    navLinks.forEach((link,index) => {
        if(link.style.animation){
            link.style.animation ="";
        }else{
            link.style.animation = `navLinkAnimate 0.5s ease forwards ${ index/6 + 0.5}s`
        }
    })
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        selectElement(".nav-list").classList.toggle("active"); 
        selectElement(".burger-menu-icon").classList.toggle("toggle")
        navLinks.forEach((link,index) => {
            if(link.style.animation){
                link.style.animation ="";
            }else{
                link.style.animation = `navLinkAnimate 0.5s ease forwards ${ index/6 + 0.5}s`
            }
        })
    })
})
if ("serviceWorker" in navigator) {
    // register service worker
    navigator.serviceWorker.register("service-worker.js");
  }
