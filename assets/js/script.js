const text =
  "In a world where reaction has become hesitation, I take a step to make it fundamental.";
const typingSpeed = 75; // Adjust this value to control the typing speed

const typingAnimation = document.getElementById("typing-animation");
const cursor = document.getElementById("cursor");

let charIndex = 0;

function typeText() {
  if (charIndex < text.length) {
    typingAnimation.textContent += text.charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else {
    cursor.style.display = "none";
  }
}

typeText();

var yt = document.querySelector("#yt");
yt.addEventListener("click", function () {
  window.open("https://www.youtube.com/@studentreact5", "_blank");
});

function openPopup() {
  const popup = document.querySelector(".popup");
  const screenBg = document.querySelector(".screen-bg");

  setTimeout(function () {
    popup.style.display = "block";
    popup.style.opacity = "1";
    screenBg.style.display = "block";
  }, 300);
}

function closePopup() {
  const popup = document.querySelector(".popup");
  const screenBg = document.querySelector(".screen-bg");

  setTimeout(function () {
    popup.style.display = "none";
    popup.style.opacity = "0";
    screenBg.style.display = "none";
  }, 300);
}

const openButton = document.querySelector("#lt");
openButton.addEventListener("click", openPopup);

const closeButton = document.querySelector(".close-btn");
closeButton.addEventListener("click", closePopup);

var lists = ["threads", "mail", "x", "telegram", "instagram"];

for (var i = 0; i < lists.length; i++) {
  var adl = document.querySelector("." + lists[i]);
  if (lists[i] == "x") {
    adl.addEventListener("click", function () {
      window.open("https://twitter.com/studentreact5", "_blank");
    });
  }
  if (lists[i] == "mail") {
    adl.addEventListener("click", function () {
      window.open("mailto:sr@devh.in", "_blank");
    });
  }
  if (lists[i] == "threads") {
    adl.addEventListener("click", function () {
      window.open("https://threads.net/@studentreact5", "_blank");
    });
  }
  if (lists[i] == "telegram") {
    adl.addEventListener("click", function () {
      window.open("https://telegram.dog/studentreact5", "_blank");
    });
  }
  if (lists[i] == "instagram") {
    adl.addEventListener("click", function () {
      window.open("https://instagram.com/studentreact5", "_blank");
    });
  }
}

const screenBg = document.querySelector(".screen-bg");

screenBg.addEventListener("click", closePopup);

const sftrBtn = document.querySelector(".up-btn-show-footer");

sftrBtn.addEventListener("click", function () {
  const footer = document.querySelector(".footer");
  footer.style.display = "block";
  footer.style.opacity = "1";
  footer.style.transition = "0.3s ease-in-out";
  footer.style.bottom = "0px";
  sftrBtn.style.display = "none";
});
