// --- Job 06 ---
const konamiCode = [
    "ArrowUp", "ArrowUp",
    "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight",
    "ArrowLeft", "ArrowRight",
    "b", "a"
  ];
  let konamiIndex = 0;
  
  document.addEventListener("keydown", (e) => {
    if (e.key === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        document.body.classList.add("konami-mode");
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });