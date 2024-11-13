//Togle Class Active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika menu-content di klik
document.querySelector("#menu-conten").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Jika klik bagian luar sidebar menu untuk menghilangkan navbar-conten
const menu = document.querySelector("#menu-conten");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

let nexDon = document.getElementById("next");
let prevDom = document.getElementById("prev");
let crouselDon = document.querySelector(".crousel");
let listitenDon = document.querySelector(".carousel .list");
let thumbnailDon = document.querySelector(".carousel .thumbnail");

nexDon.onclick = function () {
  showSlider("next");
};

prevDom.onclick = function () {
  showSlider("prev");
};
let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(() => {
  nexDon.click();
}, timeAutoNext);
function showSlider(type) {
  let itemSlider = document.querySelectorAll(".carousel .list .item");
  let itemThumnail = document.querySelectorAll(".carausel .thumbnail .item");

  if (type === "next") {
    listitenDon.appendChild(itemSlider[0]);
    thumbnailDon.appendChild(itemThumnail[0]);
    crouselDon.classList.add("next");
  } else {
    let positionLastItem = itemSlider.length - 1;
    listitenDon.prepend(itemSlider[positionLastItem]);
    thumbnailDon.prepend(itemThumnail[positionLastItem]);
    crouselDon.classList.add("prev");
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    crouselDon.classList.remove("next");
    crouselDon.classList.remove("prev");
  }, timeRunning);

  clearTimeout(runAutoRun);
  runAutoRun = setTimeout(() => {
    nexDon.click();
  }, timeAutoNext);
}

indexedDB.getElementById("menu-conten").addEventListener("click", function () {
  const navMenu = document.querySelector(".navbar-nav");
  navMenu.classList.toggle("active");
});
