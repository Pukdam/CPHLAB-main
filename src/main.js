import "./style.css";
/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion";

inView(" .lianimate", () => {
  animate(
    " .lianimate",
    { opacity: [0, 1] },
    {
      delay: stagger(0.5, { start: 0.2 }),
    }
  );
});

inView(" .anmelderkort", () => {
  animate(
    " .anmelderkort",
    { opacity: [0, 1], scale: [1] },
    { delay: 0.5, duration: 2, direction: "alternate" }
  );
});

inView(".hvadbetyder1", () => {
  animate(".hvadbetyder1", { x: [-2000, 0] }, { duration: 2 });
});

inView(".hvadbetyder2", () => {
  animate(".hvadbetyder2", { x: [-2000, 0] }, { duration: 2 });
});

inView(".hvadbetyder3", () => {
  animate(".hvadbetyder3", { x: [-2000, 0] }, { duration: 2 });
});

// Lav en variabel, der refererer til ".toggle-btn"
const btn = document.querySelector(".toggle-btn");
// Lav en variabel, der refererer til "nav"
const nav = document.querySelector("nav");

// Lav en function, der hedder toggleMenu()
function toggleMenu() {
  console.log("hey");
  // 1. Toggle en klasse på nav vha. classList.toggle
  // 2. Toggle en klasse, der hedder "shown"
  nav.classList.toggle("shown");

  // 1. Lav en variabel, der hedder menuShown
  // 2. Den skal være lig med, om nav-variablen indeholder klassen "shown" vha. classList.contains("")
  const menuShown = nav.classList.contains("shown");

  // 1. Lav en if/else sætning => if (...) {...} else {...}
  // 2. Spørg om menuShown i if-sætningen => if (menuShown)
  if (menuShown) {
    // hvis nav har klassen "shown", sæt da btn.textContent til "Luk"
    btn.textContent = "X";
  } else {
    // hvis IKKE nav har klassen "shown", sæt da btn.textContent til "Menu"
    btn.textContent = "☰";
  }
}

/* Tilføj et klik-event til btn, der sætter toggleMenu-funktionen i gang */
btn.addEventListener("click", toggleMenu);
