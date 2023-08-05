---
layout: default
---

<script src="/assets/js/detectOS.js"></script>
<script>
  window.onload = e => detectOS();
</script>

<main>

<header>
    <div class="header-content">
    	<span class="brand">Fit<span class="brand-suffix">Edit</span></span>
    </div>
  </header>
  <h1>Downloads</h1>

<a href="https://fitedit-releases.s3.amazonaws.com/win-x64/FitEditSetup.exe" class="cta-button" id="win-download-link" style="display: none;">
    <img src="assets/images/windows.svg" alt="Windows Icon"> Download for Windows
  </a>

<p id="mac-help-text" style="display: none; text-align: center; padding: 15px;">Not sure which Mac you have? Choose Intel - It works on both!</p>

<a href="https://fitedit-releases.s3.amazonaws.com/osx-arm64/FitEdit.pkg" class="cta-button" id="mac-arm-download-link" title="For Apple M1, M2 CPUs or newer" style="display: none;">
    <img src="assets/images/macos.svg" alt="macOS Icon"> Download for macOS (Apple Silicon)
  </a>

<a href="https://fitedit-releases.s3.amazonaws.com/osx-x64/FitEdit.pkg" class="cta-button" id="mac-x64-download-link" style="display: none;" title="For Intel Core CPUs">
    <img src="assets/images/macos.svg" alt="macOS Icon"> Download for macOS (Intel)
  </a>

<a href="/releases.html" class="cta-button">See All Download Options</a>

</main>
