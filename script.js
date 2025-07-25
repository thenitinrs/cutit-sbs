
const chatBotData = {
  "Hello": "Hey there! 👋",
  "What's your name?": "I'm the CutIt ChatBot. I vibe hard and protect privacy.",
  "How does this work?": "Paste a long URL, hit 'Shorten'. Or get a QR instantly!",
  "Help me": "You got it. Use the buttons above or ask me anything!",
  "Goodbye": "Later gator 🐊",
  "Thank you": "Anytime!",
  "Explain AI": "AI is like magic code that learns patterns and helps you do stuff.",
  "What can you do?": "Shorten links, make QRs, chat like a pro.",
  "Set language to English": "Language set to English!",
  "Clear history": "I don’t keep any 👀"
};

function toggleChat() {
  const box = document.getElementById('chatbot');
  box.style.display = box.style.display === 'flex' ? 'none' : 'flex';
}
function handleChatKey(e) {
  if (e.key === "Enter") {
    const input = document.getElementById('chatInput');
    const msg = input.value.trim();
    const display = document.getElementById('chatDisplay');
    const response = chatBotData[msg] || "I'm still learning. Try something else!";
    display.innerHTML += `<p><b>You:</b> ${msg}</p><p><b>Bot:</b> ${response}</p>`;
    input.value = '';
  }
}

document.getElementById('shortenBtn').onclick = () => {
  const input = document.getElementById('linkInput').value;
  if (!input) return alert("Paste a link first!");
  document.getElementById('output').innerText = "cutit.sbs/" + Math.random().toString(36).substr(2, 5);
};

document.getElementById('qrBtn').onclick = () => {
  const input = document.getElementById('linkInput').value;
  if (!input) return alert("Paste a link first!");
  QRCode.toCanvas(document.getElementById('qrCanvas'), input, error => {
    if (error) console.error(error);
  });
};

document.getElementById('customBtn').onclick = () => {
  const input = prompt("Enter custom ending:");
  if (input) {
    document.getElementById('output').innerText = "cutit.sbs/" + input;
  }
};
