// ---------------------------------------------------------
// swapnali patki — portfolio interactions
// ---------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initTypedRoles();
});

function initMobileMenu() {
  const btn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");
  if (!btn || !nav) return;

  btn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(isOpen));
    btn.textContent = isOpen ? "[ x ]" : "[ menu ]";
  });

  nav.querySelectorAll(".navlink").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
      btn.textContent = "[ menu ]";
    });
  });
}

function initTypedRoles() {
  const el = document.querySelector("[data-typed-roles]");
  if (!el) return;

  const roles = JSON.parse(el.getAttribute("data-typed-roles"));
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReduced) {
    el.textContent = roles[0];
    return;
  }

  const textSpan = document.createElement("span");
  const cursorSpan = document.createElement("span");
  cursorSpan.className = "cursor";
  cursorSpan.innerHTML = "&nbsp;";
  el.textContent = "";
  el.appendChild(textSpan);
  el.appendChild(cursorSpan);

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const TYPE_SPEED = 55;
  const DELETE_SPEED = 30;
  const HOLD_TIME = 1600;

  function tick() {
    const current = roles[roleIndex];

    if (!deleting) {
      charIndex++;
      textSpan.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, HOLD_TIME);
        return;
      }
      setTimeout(tick, TYPE_SPEED);
    } else {
      charIndex--;
      textSpan.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(tick, 300);
        return;
      }
      setTimeout(tick, DELETE_SPEED);
    }
  }

  tick();
}
