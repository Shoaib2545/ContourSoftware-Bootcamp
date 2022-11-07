function check() {
    var a = parseInt(document.getElementById("inp1").value);
    var b = parseInt(document.getElementById("inp2").value);
    if (a > b){
        document.getElementById("res").innerHTML = "First number is greater: " + a +" > " + b;
    } else if (a < b){
        document.getElementById("res").innerHTML = "Second number is greater: " + a + " < " + b;
    } else{
        document.getElementById("res").innerHTML = "Both are equal: " + a + " = " + b;
    }
}