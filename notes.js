document.querySelectorAll("details").forEach((detail) => {
    const summary = detail.querySelector("summary");
  
    // Create and prepend icon span
    const icon = document.createElement("span");
    icon.textContent = "➕ ";
    icon.style.marginRight = "8px";
    summary.prepend(icon);
  
    // Toggle icon on expand/collapse
    detail.addEventListener("toggle", () => {
      icon.textContent = detail.open ? "➖ " : "➕ ";
  
      // Optional: Briefly highlight newly opened section
      if (detail.open) {
        detail.classList.add("highlight");
        setTimeout(() => detail.classList.remove("highlight"), 500);
      }
    });
  });
  