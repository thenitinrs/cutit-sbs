<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>CutIt.sbs</title>
  <link href="https://fonts.googleapis.com/css2?family=Antonio:wght@600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1 class="logo glitch-text">CutIt<span>.sbs</span></h1>
    <button id="themeToggle">⚔️ Vader Mode</button>
  </header>

  <main>
    <h2 class="hero glitch-text flicker">CUT LINKS. <span>RULE</span> INTERNET.</h2>
    <p class="tagline">Fast AF. 100% Private. Trusted by devs, memelords & grandma’s burner phone.</p>

    <div class="btn-group">
      <button id="shortenBtn">🚀 Shorten</button>
      <button id="qrBtn">🎯 QR Me</button>
      <button id="customBtn">🧠 Custom</button>
    </div>

    <input type="text" id="urlInput" placeholder="Paste a thicc long link..."/>
    <button id="finalShorten">Bam! Shorten It</button>
    <div id="output"></div>
  </main>

  <footer>
    🧠 We don’t track, trace, or peek. Every QR is local. Surveillance is gross.
  </footer>

  <button id="rant">💬 Need to rant?</button>

  <script src="https://cdn.jsdelivr.net/npm/qrcode/build/qrcode.min.js"></script>
  <script type="module" src="script.js"></script>
  <script>
    document.getElementById("themeToggle").onclick = () =>
      document.body.classList.toggle("pink-theme");
  </script>
</body>
</html>
