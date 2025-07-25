
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getFirestore, collection, addDoc, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-analytics.js";
import QRCode from "https://cdn.jsdelivr.net/npm/qrcode@1.5.1/build/qrcode.min.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDk5GSy3y0g9iO6S6mzcr-MoZ-mGNJojOI",
  authDomain: "cutit-74ff4.firebaseapp.com",
  projectId: "cutit-74ff4",
  storageBucket: "cutit-74ff4.appspot.com",
  messagingSenderId: "665495125746",
  appId: "1:665495125746:web:eb6dc0d361ab485fe25a6b",
  measurementId: "G-WC70F5PK7P"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// Main functionality
const linkInput = document.getElementById("linkInput");
const shortenBtn = document.getElementById("shortenBtn");
const output = document.getElementById("shortenedLink");
const qrCanvas = document.getElementById("qrCanvas");

shortenBtn.onclick = async () => {
  const mode = document.querySelector(".tab-btn.active").dataset.tab;
  const link = linkInput.value.trim();

  if (!link) return alert("Paste a link first!");

  if (mode === "qr") {
    output.textContent = "";
    QRCode.toCanvas(qrCanvas, link, { color: { dark: "#00ffcc", light: "#0000" } });
    return;
  }

  if (mode === "shorten" || mode === "custom") {
    const id = Math.random().toString(36).substr(2, 6);
    await addDoc(collection(db, "urls"), { id, long: link });
    const shortUrl = `${location.origin}/l/${id}`;
    output.textContent = shortUrl;
    QRCode.toCanvas(qrCanvas, shortUrl, { color: { dark: "#00ffcc", light: "#0000" } });
  }
};

// Mode switcher
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});
