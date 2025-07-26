// QR Generation using goqr.me API (free!)
function generateQR() {
  const type = document.getElementById("qrType").value;
  const input = document.getElementById("qrInput").value;
  let data = "";

  if (type === "url") {
    data = input;
  } else if (type === "wifi") {
    data = `WIFI:T:WPA;S:${input};P:yourpassword;;`;
  } else if (type === "mystery") {
    data = `Mystery Message: ${input}`;
  }

  const qrURL = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(data)}`;
  displayQR(qrURL);
}

// 🎉 Surprise Me QR (random aesthetic string)
function surpriseQR() {
  const surprises = [
    "I’m not a snack—I’m a QR meal 👀",
    "Scan to unlock your secret vibe",
    "Pastel Pop Dream Incoming...",
    "You summoned a K-pop QR 🔥"
  ];

  const randomMsg = surprises[Math.floor(Math.random() * surprises.length)];
  const qrURL = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(randomMsg)}`;
  displayQR(qrURL);
}

// 🌸 Display QR inside pastel card
function displayQR(url) {
  const container = document.getElementById("qrCardContainer");
  container.innerHTML = `
    <div class="qr-card">
      <h3>Your Summoned QR ✨</h3>
      <img src="${url}" alt="QR Code"/>
      <p>Scan me, bestie 🧃</p>
    </div>
  `;
}

// 💬 Cutie Chat Toggle
document.getElementById("chatbotBtn").addEventListener("click", () => {
  const modal = document.getElementById("chatbotModal");
  modal.classList.toggle("hidden");
});
