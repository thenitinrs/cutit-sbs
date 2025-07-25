// Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

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

// Init Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Shorten
document.getElementById("finalShorten").onclick = async () => {
  const url = document.getElementById("urlInput").value;
  if (!url) return alert("👻 Paste something first!");

  const code = Math.random().toString(36).substring(2, 8);
  await addDoc(collection(db, "links"), {
    code,
    url
  });

  const short = `https://cutit.sbs/l/${code}`;
  document.getElementById("output").innerHTML = `
    <p>✨ Your link:</p>
    <a href="${short}" target="_blank">${short}</a>
  `;

  // QR Code
  QRCode.toDataURL(short, (err, url) => {
    if (!err) {
      document.getElementById("output").innerHTML += `
        <img src="${url}" style="margin-top:1rem;width:150px;"/>
      `;
    }
  });
};
