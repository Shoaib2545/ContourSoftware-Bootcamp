let arr = ["f1", "f2", "f3", "f4", "f5", "f6"];
function showResult() {
    let startingValue = document.getElementById("inp1").value;
    let endingValue = document.getElementById("inp2").value;
  for(let i = startingValue; i <= endingValue; i++) {
    console.log(arr[i]);
    document.getElementById("fruitName").innerHTML += arr[i] + "<br>";
  }
}