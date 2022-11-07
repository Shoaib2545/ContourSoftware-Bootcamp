function chk() {
    var a = document.getElementById("inp1").value;
    var b = "";
    for (var i = 0; i < a.length; i++) {
        if (!(a[i] == " ")) {
            b += a[i];
        }
    }
    if (a != "") {
        document.getElementById("result").innerHTML = "Sentence without space: " + b;
    } else {
        document.getElementById("result").innerHTML = "Write something";
    }


}
