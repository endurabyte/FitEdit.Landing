async function detectOS() {
  var platform = window.navigator.platform;
  var userAgent = window.navigator.userAgent;

  // For debugging: Show the platform and user agent on the page
  //var platformP = document.createElement("p");
  //var userAgentP = document.createElement("p");
  //platformP.innerText = platform;
  //userAgentP.innerText = userAgent;
  //document.getElementsByTagName('body')[0].appendChild(platformP);
  //document.getElementsByTagName('body')[0].appendChild(userAgentP);

  if (/Mac/.test(platform)) {

    var link = document.getElementById('mac-x64-download-link');
    var link2 = document.getElementById('mac-arm-download-link');
    var text = document.getElementById('mac-help-text');

    link.style.display = 'block';
    link2.style.display = 'block';
    text.style.display = 'block';

  } else if (/Win/.test(platform)) {

    var link = document.getElementById('win-x64-download-link');
    var link2 = document.getElementById('win-arm-download-link');
    var text = document.getElementById('win-help-text');

    link.style.display = 'block';
    link2.style.display = 'block';
    text.style.display = 'block';

  } else if (/Linux/.test(platform)) {

    var link = document.getElementById('linux-x64-download-link');
    var link2 = document.getElementById('linux-arm-download-link');

    link.style.display = 'block';
    link2.style.display = 'block';
  } 
  // else if (/Android/.test(userAgent)) {
  //   var link = document.getElementById('android-download-link');
  //   link.style.display = 'block';
  // } else if (/iPhone|iPad|iPod/.test(userAgent)) {
  //   var link = document.getElementById('ios-download-link');
  //   link.style.display = 'block';
  // }
}
