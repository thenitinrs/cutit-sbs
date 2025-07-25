import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";

// Firebase Config (safe keys)
const firebaseConfig = {
  apiKey: "AIzaSyDk5GSy3y0g9iO6S6mzcr-MoZ-mGNJojOI",
  authDomain: "cutit-74ff4.firebaseapp.com",
  projectId: "cutit-74ff4",
  storageBucket: "cutit-74ff4.firebasestorage.app",
  messagingSenderId: "665495125746",
  appId: "1:665495125746:web:eb6dc0d361ab485fe25a6b",
  measurementId: "G-WC70F5PK7P"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

window.shortenLink = async () => {
  const longUrl = document.getElementById("longUrl").value;
  if (!longUrl) return alert("Paste something, bro 🤨");

  try {
    const docRef = await addDoc(collection(db, "links"), {
      longUrl,
      createdAt: new Date()
    });

    const shortUrl = `https://cutit.sbs/l/${docRef.id}`;
    document.getElementById("output").innerHTML = `🔗 <a href="${shortUrl}" target="_blank">${shortUrl}</a>`;
  } catch (err) {
    console.error(err);
    alert("Bruh, Firestore said no 😤");
  }
};

window.generateQR = () => {
  alert("QR feature dropping soon, hold tight 🤖");
};

window.customLink = () => {
  window.location.href = "https://rzp.io/l/custom-url-cutit";
};
