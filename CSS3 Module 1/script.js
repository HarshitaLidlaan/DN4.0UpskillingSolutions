
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

window.onload = function () {
    const saved = localStorage.getItem('preferredEvent');
    if (saved) {
        document.getElementById('eventType').value = saved;
    }
};

window.onbeforeunload = function () {
    return "Are you sure you want to leave this page? Your form may not be submitted.";
};

console.log("JS is working!");
