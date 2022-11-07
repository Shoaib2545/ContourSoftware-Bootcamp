function chk() {
    var age = parseInt(document.getElementById("age").value)
    if (age >= 18) {
        if (age > 21) { console.log("You are allowed to use mobile and laptop.") } else { console.log("You are allowed to use mobile.") }
    } else { console.log("You are not allowed to use anything.") }
}