// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";

// Firebase Config (safe public info)
const firebaseConfig = {
  apiKey: "AIzaSyDk5GSy3y0g9iO6S6mzcr-MoZ-mGNJojOI",
  authDomain: "cutit-74ff4.firebaseapp.com",
  projectId: "cutit-74ff4",
  storageBucket: "cutit-74ff4.firebasestorage.app",
  messagingSenderId: "665495125746",
  appId: "1:665495125746:web:eb6dc0d361ab485fe25a6b",
  measurementId: "G-WC70F5PK7P"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// Shorten link
window.shortenLink = async () => {
  const longUrl = document.getElementById("longUrl").value;
  if (!longUrl) {
    alert("Paste something, bro!");
    return;
  }

  try {
    const docRef = await addDoc(collection(db, "links"), {
      longUrl,
      createdAt: new Date()
    });

    const shortUrl = `https://cutit.sbs/l/${docRef.id}`;
    document.getElementById("output").innerHTML = `
      🔗 <a href="${shortUrl}" target="_blank">${shortUrl}</a>
    `;
  } catch (error) {
    console.error("Error:", error);
    alert("Oops! Something broke.");
  }
};

// QR & Custom buttons
window.generateQR = () => {
  alert("QR code feature coming soon!");
};

window.customLink = () => {
  window.location.href = "https://rzp.io/l/custom-url-cutit"; // Razorpay ₹1 link
};
