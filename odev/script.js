function ackapa(){
    var div = document.getElementById("kapa");

            if (div.style.display === "none") {
                div.style.display = "block";
            } else {
                div.style.display = "none";
            }
     }
     function em() {
        var email = document.getElementById("email").value;
        var hata = document.getElementById("hata");

        if (email.trim() === "") {
            hata.textContent = "E-posta kısmı boş olamaz";
        } else {
            hata.textContent = "E-posta yollandı";
        }
    }
    function lightac() {
        var body = document.body;
        if (body.style.backgroundColor === "black") {
            body.style.backgroundColor = "#d9d9d9";
            body.style.color = "black";
        } else {
            body.style.backgroundColor = "black";
            body.style.color = "white";
        }
    }