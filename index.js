let request = new XMLHttpRequest();
let url = "https://restcountries.eu/rest/v2/all";

request.open("GET", url, true);

request.send();

request.onload = function () {
  var data = JSON.parse(this.response);
  data.map((country, index) => {
    countryName = country.name;
    console.log(`${++index} country name : ${countryName}`);
  });
};
