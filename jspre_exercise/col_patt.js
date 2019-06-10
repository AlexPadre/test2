
function changeColor() {

  var red = document.getElementById('col1').value;
  var green = document.getElementById('col2').value;
  var blue = document.getElementById('col3').value;

  console.log(red);
  console.log(green);
  console.log(blue);

  document.getElementsByClassName('test')[0].style["background-color"] = "#" + red + green + blue;
}
