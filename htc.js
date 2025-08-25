// Mobile version : NavBar buttons convert to Hamburger MenuBar
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Hero : Network design Animation
  particlesJS("particles-js", {
    particles: {
      number: { value: 100, density: { enable: true, value_area: 1000 } },
      color: { value: "#bc430d" },
      shape: { type: ["circle" , "star" , "edge"] },
      opacity: { value: 0.7 },
      size: { value: 6, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#bc430d",
        opacity: 0.4,
        width: 1
      },
      move: { enable: true, speed: 4 }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" }
      },
      modes: {
        grab: { distance: 200, line_linked: { opacity: 1 } },
        push: { particles_nb: 7 }
      }
    },
    retina_detect: true
  });
  
  // About Us : Changing words animation
  const words = ["A b a y a", "H i j a b", "S a r e e", "Male suits" , "L e h a n g a" , "Shalwar Kameez"];
  let index = 0;
  const wordElement = document.getElementById("changing-words");

  function changeWord() {
    wordElement.textContent = words[index];
    index = (index + 1) % words.length;
  }
  changeWord();
  setInterval(changeWord, 2000);

  // Gallery : Picture sliding animation 
  const track = document.getElementById('sliderTrack');
  const imgs = track.innerHTML;
  track.innerHTML += imgs;

  const imgCount = track.querySelectorAll('img').length;
  const imgWidth = track.querySelector('img').offsetWidth;
  const totalWidth = imgCount * imgWidth;
  track.style.width = totalWidth + 'px';

  // "Goto Top Button", when scroling down
let mybutton = document.getElementById("scrollTopBtn");

      // Show button after scrolling down 200px
window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

      // Scroll to top when clicked
function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

