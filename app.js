import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  // Paste your Firebase config here
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.shortenLink = async () => {
  const longUrl = document.getElementById('longUrl').value;
  if (!longUrl) return alert('Paste something!');

  const docRef = await addDoc(collection(db, "links"), {
    longUrl,
    createdAt: new Date()
  });

  const shortUrl = `https://cutit.sbs/l/${docRef.id}`;
  document.getElementById('output').innerText = `Shortened: ${shortUrl}`;
};

window.generateQR = () => {
  // Add QRCode.js logic later
  alert("QR code feature coming soon!");
};

window.customLink = () => {
  window.location.href = "https://rzp.io/l/custom-url-cutit"; // Razorpay link
};
