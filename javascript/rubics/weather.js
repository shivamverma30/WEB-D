const API_KEY = 'ff02de2f90f464cb28f1319ec0e79d26';

const authForms = document.getElementById('auth-forms');
const weatherContainer = document.getElementById('weather-container');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const signinForm = document.getElementById('signin-form');
const signupFormElement = document.getElementById('signup-form-element');
const userGreeting = document.getElementById('user-greeting');
const logoutBtn = document.getElementById('logout-btn');
const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');

document.getElementById('show-signup').addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.style.display = 'none';
  signupForm.style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', (e) => {
  e.preventDefault();
  signupForm.style.display = 'none';
  loginForm.style.display = 'block';
});

signupFormElement.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('signup-username').value.trim();
  const password = document.getElementById('signup-password').value.trim();
  const confirmPassword = document.getElementById('signup-confirm').value.trim();

  if (password !== confirmPassword) {
    alert("Passwords don't match!");
    return;
  }

  const users = JSON.parse(localStorage.getItem('users') || '{}');
  if (users[username]) {
    alert('Username already exists!');
    return;
  }

  users[username] = { password };
  localStorage.setItem('users', JSON.stringify(users));
  alert('Account created! You can now log in.');
  signupForm.style.display = 'none';
  loginForm.style.display = 'block';
});

signinForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value.trim();
  const users = JSON.parse(localStorage.getItem('users') || '{}');

  if (users[username]?.password === password) {
    sessionStorage.setItem('currentUser', username);
    authForms.style.display = 'none';
    weatherContainer.style.display = 'block';
    userGreeting.textContent = `Welcome, ${username}!`;
    initWeatherApp();
  } else {
    alert('Invalid username or password!');
  }
});

logoutBtn.addEventListener('click', () => {
  sessionStorage.removeItem('currentUser');
  weatherContainer.style.display = 'none';
  authForms.style.display = 'block';
});

function initWeatherApp() {
  const currentUser = sessionStorage.getItem('currentUser');
  const users = JSON.parse(localStorage.getItem('users') || '{}');

  if (users[currentUser]?.preferredCity) {
    getWeatherByCity(users[currentUser].preferredCity);
  } else {
    navigator.geolocation.getCurrentPosition(
      (position) => getWeatherByCoords(position.coords.latitude, position.coords.longitude),
      () => getWeatherByCity('New York')
    );
  }
}

function getWeatherByCoords(lat, lon) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(data => updateWeatherUI(data))
    .catch(console.error);
}

function getWeatherByCity(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(data => {
      updateWeatherUI(data);
      saveUserCityPreference(city);
    })
    .catch(() => alert('City not found!'));
}

function updateWeatherUI(data) {
  const weatherInfo = document.getElementById('weather-info');
  cityInput.value = data.name;

  weatherInfo.innerHTML = `
    <div class="location-info">
      <h2>${data.name}, ${data.sys.country}</h2>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather icon">
    </div>
    <div class="temperature-info">
      <h1>${Math.round(data.main.temp)}°C</h1>
      <p>Feels like: ${Math.round(data.main.feels_like)}°C</p>
      <p>${data.weather[0].description}</p>
    </div>
    <div class="weather-details">
      <div>Humidity: ${data.main.humidity}%</div>
      <div>Wind: ${data.wind.speed} m/s</div>
    </div>
  `;
  speakWeather(data);
}

function saveUserCityPreference(city) {
  const currentUser = sessionStorage.getItem('currentUser');
  if (!currentUser) return;
  const users = JSON.parse(localStorage.getItem('users') || '{}');
  users[currentUser].preferredCity = city;
  localStorage.setItem('users', JSON.stringify(users));
}

function speakWeather(data) {
  if (!window.speechSynthesis) return;

  const msg = new SpeechSynthesisUtterance(
    `Current temperature in ${data.name} is ${Math.round(data.main.temp)} degrees Celsius with ${data.weather[0].description}`
  );

  const setVoiceAndSpeak = () => {
    const voice = speechSynthesis.getVoices().find(v => v.lang.includes('en'));
    if (voice) msg.voice = voice;
    speechSynthesis.speak(msg);
  };

  if (speechSynthesis.getVoices().length === 0) {
    speechSynthesis.addEventListener('voiceschanged', setVoiceAndSpeak);
  } else {
    setVoiceAndSpeak();
  }
}

document.getElementById('speak-btn').addEventListener('click', () => {
  if (!window.webkitSpeechRecognition) return alert('Voice search not supported!');
  const recognition = new webkitSpeechRecognition();
  recognition.lang = 'en-US';
  recognition.onresult = (e) => {
    cityInput.value = e.results[0][0].transcript;
    getWeatherByCity(cityInput.value);
  };
  recognition.start();
});

searchBtn.addEventListener('click', () => getWeatherByCity(cityInput.value.trim()));
cityInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') getWeatherByCity(cityInput.value.trim());
});

window.addEventListener('load', () => {
  const currentUser = sessionStorage.getItem('currentUser');
  if (currentUser) {
    authForms.style.display = 'none';
    weatherContainer.style.display = 'block';
    userGreeting.textContent = `Welcome, ${currentUser}!`;
    initWeatherApp();
  }
});
