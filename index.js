document.getElementById("welcome-button").addEventListener(
  "click",
  function () {
    document.getElementById("welcome").hidden = true;
    document.getElementById("homepage").hidden = false;
    document.getElementById("weather").hidden = false;
    document.getElementById("welcome-button").hidden = true;
  },
  false
);

document.getElementById("goback").addEventListener("click", function () {
  document.getElementById("welcome").hidden = false;
  document.getElementById("homepage").hidden = true;
  document.getElementById("weather").hidden = true;
  document.getElementById("nasa").hidden = true;
  document.getElementById("rumi").hidden = true;
  document.getElementById("dailyhoro").hidden = true;
  document.getElementById("crystal").hidden = true;
  document.getElementById("welcome-button").hidden = false;
});

document.getElementById("apod-cloud").addEventListener("click", function () {
  document.getElementById("homepage").hidden = true;
  document.getElementById("weather").hidden = true;
  document.getElementById("nasa").hidden = false;
});

document.getElementById("rumi-cloud").addEventListener("click", function () {
  document.getElementById("homepage").hidden = true;
  document.getElementById("weather").hidden = true;
  document.getElementById("rumi").hidden = false;
});

document
  .getElementById("horoscope-cloud")
  .addEventListener("click", function () {
    document.getElementById("homepage").hidden = true;
    document.getElementById("weather").hidden = true;
    document.getElementById("dailyhoro").hidden = false;
  });

document.getElementById("crystal-cloud").addEventListener("click", function () {
  document.getElementById("homepage").hidden = true;
  document.getElementById("weather").hidden = true;
  document.getElementById("crystal").hidden = false;
});

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
const urlHoroscope =
  "https://cors-anywhere.herokuapp.com/https://horoscope-api.herokuapp.com/horoscope/today/";

const signs = [
  "scorpio",
  "capricorn",
  "aries",
  "gemini",
  "virgo",
  "libra",
  "leo",
  "sagittarius",
  "cancer",
  "pisces",
  "taurus",
  "aquarius",
];

let selectedSign = null;
document.querySelectorAll(".sign").forEach((sign) => {
  sign.addEventListener("click", () => {
    if (selectedSign && selectedSign != sign) {
      selectedSign.classList.remove("selected");
    }
    sign.classList.toggle("selected");
    selectedSign = sign;
    if (sign.querySelector(".horoscope")) {
      return;
    }

    fetch(urlHoroscope + sign.dataset.sign)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const p = document.createElement("p");
        p.classList.add("horoscope");
        p.textContent = data.horoscope;
        document.querySelector("." + sign.dataset.sign).appendChild(p);
      });
  });
});

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
