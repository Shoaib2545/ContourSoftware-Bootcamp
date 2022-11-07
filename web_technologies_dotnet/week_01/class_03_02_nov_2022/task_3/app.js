function chk() {
    var a = document.getElementById("inp1").value.toLowerCase();
    var reversedA = "";
    for (var i = a.length - 1; i >= 0; i--) {
        reversedA += a[i];
    }
    if (a != "") {
        if (a == reversedA) {
            document.getElementById("result").innerHTML = "Given sring is palindrome";
        } else {
            document.getElementById("result").innerHTML = "Given sring is not palindrome";
        }
    }else{
        document.getElementById("result").innerHTML = "Write something";
    }

}