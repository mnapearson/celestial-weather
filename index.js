document.getElementById("welcome-button").addEventListener(
  "click",
  function () {
    document.getElementById("welcome").hidden = true;
    document.getElementById("homepage").hidden = false;
  },
  false
);

document.getElementById("magic-button").addEventListener(
  "click",
  function () {
    document.getElementById("magic-answer").hidden = false;
  },
  false
);

const urlAnswer = "https://crystal-ball-express.herokuapp.com/answers/random";
const urlMoon = "https://wttr.in/?format=%25m";
const urlWeather = "https://wttr.in/?format=2&%25=C";
const urlApod =
  "https://api.nasa.gov/planetary/apod?api_key=z73R3rNe2S3kyi1Edljco6bUuJ8HwFtnrBh8uFgb";
const urlRumi = "https://crystal-ball-express.herokuapp.com/quotes/random";
// const urlHoroscope =
//   "https://cors-anywhere.herokuapp.com/https://horoscope-api.herokuapp.com/horoscope/today/";

// const signs = [
//   "scorpio",
//   "capricorn",
//   "aries",
//   "gemini",
//   "virgo",
//   "libra",
//   "leo",
//   "sagittarius",
//   "cancer",
//   "pisces",
//   "taurus",
//   "aquarius",
// ];

// let selectedSign = null;
// document.querySelectorAll(".sign").forEach((sign) => {
//   sign.addEventListener("click", () => {
//     if (selectedSign && selectedSign != sign) {
//       selectedSign.classList.remove("selected");
//     }
//     sign.classList.toggle("selected");
//     selectedSign = sign;

//     for (const sign of signs) {
//       fetch(urlHoroscope + sign)
//         .then((response) => {
//           return response.json();
//         })
//         .then((data) => {
//           const p = document.createElement("p");
//           p.classList.add("horoscope");
//           p.textContent = data.horoscope;
//           document.querySelector("." + sign).appendChild(p);
//         });
//     }
//   });
// });

fetch(urlRumi)
  .then((response) => {
    return response.json();
  })
  .then((quotes) => {
    document.getElementById("rumi-api").textContent = JSON.stringify(
      quotes.quote
    );
  });

fetch(urlApod)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    document.getElementById("potd").setAttribute("src", data.url);
  });

fetch(urlApod)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    document.getElementById("apod-title").textContent = JSON.stringify(
      data.title
    );
  });

fetch(urlApod)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    document.getElementById("copyright").textContent = String(data.copyright);
  });

fetch(urlAnswer)
  .then((response) => {
    return response.json();
  })
  .then((answers) => {
    document.getElementById("magic-answer").textContent = String(
      answers.answer
    );
  });

fetch(urlMoon)
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.getElementById("moon-phase").textContent = "Moon Phase: " + data;
  });

fetch(urlWeather)
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.getElementById("current-weather").textContent =
      "Current weather: " + data;
  });
