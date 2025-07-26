// QR Generator
function generateQR() {
  const input = document.getElementById("qrInput").value;
  const canvas = document.getElementById("qrCanvas");
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(input)}`;

  const qrImage = new Image();
  qrImage.src = qrUrl;
  qrImage.onload = () => {
    const ctx = canvas.getContext("2d");
    canvas.width = 220;
    canvas.height = 260; // extra space for watermark
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(qrImage, 0, 0, 220, 220);
    ctx.font = "12px Poppins";
    ctx.fillStyle = "#6b7280";
    ctx.textAlign = "center";
    ctx.fillText("made by cutit.sbs ✦ your vibe. your code", 110, 250);
  };
}

// Surprise QR Generator
function surpriseMe() {
  const vibes = [
    "You're a sparkle in the static 🌟",
    "Scan if you dare 💅",
    "CutieCode unlocked ✨",
    "Gen-Z royalty detected 👑"
  ];
  const random = vibes[Math.floor(Math.random() * vibes.length)];
  document.getElementById("qrInput").value = random;
  generateQR();
}

// Chatbot Toggle
function toggleChat() {
  const chatWindow = document.getElementById("chatWindow");
  chatWindow.style.display = (chatWindow.style.display === "none" || chatWindow.style.display === "") ? "block" : "none";
}
