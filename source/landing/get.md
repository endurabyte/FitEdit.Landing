---
layout: default
---

<script src="/assets/js/detectOS.js"></script>
<script>
  window.onload = e => detectOS();
</script>

<main>

<h1>Downloads</h1>

<a href="https://releases.fitedit.io/win-x64/FitEditSetup.exe" class="cta-button" id="win-download-link" style="display: none;">
      <img src="assets/images/windows.svg" alt="Windows Icon">
      <span>Download for Windows</span>
    </a>

<p id="mac-help-text" style="display: none; text-align: center; padding: 15px;">Not sure which Mac you have? Choose Intel - It works on both!</p>

<a href="https://releases.fitedit.io/osx-arm64/FitEdit.pkg" class="cta-button" id="mac-arm-download-link" title="For Apple M1, M2 CPUs or newer" style="display: none;">
      <img src="assets/images/macos.svg" alt="macOS Icon">
      <span>Download for macOS (Apple Silicon)</span>
    </a>

<a href="https://releases.fitedit.io/osx-x64/FitEdit.pkg" class="cta-button" id="mac-x64-download-link" style="display: none;" title="For Intel Core CPUs">
      <img src="assets/images/macos.svg" alt="macOS Icon">
      <span>Download for macOS (Intel)</span>
    </a>

<a href='https://play.google.com/store/apps/details?id=com.endurabyte.fitedit' class="appstore-button" id="android-download-link" style="display: none;">
    <img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/>
</a>

<p align="center" id="ios-download-link" style="display: none;">iOS support coming soon!</p>

<a href="/releases.html" class="cta-button">See All Download Options</a>

</main>
