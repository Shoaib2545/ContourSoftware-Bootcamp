$(document).ready(function () {
  $("#myDiv").animate(
    {
      backgroundColor: "yellow",
      height: "400px",
      width: "400px",
    },

    6000,
    () => {
      $("#myDiv").animate(
        {
          backgroundColor: "green",
          height: "100px",
          width: "100px",
        },

        6000,
        () => {
          alert("Animation completed");
        }
      );
    }
  );
});
function stopAnimation() {
  $("#myDiv").stop();
}
