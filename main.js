onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  window.addEventListener("load", () => {
    const apologyText = document.querySelector(".apology-text");
  
    // Trigger apology text after 3 seconds, assuming bloom takes 3 seconds
    setTimeout(() => {
      apologyText.style.opacity = 1; // Show apology text
    }, 5000); // Adjust this timing based on bloom duration
  });