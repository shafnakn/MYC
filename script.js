const calendar = document.getElementById("calendar");
const popup = document.getElementById("popup");
const messageBox = document.getElementById("message");
const popupImage = document.getElementById("popupImage");

const messages = [
  { text: "Even Doctor Strange gets tired, you know.", img: "drs.jpg" },
  { text: "404:FUTURE NOT FOUND.", img: "fnt.png" },
  { text: "we don't support time travel yet", img: "future3.png" },
  {text:"don't day dream like reaching the moon",img:"future4.jpg"},
  {text:"looks like you will get your valentine",img:"future5.jpg"},
  {text:"if you want this the get out and go work!!!",img:"future6.jpg"},
  {text:"why so serious!",img:"future8.jpg"},
  {text:"get out and go work",img:"future9.jpg"},
  {text:"24/7 just gaming",img:"game.jpg"},
  {text:"have you got your parachute",img:"skydive.jpg"}
]

function showPopup(text, imgSrc) {
  messageBox.innerText = text;

  if (imgSrc) {
    popupImage.src = imgSrc;
    popupImage.style.display = "block";
  } else {
    popupImage.style.display = "none";
  }

  popup.classList.remove("hidden");
  popup.classList.add("show");
}

function closePopup() {
  popup.classList.remove("show");
  popup.classList.add("hidden");
}


const today = new Date();
today.setHours(0, 0, 0, 0);

const year = today.getFullYear();
const month = today.getMonth();
const daysInMonth = new Date(year, month + 1, 0).getDate();

for (let day = 1; day <= daysInMonth; day++) {
  const date = new Date(year, month, day);
  date.setHours(0, 0, 0, 0);

  const dayElement = document.createElement("div");
  dayElement.classList.add("day");
  dayElement.innerText = day;

  if (date.getTime() === today.getTime()) {
    dayElement.classList.add("today");
    dayElement.addEventListener("click", () => {
      showPopup("Solve the problem yet yesterday");
    });
  } else if (date > today) {
    dayElement.classList.add("future");
    dayElement.addEventListener("click", () => {
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      showPopup(randomMessage.text, randomMessage.img);
    });
  } else {
    dayElement.addEventListener("click", () => {
      alert("PAST IS PAST, DON'T THINK ABOUT IT!");
    });
  }

  calendar.appendChild(dayElement);
}
const bgMusic = document.getElementById("bgMusic");

function enableMusic() {
  bgMusic.play().catch(err => console.log("Autoplay blocked:", err));
  document.removeEventListener("click", enableMusic); // only trigger once
}

document.addEventListener("click", enableMusic);
