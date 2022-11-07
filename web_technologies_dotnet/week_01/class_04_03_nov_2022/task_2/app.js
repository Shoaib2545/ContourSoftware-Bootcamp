let arr = ["f1", "f2", "f3", "f4", "f5", "f6"];
function showResult() {
  arr.forEach((item, index, originalArray) => {
    console.log(item, index, originalArray);
    document.getElementById("fruitName").innerHTML += item + "<br>";
  });
  //   arr.forEach(myFunction);
  //   function myFunction(item) {
  //     document.getElementById("fruitName").innerHTML += item + "<br>";
  //   }
  //   for(let i in arr){
  //     document.getElementById("fruitName").innerHTML += arr[i] + "<br>";
  //   }
}
