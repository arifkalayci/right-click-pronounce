function onClick(info, tab) {
  var req = new XMLHttpRequest();

  req.onreadystatechange = function(){
    if (req.readyState === XMLHttpRequest.DONE) {
      if (req.status === 200) {
        var parsedDoc = new DOMParser().parseFromString(req.responseText, 'text/html');

        var soundElement = parsedDoc.evaluate('//*[@class="snd"][@data-snd]', parsedDoc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        var soundPath = soundElement.getAttribute('data-snd');

        var audio = document.createElement("audio");
        audio["src"] = "http://img.tfd.com/hm/mp3/" + soundPath + ".mp3";
        document.body.appendChild(audio);
        audio.play();
      } else {
        alert('An error occurred. Cannot pronounce.');
      }
    }
  }

  req.open('GET', "http://www.tfd.com/" + info.selectionText);
  req.send();
}

chrome.contextMenus.create({
  "title": "Pronounce this word",
  "contexts": ["selection"],
  "onclick": onClick
});
