function nexttext() {
    document.querySelector("p[id*='text']").textContent = "I really like mixes of art (such as mixing Deadpool and Pikachu)!";
    alert("The text is about to change!");
}
function nextpics() {
    document.querySelector("img[id*='picchange']").src = "images/Pikapool2.jpg";
    alert("The picture is about to change!!");
}