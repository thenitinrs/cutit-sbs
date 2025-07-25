import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDk5GSy3y0g9iO6S6mzcr-MoZ-mGNJojOI",
  authDomain: "cutit-74ff4.firebaseapp.com",
  projectId: "cutit-74ff4",
  storageBucket: "cutit-74ff4.appspot.com",
  messagingSenderId: "665495125746",
  appId: "1:665495125746:web:eb6dc0d361ab485fe25a6b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const shortenBtn = document.getElementById("shortenBtn");
const qrBtn = document.getElementById("qrBtn");
const customBtn = document.getElementById("customBtn");
const finalShorten = document.getElementById("finalShorten");

shortenBtn.onclick = () => alert("Paste a link and press 'Bam! Shorten It'.");
qrBtn.onclick = () => generateQR();
customBtn.onclick = () => alert("Custom shortening coming soon.");

finalShorten.onclick = async () => {
  const input = document.getElementById("urlInput").value;
  if (!input) return;
  const docRef = await addDoc(collection(db, "links"), { url: input });
  const shortLink = `https://cutit.sbs/l/${docRef.id}`;
  document.getElementById("output").innerText = shortLink;
  generateQR(shortLink);
};

function generateQR(link) {
  const input = link || document.getElementById("urlInput").value;
  if (!input) return;
  QRCode.toDataURL(input).then(url => {
    const img = new Image();
    img.src = url;
    document.getElementById("output").innerHTML = '';
    document.getElementById("output").appendChild(img);
  });
}

function toggleChat() {
  const chat = document.getElementById("chatBox");
  chat.style.display = chat.style.display === "flex" ? "none" : "flex";
}

const chatbot = {
  "hello": "Yo! 🔥",
  "what's your name?": "I'm CutItBot 🤖",
  "how does this work?": "Paste a link > Click ‘Shorten’ or ‘QR Me’.",
  "help me": "You got it! Type your command or paste a link.",
  "goodbye": "Bye 👋 Stay private!",
  "thank you": "Anytime 💚",
  "explain ai": "AI = machine that learns patterns & mimics thinking.",
  "generate qr code": generateQR,
};

function handleChat(e) {
  if (e.key === "Enter") {
    const val = e.target.value.toLowerCase();
    const res = chatbot[val] || "I’m not sure how to help with that 😅";
    if (typeof res === "function") {
      res();
      document.getElementById("chatContent").innerHTML += `<div>QR generated ✅</div>`;
    } else {
      document.getElementById("chatContent").innerHTML += `<div>${res}</div>`;
    }
    e.target.value = "";
  }
}