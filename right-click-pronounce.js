function onClick(info, tab) {
	$.ajax({
		url: "http://www.tfd.com/" + info.selectionText,
	}).done(
		function(html) {
			var re = /play_w2\(\"(\S*?)\"\)/
			var match = re.exec(html);
			console.log(match[1]);

			audio = document.createElement("audio");
			audio["src"] = "http://img.tfd.com/hm/mp3/" + match[1] + ".mp3";
			document.body.appendChild(audio);
			audio.play();
		}
	).fail(
		function(response) {
			console.log("fail:" + response);
		}
	);
}

chrome.contextMenus.create({
	"title": "Pronounce this word",
	"contexts": ["selection"],
	"onclick": onClick
});
