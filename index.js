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
const urlMoon = "https://wttr.in/leipzig?format=%25m";
const urlWeather = "https://wttr.in/leipzig?format=2&%25=C";
const urlApod =
  "https://api.nasa.gov/planetary/apod?api_key=z73R3rNe2S3kyi1Edljco6bUuJ8HwFtnrBh8uFgb";

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
    document.getElementById("magic-answer").textContent = JSON.stringify(
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
      "Leipzig's weather: " + data;
  });
