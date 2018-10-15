//Add an event listner onkeyup the input value
document.querySelector("#inputValue").addEventListener("input", convertUnit);
//Add an event listner onkeyup the select unit
document.querySelector("#unit").addEventListener("input", convertUnit);

//Function to convert unit
function convertUnit(e) {
  // Get user input value
  var input = document.querySelector("#inputValue").value;

  // Get user's unit selection
  var unit = document.querySelector("#unit").value;
  // console.log(unit);

  // check the unit value
  switch (unit) {
    case "lbs":
      convertLbs(input);
      break;
    case "grams":
      convertGrams(input);
      break;
    case "kilograms":
      //convertGrams(input);
      break;
    /*case "meters":
      //convertMeters(input);
      break;*/
  }
}
//Convert to lbs
function convertLbs(num) {
  var grams = num * 453.562;
  var kilos = (num * 453.592) / 1000;
  var ounces = num * 16;
  var output_div = document.querySelector("#output");
  //Remove all childs
  while (output_div.firstChild) {
    output_div.removeChild(output_div.firstChild);
  }

  //Create Elements for grams
  var div_gram = document.createElement("div");
  div_gram.setAttribute("class", "card bg-primary mb-2");

  var sb_div_gram = document.createElement("div");
  sb_div_gram.setAttribute = "card-header";

  var h4_gram = document.createElement("h4");
  h4_gram.textContent = "Grams:";

  var result_gram = document.createElement("div");
  result_gram.innerHTML = grams;

  sb_div_gram.appendChild(h4_gram);
  sb_div_gram.appendChild(result_gram);
  div_gram.appendChild(sb_div_gram);
  output_div.appendChild(div_gram);

  //Create elements for kilos

  var div_kilo = document.createElement("div");
  div_kilo.setAttribute("class", "card bg-success mb-2");

  var sb_div_kilo = document.createElement("div");
  sb_div_kilo.setAttribute = "card-header";

  var h4_kilo = document.createElement("h4");
  h4_kilo.textContent = "Kilos:";

  var result_kilo = document.createElement("div");
  result_kilo.innerHTML = kilos;

  sb_div_kilo.appendChild(h4_kilo);
  sb_div_kilo.appendChild(result_kilo);
  div_kilo.appendChild(sb_div_kilo);
  output_div.appendChild(div_kilo);

  //Create elements for kilos

  var div_ounces = document.createElement("div");
  div_ounces.setAttribute("class", "card bg-danger mb-2");

  var sb_div_ounces = document.createElement("div");
  sb_div_ounces.setAttribute = "card-header";

  var h4_ounces = document.createElement("h4");
  h4_ounces.textContent = "Ounces:";

  var result_ounces = document.createElement("div");
  result_ounces.innerHTML = ounces;

  sb_div_ounces.appendChild(h4_ounces);
  sb_div_ounces.appendChild(result_ounces);
  div_ounces.appendChild(sb_div_ounces);
  output_div.appendChild(div_ounces);
}
//Convert to grams
function convertGrams(num) {
  var pounds = num * 0.00220462;
  var kilos = num / 100;
  var ounces = num * 0.035274;
  var output_div = document.querySelector("#output");
  //Remove all childs
  while (output_div.firstChild) {
    output_div.removeChild(output_div.firstChild);
  }

  //Create Elements for grams
  var div_pounds = document.createElement("div");
  div_pounds.setAttribute("class", "card bg-primary mb-2");

  var sb_div_pounds = document.createElement("div");
  sb_div_pounds.setAttribute = "card-header";

  var h4_pounds = document.createElement("h4");
  h4_pounds.textContent = "Pounds:";

  var result_pounds = document.createElement("div");
  result_pounds.innerHTML = pounds;

  sb_div_pounds.appendChild(h4_pounds);
  sb_div_pounds.appendChild(result_pounds);
  div_pounds.appendChild(sb_div_pounds);
  output_div.appendChild(div_pounds);

  //Create elements for kilos

  var div_kilo = document.createElement("div");
  div_kilo.setAttribute("class", "card bg-success mb-2");

  var sb_div_kilo = document.createElement("div");
  sb_div_kilo.setAttribute = "card-header";

  var h4_kilo = document.createElement("h4");
  h4_kilo.textContent = "Kilos:";

  var result_kilo = document.createElement("div");
  result_kilo.innerHTML = kilos;

  sb_div_kilo.appendChild(h4_kilo);
  sb_div_kilo.appendChild(result_kilo);
  div_kilo.appendChild(sb_div_kilo);
  output_div.appendChild(div_kilo);

  //Create elements for kilos

  var div_ounces = document.createElement("div");
  div_ounces.setAttribute("class", "card bg-danger mb-2");

  var sb_div_ounces = document.createElement("div");
  sb_div_ounces.setAttribute = "card-header";

  var h4_ounces = document.createElement("h4");
  h4_ounces.textContent = "Ounces:";

  var result_ounces = document.createElement("div");
  result_ounces.innerHTML = ounces;

  sb_div_ounces.appendChild(h4_ounces);
  sb_div_ounces.appendChild(result_ounces);
  div_ounces.appendChild(sb_div_ounces);
  output_div.appendChild(div_ounces);
}
