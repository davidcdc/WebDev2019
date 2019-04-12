function nextpic() {
    document.querySelector("img[id*='emoji']").src = "images/Emoji2.png";
    alert("The picture is about to change!");
}

function prevpic() {
    document.querySelector("img[id*='emoji']").src = "images/Emoji3.png";
    alert("The picture will change back to the original image!");
}
