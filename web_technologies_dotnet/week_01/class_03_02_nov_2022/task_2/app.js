function chk(){
    var a = parseInt(document.getElementById("inp1").value);
    if(a % 2){
        document.getElementById("res").innerHTML = "Number is Odd";
    }else{
        document.getElementById("res").innerHTML = "Number is Even";
    }
}