document.getElementById("welcome-button").addEventListener(
  "click",
  function () {
    document.getElementById("welcome").hidden = true;
    document.getElementById("homepage").hidden = false;
  },
  false
);

let selectedSign = null;
document.querySelectorAll(".sign").forEach((sign) => {
  sign.addEventListener("dblclick", () => {
    if (selectedSign && selectedSign != sign) {
      selectedSign.classList.remove("selected");
    }
    sign.classList.toggle("selected");
    selectedSign = sign;
    sign.querySelector(".birthdates").hidden = false;
  });
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

fetch(
  "https://cors-anywhere.herokuapp.com/https://horoscope-api.herokuapp.com/horoscope/today/scorpio"
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    document.getElementById("horoscope-scorpio").textContent = String(
      data.horoscope
    );
  });

fetch(
  "https://cors-anywhere.herokuapp.com/https://horoscope-api.herokuapp.com/horoscope/today/sagittarius"
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    document.getElementById("horoscope-sagittarius").textContent = String(
      data.horoscope
    );
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
