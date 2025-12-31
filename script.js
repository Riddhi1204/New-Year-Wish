const music = document.getElementById("bgMusic");

/* NAME TYPING */
const nameText = "Rakesh";
let n = 0;
const nameEl = document.getElementById("name");
(function typeName(){
  if(n < nameText.length){
    nameEl.innerHTML += nameText[n++];
    setTimeout(typeName,300);
  }
})();

/* HOLD TO CONTINUE */
let holdTimer;
document.getElementById("holdBtn").addEventListener("mousedown", () => {
  holdTimer = setTimeout(() => {
    document.getElementById("popup1").classList.remove("active");
    document.getElementById("popup2").classList.add("active");
    music.play();
  }, 1200);
});
document.getElementById("holdBtn").addEventListener("mouseup", () => clearTimeout(holdTimer));

/* POPUP FLOW */
function showGift(){
  document.getElementById("popup2").classList.remove("active");
  document.getElementById("giftPopup").classList.add("active");
}

function enterMainSite(){
  document.getElementById("giftPopup").classList.remove("active");
  document.getElementById("mainSite").classList.remove("hidden");
}

/* SLIDESHOW */
const slides = document.querySelectorAll(".slideshow img");
let index = 0;
setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 3000);

/* FLOATING HEARTS */
setInterval(() => {
  const h = document.createElement("span");
  h.innerText = "💖";
  h.style.left = Math.random() * 100 + "vw";
  document.querySelector(".hearts").appendChild(h);
  setTimeout(() => h.remove(), 6000);
}, 400);

/* FIREWORKS */
const c = document.getElementById("fireworks");
const ctx = c.getContext("2d");
function resize(){
  c.width = innerWidth;
  c.height = innerHeight;
}
resize();
onresize = resize;
setInterval(() => {
  ctx.fillStyle = `hsl(${Math.random()*360},100%,70%)`;
  ctx.beginPath();
  ctx.arc(Math.random()*c.width, Math.random()*c.height/2, 3, 0, Math.PI*2);
  ctx.fill();
}, 60);

/* LOVE DURATION TIMER */
const startDate = new Date("2025-09-24T00:00:00");
const countdown = document.getElementById("countdown");

setInterval(() => {
  let diff = new Date() - startDate;
  const d = Math.floor(diff/86400000);
  diff %= 86400000;
  const h = Math.floor(diff/3600000);
  diff %= 3600000;
  const m = Math.floor(diff/60000);
  const s = Math.floor((diff%60000)/1000);

  countdown.innerHTML = `
    ${d} days ${h} hours ${m} minutes ${s} seconds<br>
    <small>since 24 September 2025 💖</small>
  `;
}, 1000);
