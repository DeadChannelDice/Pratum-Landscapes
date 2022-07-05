// Code for Before/After Sliders By Webdevtrick ( https://webdevtrick.com )
function beforeAfter() {
  document.getElementById('alteredone').style.width = document.getElementById('sliderone').value + "%";
}

function beforeAfterTwo() {
    document.getElementById('alteredtwo').style.width = document.getElementById('slidertwo').value + "%";
  }

  function beforeAfterThree() {
    document.getElementById('alteredthree').style.width = document.getElementById('sliderthree').value + "%";
  }

  function beforeAfterFour() {
    document.getElementById('alteredfour').style.width = document.getElementById('sliderfour').value + "%";
  }

  function beforeAfterFive() {
    document.getElementById('alteredfive').style.width = document.getElementById('sliderfive').value + "%";
  }

  function beforeAfterSix() {
    document.getElementById('alteredsix').style.width = document.getElementById('slidersix').value + "%";
  }

  function beforeAfterSeven() {
    document.getElementById('alteredseven').style.width = document.getElementById('sliderseven').value + "%";
  }

  function beforeAfterHero() {
    document.getElementById('altered-hero-cover').style.width = document.getElementById('sliderhero').value + "%";
  }

  function beforeAfter8() {
    document.getElementById('altered-8').style.width = document.getElementById('slider-8').value + "%";
  }

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
  
    
  
