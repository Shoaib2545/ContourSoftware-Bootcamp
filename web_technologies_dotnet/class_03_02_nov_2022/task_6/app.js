function chk() {
    var f1 = false;
    var f2 = false;
    var a = document.getElementById("inp1").value;
    var b = "";
    var c = "";
    var d = "";
    for (var i = 0; i < a.length; i++) {
        if (!(a[i] == " ")) {
            f1 = true;
        }
        if(f1){
            b += a[i];
        }
    }
    for (var j = b.length -1; j >= 0 ; j--) {
        if (!(b[i] == " ")) {
            f2 = true;
        }
        if(f2){
            c += b[j];
        }
    }
    for(var x = c.length - 1;x>=0;x--){
        d += c[x];
    }

    console.log(d);
    if (a != "") {
        document.getElementById("result").innerHTML = "Trim: " + d;
    } else {
        document.getElementById("result").innerHTML = "Write something";
    }


}