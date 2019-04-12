var db = firebase.firestore();
function submitform(){

    alert("Submitted!");
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email= document.getElementById("email").value;
    var text= document.getElementById("comment").value;
    db.collection("Information").add({ Email:email, FirstName:firstname, LastName:lastname, comment:text,
    })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id); //update the products view
            getInformation();
        }) .catch(function(error) {
        console.error("Error adding document: ", error); });
}

function Yoshi(){
    alert("Picture will change in 3....2....1...");
    document.querySelector("img[id*='yoshi']").src = "images/Frey2.jpg"
}

