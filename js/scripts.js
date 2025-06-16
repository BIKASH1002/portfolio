// Typing Effect Script for Slide 1
document.addEventListener('DOMContentLoaded', function(){
    const text = "Welcome to my portfolio";
    let i = 0;
    const speed = 100; // milliseconds per character
    setTimeout(() => {
      function typeWriter() {
        if (i < text.length) {
          document.getElementById("typing").innerHTML += text.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        }
      }
      typeWriter();
    }, 1000); // Delay before starting the typing effect
  });
  
  // Changing symbols for glitch effect in naming part
  const symbolList = [
    "∑ π Δ ∞ Σ",
    "101010 110011",
    "α β γ θ λ",
    "∂ ∇ ∫ ∞",
    "101 011 110 010",
    "$ % & @ #"
  ];
  let index = 0;
  function changeSymbols() {
    document.getElementById("symbols").innerText = symbolList[index];
    index = (index + 1) % symbolList.length;
  }
  setInterval(changeSymbols, 1500);
  
  // Flip Counter Script
  document.addEventListener('DOMContentLoaded', function(){
    function flipCounter(id, target, infinite = false) {
      let count = 0;
      let digitElement = document.getElementById(id);
      let interval = setInterval(() => {
        if (count >= target) {
          if (infinite) {
            digitElement.innerText = target + "+";
            clearInterval(interval);
            return;
          } else {
            clearInterval(interval);
            return;
          }
        }
        count++;
        digitElement.style.transform = "rotateX(90deg)";
        setTimeout(() => {
          digitElement.innerText = count;
          digitElement.style.transform = "rotateX(0deg)";
        }, 250);
      }, 500);
    }

    flipCounter("papers", 3);
    flipCounter("projects", 21, true);
    flipCounter("certifications", 16);
  });
  
