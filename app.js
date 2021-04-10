document.getElementById("alert").addEventListener("click", () => {
  document.querySelector(".issuedAlert").innerHTML = "Red Alert has been issued";
  document.querySelector(".issuedAlert").style.color = "red";
  alert("High Risk of Covid in Melbourne City is Declared");
});

document.getElementById("safe").addEventListener("click", () => {
  document.querySelector(".issuedAlert").innerHTML = "Safety Guarranted";
  document.querySelector(".issuedAlert").style.color = "blue";
  alert("Safe in Melbourne City");
});
