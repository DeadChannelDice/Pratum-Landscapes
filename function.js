// Code for Before/After Sliders By Webdevtrick ( https://webdevtrick.com )
function beforeAfter() {
  document.getElementById('alteredone').style.width = document.getElementById('sliderone').value + "%";


  const scrollLinks = document.querySelectorAll(".scroll-link");
  scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      // prevent default HTML behavioir of skipping directly to the location on the page
      e.preventDefault();
      // navigate to specific spot
      const id = e.currentTarget.getAttribute("href").slice(1);
      const element = document.getElementById(id);
      let position = element.offsetTop;
      window.scrollTo({
        left: 0,
        top: position,
      });
    
    });
  });

  const topLink = document.querySelector(".top-link");
  window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > 1000) {
      topLink.classList.add("show-link");
    } else {
      topLink.classList.remove("show-link");
    }
  });
  
    
  
