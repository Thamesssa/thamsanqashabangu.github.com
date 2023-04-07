AOS.init({
  offset: 200,
  duration: 600,
  easing: 'ease-in-sine',
  delay: 100,
});

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY >0);
});




     var typed = new Typed('.typed', {
      strings: ["Developer.", "Designer.", "Full Stack Developer.","Web Developer", "Computing Student."],
      typeSpeed: 80,
      backSpeed: 70,
      backDelay: 1500,
      loop: true,
      startDelay: 1000,
      
    });
