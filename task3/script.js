// OpenWeatherMap API integration
const API_KEY = '144ce192bd5ecae2e6cc2ba622b1d762'; // Replace with your real API key
const DEFAULT_CITY = 'Lahore';

function fetchWeather(city = DEFAULT_CITY) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
  Promise.all([
    fetch(url),
    fetch(forecastUrl)
  ])
    .then(([weatherRes, forecastRes]) => Promise.all([weatherRes.json(), forecastRes.json()]))
    .then(([data, forecastData]) => {
      if (data.cod !== 200) {
        document.querySelector('.weather-card').textContent = 'Weather data not found.';
        document.querySelector('.location').textContent = city;
        document.querySelector('.forecast-card').innerHTML = '';
        return;
      }
      const weatherHTML = `
        <div style="display:flex;align-items:center;gap:1.2em;">
          <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].main}" style="width:64px;height:64px;">
          <div>
            <div style="font-size:1.3em;font-weight:bold;">${data.name}, ${data.sys.country}</div>
            <div style="font-size:1.1em;">${data.weather[0].main} (${data.weather[0].description})</div>
            <div style="font-size:1.1em;">🌡️ ${data.main.temp}°C</div>
            <div style="font-size:1em;">💨 Wind: ${data.wind.speed} m/s</div>
            <div style="font-size:1em;">💧 Humidity: ${data.main.humidity}%</div>
          </div>
        </div>
      `;
      document.querySelector('.weather-card').innerHTML = weatherHTML;
      document.querySelector('.location').textContent = `${data.name}, ${data.sys.country}`;
      // 3-day forecast
      const forecastList = forecastData.list.filter(item => item.dt_txt.includes('12:00:00')).slice(0, 3);
      const forecastHTML = forecastList.map(f => `
        <div class="forecast-item">
          <span class="forecast-date">${new Date(f.dt_txt).toLocaleDateString()}</span>
          <img src="https://openweathermap.org/img/wn/${f.weather[0].icon}.png" alt="${f.weather[0].main}" class="forecast-icon">
          <span class="forecast-temp">${f.main.temp}°C</span>
        </div>
      `).join('');
      document.querySelector('.forecast-card').innerHTML = `<div class="forecast-title">3-Day Forecast</div><div class="forecast-list">${forecastHTML}</div>`;
    })
    .catch(() => {
      document.querySelector('.weather-card').textContent = 'Error fetching weather.';
      document.querySelector('.location').textContent = city;
      document.querySelector('.forecast-card').innerHTML = '';
    });
}

window.addEventListener('DOMContentLoaded', function() {
  // Map initialization
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

  // Weather fetch
  fetchWeather(DEFAULT_CITY);

  // Weather layer patterns for map overlays
  const layerButtons = document.querySelectorAll('.layer-btn');
  let currentLayer = 'temperature';

  // Remove existing overlays
  function clearWeatherLayers() {
    map.eachLayer(function(layer) {
      if (layer.options && layer.options.layerType) {
        map.removeLayer(layer);
      }
    });
  }

  // Add weather overlay based on selected layer
  function addWeatherLayer(type) {
    clearWeatherLayers();
    let tileUrl = '';
    let attribution = 'Weather data © OpenWeatherMap';
    switch(type) {
      case 'temperature':
        tileUrl = `https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${API_KEY}`;
        break;
      case 'precipitation':
        tileUrl = `https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${API_KEY}`;
        break;
      case 'pressure':
        tileUrl = `https://tile.openweathermap.org/map/pressure_new/{z}/{x}/{y}.png?appid=${API_KEY}`;
        break;
      case 'wind':
        tileUrl = `https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=${API_KEY}`;
        break;
      case 'clouds':
        tileUrl = `https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${API_KEY}`;
        break;
      default:
        return;
    }
    L.tileLayer(tileUrl, {
      attribution,
      maxZoom: 18,
      minZoom: 2,
      layerType: 'weather'
    }).addTo(map);
  }

  // Initial layer
  addWeatherLayer('temperature');

  layerButtons.forEach((btn, idx) => {
    btn.addEventListener('click', function() {
      layerButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const layerTypes = ['temperature', 'precipitation', 'pressure', 'wind', 'clouds'];
      addWeatherLayer(layerTypes[idx]);
    });
  });

  // Pin button: get weather for current location
  const pinBtn = document.querySelector('.pin-btn');
  pinBtn.addEventListener('click', function() {
    if (navigator.geolocation) {
      pinBtn.disabled = true;
      pinBtn.textContent = '⏳';
      navigator.geolocation.getCurrentPosition(function(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        // Reverse geocode to get city name
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
          .then(res => res.json())
          .then(data => {
            if (data.name) {
              fetchWeather(data.name);
            } else {
              fetchWeather(`${lat},${lon}`);
            }
            pinBtn.disabled = false;
            pinBtn.textContent = '📍';
          })
          .catch(() => {
            pinBtn.disabled = false;
            pinBtn.textContent = '📍';
          });
      }, function() {
        pinBtn.disabled = false;
        pinBtn.textContent = '📍';
        alert('Unable to get your location.');
      });
    } else {
      alert('Geolocation not supported.');
    }
  });

  // Sample notifications
  const notifications = [
    {
      title: 'Severe Weather Alert',
      message: 'Heavy rain expected in Lahore today. Stay safe!',
      time: '10:30 AM'
    },
    {
      title: 'UV Index High',
      message: 'UV index is high. Wear sunscreen if going outside.',
      time: '09:00 AM'
    },
    {
      title: 'Wind Advisory',
      message: 'Strong winds in the afternoon. Secure loose items.',
      time: '08:00 AM'
    }
  ];

  const notifContainer = document.querySelector('.notifications');
  if (notifContainer) {
    notifContainer.innerHTML = notifications.map(n => `
      <div class="notification">
        <div class="notif-title">${n.title}</div>
        <div class="notif-message">${n.message}</div>
        <div class="notif-time">${n.time}</div>
      </div>
    `).join('');
  }

  // Sample dashboard items for alerts, cases, triggers, reports
  const dashboardItems = [
    {
      type: 'alert',
      title: 'Flood Warning',
      message: 'River levels rising rapidly. Evacuate low-lying areas.',
      time: '11:00 AM',
      icon: '⚠️'
    },
    {
      type: 'case',
      title: 'Incident Case #1023',
      message: 'Reported power outage in Model Town.',
      time: '10:45 AM',
      icon: '📝'
    },
    {
      type: 'trigger',
      title: 'Rainfall Trigger',
      message: 'Automated alert sent for >50mm rainfall.',
      time: '10:15 AM',
      icon: '⏰'
    },
    {
      type: 'report',
      title: 'Daily Weather Report',
      message: 'Summary generated for Lahore region.',
      time: '09:30 AM',
      icon: '📄'
    }
  ];

  const dashboardContainer = document.querySelector('.dashboard-items');
  if (dashboardContainer) {
    dashboardContainer.innerHTML = dashboardItems.map(item => `
      <div class="dashboard-item dashboard-${item.type}">
        <div class="dashboard-icon">${item.icon}</div>
        <div class="dashboard-title">${item.title}</div>
        <div class="dashboard-message">${item.message}</div>
        <div class="dashboard-time">${item.time}</div>
      </div>
    `).join('');
  }

  // Search functionality
  const searchInput = document.querySelector('.search-bar');
  const searchBtn = document.querySelector('.search-btn');
  searchBtn.addEventListener('click', function() {
    const city = searchInput.value.trim();
    if (city) fetchWeather(city);
  });
  searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      const city = searchInput.value.trim();
      if (city) fetchWeather(city);
    }
  });

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