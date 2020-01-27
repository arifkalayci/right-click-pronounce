var menuEv = null;
document.addEventListener('contextmenu', function(ev) {
  menuEv = ev;
});

var loadingDiv = null;
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.type === 'show') {
      loadingDiv = document.createElement('img');
      loadingDiv.src = 'chrome-extension://lgcjkchlhdbdilphofnifjbjcodbefja/loading.svg';
      loadingDiv.style.cssText = 'position: absolute; left: ' + menuEv.pageX + 'px; top: ' + menuEv.pageY + 'px';
      document.body.appendChild(loadingDiv);
    } else {
      document.body.removeChild(loadingDiv);
    }
  }
);
