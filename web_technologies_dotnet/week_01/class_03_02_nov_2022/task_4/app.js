function chk() {
    var a = document.getElementById("inp1").value;
    var spaceCount = 0;
    // Hi how are you
    for (var i = 0; i < a.length; i++) {
        var b = a[i];
        if (b == " ") {
            spaceCount++;
        }
    }
    if (a != "") {
        document.getElementById("result").innerHTML = "Space counts: " + spaceCount;
    } else {
        document.getElementById("result").innerHTML = "Write something";
    }


}