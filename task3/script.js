const apiKey = '144ce192bd5ecae2e6cc2ba622b1d762'; // Replace with your OpenWeatherMap API key

const weatherDiv = document.getElementById('weather');
const forecastDiv = document.getElementById('forecast');
const loadingDiv = document.getElementById('loading');
const searchForm = document.getElementById('search-form');
const cityInput = document.getElementById('city-input');
const geoBtn = document.getElementById('geo-btn');
const cityTitle = document.getElementById('city-title');
const alertsList = document.getElementById('alerts-list');
const currentDate = document.getElementById('current-date');

function showLoading(show) {
  loadingDiv.classList.toggle('hidden', !show);
}

function renderWeather(data) {
  const { name, main, weather, wind, clouds, sys } = data;
  let country = sys && sys.country ? sys.country : '';
  cityTitle.textContent = country ? `${name}, ${country}` : name;
  weatherDiv.innerHTML = `
    <div style="display:flex;align-items:center;gap:1.2rem;margin-bottom:0.7rem;">
      <span style="font-size:2.3rem;font-weight:700;">${main.temp}°C</span>
      <img class="weather-icon" src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="${weather[0].description}" />
    </div>
    <div style="font-size:1.15rem;font-weight:600;margin-bottom:0.3rem;"><b>${weather[0].main}</b> <span style="font-weight:400;">(${weather[0].description})</span></div>
    <div style="margin-bottom:0.2rem;">🌡️ <b>Feels like:</b> ${main.feels_like}°C</div>
    <div style="margin-bottom:0.2rem;">💧 <b>Humidity:</b> ${main.humidity}%</div>
    <div style="margin-bottom:0.2rem;">💨 <b>Wind:</b> ${wind.speed} m/s</div>
    <div style="margin-bottom:0.2rem;">☁️ <b>Clouds:</b> ${clouds.all}%</div>
    <div style="margin-bottom:0.2rem;">🧭 <b>Pressure:</b> ${main.pressure} hPa</div>
  `;
}

function renderForecast(data) {
  // 3-day forecast: get one forecast per day (every 8th item, as data is every 3 hours)
  const days = [];
  for (let i = 7; i < data.list.length; i += 8) {
    days.push(data.list[i]);
  }
  forecastDiv.innerHTML = days.map(day => {
    const date = new Date(day.dt * 1000);
    return `
      <div class="forecast-day">
        <div style="font-weight:600;">${date.toLocaleDateString(undefined, { weekday: 'short', day: 'numeric', month: 'short' })}</div>
        <img class="weather-icon" src="https://openweathermap.org/img/wn/${day.weather[0].icon}.png" alt="${day.weather[0].description}" />
        <div style="font-size:1.1em;font-weight:700;">${day.main.temp}°C</div>
        <div style="font-size:0.97em;">${day.weather[0].main}</div>
      </div>
    `;
  }).join('');
}

async function fetchWeather(city) {
  showLoading(true);
  weatherDiv.innerHTML = '';
  forecastDiv.innerHTML = '';
  try {
    const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`);
    if (!weatherRes.ok) throw new Error('City not found');
    const weatherData = await weatherRes.json();
    renderWeather(weatherData);

    const forecastRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`);
    if (!forecastRes.ok) throw new Error('Forecast not found');
    const forecastData = await forecastRes.json();
    renderForecast(forecastData);

    // Alerts (OpenWeatherMap One Call API is required for real alerts, here is a placeholder)
    renderAlerts([]);
  } catch (err) {
    weatherDiv.innerHTML = `<div style="color:red;">${err.message}</div>`;
    forecastDiv.innerHTML = '';
  } finally {
    showLoading(false);
  }
}

async function fetchWeatherByCoords(lat, lon) {
  showLoading(true);
  weatherDiv.innerHTML = '';
  forecastDiv.innerHTML = '';
  try {
    const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
    if (!weatherRes.ok) throw new Error('Location not found');
    const weatherData = await weatherRes.json();
    renderWeather(weatherData);

    const forecastRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
    if (!forecastRes.ok) throw new Error('Forecast not found');
    const forecastData = await forecastRes.json();
    renderForecast(forecastData);

    // Alerts placeholder
    renderAlerts([]);
  } catch (err) {
    weatherDiv.innerHTML = `<div style="color:red;">${err.message}</div>`;
    forecastDiv.innerHTML = '';
  } finally {
    showLoading(false);
  }
}


searchForm.addEventListener('submit', e => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (city) fetchWeather(city);
});

geoBtn.addEventListener('click', () => {
  if (!navigator.geolocation) {
    alert('Geolocation is not supported by your browser.');
    return;
  }
  showLoading(true);
  navigator.geolocation.getCurrentPosition(
    pos => {
      fetchWeatherByCoords(pos.coords.latitude, pos.coords.longitude);
    },
    err => {
      showLoading(false);
      alert('Unable to retrieve your location.');
    }
  );
});

function renderAlerts(alerts) {
  if (!alertsList) return;
  if (!alerts || alerts.length === 0) {
    alertsList.innerHTML = `<div style="color:#aaa;">No alerts</div>`;
    return;
  }
  alertsList.innerHTML = alerts.map(alert => `
    <div class="alert-item">
      <span class="alert-type">${alert.event || 'Alert'}</span>
      <span class="alert-desc">${alert.description || ''}</span>
      <span class="alert-time">${alert.start ? new Date(alert.start * 1000).toLocaleString() : ''}</span>
    </div>
  `).join('');
}

// Set current date in sidebar
if (currentDate) {
  const now = new Date();
  currentDate.textContent = now.toLocaleDateString(undefined, { day: '2-digit', month: 'long', year: 'numeric' });
}


// --- Sidebar Interactivity ---
document.querySelectorAll('.sidebar-nav a').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.sidebar-nav a').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
  });
});

// --- Map Tab Interactivity & Map Preview ---
const mapPreview = document.getElementById('weather-map');
const mapTabs = document.querySelectorAll('.weather-map-controls .tab');
const owmTileLayers = {
  temp: 'temp_new',
  precip: 'precipitation_new',
  pressure: 'pressure_new',
  wind: 'wind_new',
  clouds: 'clouds_new',
};
let currentLayer = 'temp';

function updateMapPreview(layer = 'temp') {
  // Use OpenWeatherMap tile preview (static image for demo)
  // For real interactive map, use Leaflet or similar
  const center = '31.5497,74.3436'; // Lahore, PK
  const zoom = 5;
  const tile = owmTileLayers[layer] || owmTileLayers.temp;
  // OWM tile preview (static, not interactive)
  mapPreview.innerHTML = `<img src="https://tile.openweathermap.org/map/${tile}/${zoom}/28/15.png?appid=${apiKey}" alt="${layer} map" style="width:100%;max-width:350px;border-radius:10px;">`;
}

mapTabs.forEach(tab => {
  tab.addEventListener('click', function() {
    mapTabs.forEach(t => t.classList.remove('active'));
    this.classList.add('active');
    currentLayer = this.getAttribute('data-tab');
    updateMapPreview(currentLayer);
  });
});

updateMapPreview(currentLayer);

// --- Alerts/Reports/Cases/Triggers Tabs ---
const alertsTabs = document.querySelectorAll('.alerts-tabs button');
const alertsListDiv = document.getElementById('alerts-list');
const mockData = {
  all: [
    { type: 'Alert', event: 'Severe Rain', desc: 'Heavy rain expected in Karachi', time: 'Today 14:00' },
    { type: 'Case', event: 'Temperature Drop', desc: 'Temp below 10°C in Lahore', time: 'Today 09:00' },
    { type: 'Report', event: 'Weather Report', desc: 'Clear skies in Islamabad', time: 'Yesterday 16:00' },
    { type: 'Trigger', event: 'Wind Alert', desc: 'High wind speed in Quetta', time: 'Today 11:00' },
  ],
  alerts: [
    { type: 'Alert', event: 'Severe Rain', desc: 'Heavy rain expected in Karachi', time: 'Today 14:00' },
  ],
  cases: [
    { type: 'Case', event: 'Temperature Drop', desc: 'Temp below 10°C in Lahore', time: 'Today 09:00' },
  ],
  reports: [
    { type: 'Report', event: 'Weather Report', desc: 'Clear skies in Islamabad', time: 'Yesterday 16:00' },
  ],
  triggers: [
    { type: 'Trigger', event: 'Wind Alert', desc: 'High wind speed in Quetta', time: 'Today 11:00' },
  ],
};

function renderAlertsTab(tab) {
  const items = mockData[tab] || [];
  if (!items.length) {
    alertsListDiv.innerHTML = `<div style="color:#aaa;">No ${tab} found</div>`;
    return;
  }
  alertsListDiv.innerHTML = items.map(item => `
    <div class="alert-item" style="display:flex;align-items:center;gap:0.7em;padding:0.5em 0;border-bottom:1px solid #31343c;">
      <span class="alert-type" style="font-weight:600;color:#ffb86b;min-width:60px;">${item.type}</span>
      <span class="alert-desc" style="flex:1;">${item.event} - ${item.desc}</span>
      <span class="alert-time" style="font-size:0.97em;color:#aaa;">${item.time}</span>
    </div>
  `).join('');
}

alertsTabs.forEach(tab => {
  tab.addEventListener('click', function() {
    alertsTabs.forEach(t => t.classList.remove('active'));
    this.classList.add('active');
    const tabName = this.textContent.trim().toLowerCase().replace(' ', '');
    renderAlertsTab(tabName === 'all' ? 'all' : tabName);
  });
});

renderAlertsTab('all');

// Initial load (default city: Karachi, Pakistan)
fetchWeather('Karachi');

// Initialize Leaflet map preview
window.addEventListener('DOMContentLoaded', function() {
  var map = L.map('map', {
    center: [31.5497, 74.3436], // Lahore, PK
    zoom: 10,
    zoomControl: true,
    attributionControl: true
  });
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 18,
    minZoom: 2
  }).addTo(map);

  // Dark mode toggle
  var darkToggle = document.getElementById('darkmode-toggle');
  darkToggle.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode', darkToggle.checked);
    document.querySelector('.sidebar').classList.toggle('dark-mode', darkToggle.checked);
    document.querySelector('.main-content').classList.toggle('dark-mode', darkToggle.checked);
    document.querySelector('.weather-card').classList.toggle('dark-mode', darkToggle.checked);
    document.getElementById('map').classList.toggle('dark-mode', darkToggle.checked);
  });
});