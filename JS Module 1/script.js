// 1. JavaScript Basics & Setup
console.log("Welcome to the Community Portal");
window.onload = function () {
    alert("📢 Page is fully loaded!");
    const saved = localStorage.getItem('preferredEvent');
    if (saved) {
        document.getElementById('eventType').value = saved;
    }
};

// 2. Syntax, Data Types, and Operators
const eventName = "Community Music Night";
const eventDate = "2025-06-15";
let availableSeats = 50;
console.log(`🎶 ${eventName} on ${eventDate}, Seats Available: ${availableSeats}`);

// 3. Conditionals, Loops, and Error Handling
const events = [
    { name: "Music Fest", date: "2025-07-01", seats: 10, category: "Music" },
    { name: "Tech Talk", date: "2025-05-01", seats: 0, category: "Education" },
    { name: "Art Show", date: "2025-06-20", seats: 5, category: "Art" }
];

function displayEvents() {
    const list = document.getElementById('eventList');
    list.innerHTML = '';
    events.forEach(event => {
        const eventDate = new Date(event.date);
        const today = new Date();
        if (eventDate > today && event.seats > 0) {
            const li = document.createElement('li');
            li.textContent = `${event.name} (${event.category}) - ${event.date} - Seats: ${event.seats}`;
            list.appendChild(li);
        }
    });
}
try {
    displayEvents();
} catch (error) {
    console.error("❌ Error displaying events:", error);
}

// 4. Functions, Scope, Closures, Higher-Order Functions
function addEvent(event) {
    events.push(event);
}

function registerUser(eventName) {
    const event = events.find(e => e.name === eventName);
    if (event && event.seats > 0) {
        event.seats--;
        alert(`✅ Registered for ${event.name}`);
        displayEvents();
    } else {
        alert("❌ No seats available");
    }
}

function filterEventsByCategory(category) {
    return events.filter(e => e.category === category);
}

function createCategoryCounter() {
    let count = 0;
    return function () {
        return ++count;
    };
}
const musicCounter = createCategoryCounter();

// 5. Objects and Prototypes
function Event(name, date, seats) {
    this.name = name;
    this.date = date;
    this.seats = seats;
}
Event.prototype.checkAvailability = function () {
    return this.seats > 0;
};
const musicEvent = new Event("Jazz Night", "2025-07-20", 15);
console.log(Object.entries(musicEvent));

// 6. Arrays and Methods
const musicOnly = events.filter(e => e.category === "Music");
const formatted = events.map(e => `📌 ${e.name} (${e.category}) on ${e.date}`);

// 7. DOM Manipulation
function updateEventUI() {
    const container = document.getElementById("eventCards");
    container.innerHTML = "";
    events.forEach(e => {
        const card = document.createElement("div");
        card.className = "event-card";
        card.innerHTML = `<h3>${e.name}</h3><p>${e.date}</p><button onclick="registerUser('${e.name}')">Register</button>`;
        container.appendChild(card);
    });
}
updateEventUI();

// 8. Event Handling
document.getElementById("eventType").onchange = function () {
    const category = this.value;
    const filtered = filterEventsByCategory(category);
    console.log("Filtered Events:", filtered);
};

document.getElementById("searchBox").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        const term = e.target.value.toLowerCase();
        const matched = events.filter(ev => ev.name.toLowerCase().includes(term));
        console.log("Search Result:", matched);
    }
});

// 9. Async JS, Promises, Async/Await
async function fetchEvents() {
    try {
        document.getElementById("loader").style.display = "block";
        const response = await fetch("https://mocki.io/v1/1a361e6a-370b-4f13-9bc3-cdf1d9aa98a5"); // Replace with your mock endpoint
        const data = await response.json();
        console.log("Fetched Events:", data);
    } catch (err) {
        console.error("❌ Failed to fetch:", err);
    } finally {
        document.getElementById("loader").style.display = "none";
    }
}
// fetchEvents();

// 10. Modern JavaScript Features
function greetUser(name = "Guest") {
    console.log(`👋 Welcome, ${name}`);
}
const [firstEvent] = events;
const { name, date } = firstEvent;
const copiedEvents = [...events];

// 11. Working with Forms
document.getElementById("regForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = this.elements["name"].value;
    const email = this.elements["email"].value;
    const event = this.elements["event"].value;

    if (!name || !email) {
        alert("❌ Name and email are required");
        return;
    }

    document.getElementById("confirmation").textContent = `✅ Registered ${name} for ${event}`;
});

// 12. AJAX & Fetch API
function postRegistration(data) {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json" }
    })
        .then(res => res.json())
        .then(res => {
            console.log("Registration Response:", res);
            setTimeout(() => alert("🎉 Registration submitted!"), 2000);
        })
        .catch(err => console.error("❌ Error submitting registration:", err));
}

// 13. Debugging and Testing
// Use browser dev tools to debug errors, inspect variables, and network requests

// 14. jQuery and JS Frameworks
$(document).ready(function () {
    $("#registerBtn").click(() => {
        $("#confirmation").fadeIn().delay(2000).fadeOut();
    });
});

// 💡 You can now explore React/Vue for more interactive apps!

// 🔁 Your previous functions (from your original code) retained here:
function showConfirmation(e) {
    e.preventDefault();
    document.getElementById('confirmation').textContent = "✅ Your registration has been submitted!";
}

function validatePhone() {
    const phone = document.getElementById('phone').value;
    const pattern = /^[6-9]\d{9}$/;
    if (!pattern.test(phone)) {
        alert("❌ Invalid phone number");
    }
}

function countCharacters() {
    const message = document.getElementById('message').value;
    document.getElementById('charCount').textContent = message.length;
}

function videoReadyMessage() {
    document.getElementById("videoMsg").textContent = "🎬 Video ready to play!";
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError, { enableHighAccuracy: true, timeout: 10000 });
    } else {
        document.getElementById("locationOutput").textContent = "Geolocation not supported.";
    }
}

function showPosition(position) {
    document.getElementById("locationOutput").textContent =
        `📍 Your Location: Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
}

function showError(error) {
    let msg;
    switch (error.code) {
        case error.PERMISSION_DENIED:
            msg = "❌ User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            msg = "❌ Location information is unavailable.";
            break;
        case error.TIMEOUT:
            msg = "❌ The request to get user location timed out.";
            break;
        default:
            msg = "❌ An unknown error occurred.";
            break;
    }
    document.getElementById("locationOutput").textContent = msg;
}

function savePreference() {
    const selected = document.getElementById('eventType').value;
    localStorage.setItem('preferredEvent', selected);
}

function clearPreferences() {
    localStorage.clear();
    sessionStorage.clear();
    alert("🧹 Preferences cleared!");
}

window.onbeforeunload = function () {
    return "Are you sure you want to leave this page? Your form may not be submitted.";
};
