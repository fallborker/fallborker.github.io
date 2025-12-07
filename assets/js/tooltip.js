const tooltip = document.getElementById("follow-tooltip");

document.addEventListener("mousemove", e => {
  const trg = e.target.closest(".tooltip-src");
  if (trg) {
    tooltip.textContent = trg.dataset.tip;
    tooltip.style.left = (e.clientX + 12) + "px";
    tooltip.style.top  = (e.clientY + 12) + "px";
    tooltip.style.opacity = 1;
  } else {
    tooltip.style.opacity = 0;
  }
});