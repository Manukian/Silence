function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener("scroll", (e) => {
  document.querySelectorAll(".blur").forEach((block) => {
    // block.style.filter = "blur(" + window.scrollY / 100 + "px)";
    block.style.filter = "blur(10px)";
    block.classList.add("text-shadow");
    setTimeout(() => {
      block.style.filter = "blur(0px)";
      block.classList.remove("text-shadow");
    }, 800);
  });
});
