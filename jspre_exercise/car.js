var car = {
  name : "Lamborghini",
  price : "20000$",
  horsepower : 600,
  enginepower: "V12"
};
document.getElementById("car").innerHTML = "This " + car.name + " has a " + car.enginepower + " with a " + car.horsepower + " HP" + ". The price of this kind of car can go up to " + car.price + ".";
