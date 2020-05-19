const a_url = "http://api.open-notify.org/astros.json";
const b_url = "http://api.open-notify.org/iss-now.json";

const issImg = "/assets/img/iss.gif";
const testDiv = document.getElementById("test");
let elem = document.createElement("img");
elem.src = `${issImg}`;

testDiv.append(elem);

let longData;
let latData;

let getLocation = function (param) {
  setInterval(async () => {
    const response = await fetch(param)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        // $lat.innerHTML = `Latitude: ${data.iss_position.latitude}`;
        // $long.innerHTML = `Longitude: ${data.iss_position.longitude}`;
        setLocation(data);
      });
  }, 3000);
};

let setLocation = function (data) {
  let $lat = document.getElementById("lat-div");
  let $long = document.getElementById("long-div");

  latData = data.iss_position.latitude;
  longData = data.iss_position.longitude;

  $lat.innerHTML = `Latitude: ${data.iss_position.latitude}`;
  $long.innerHTML = `Longitude: ${data.iss_position.longitude}`;
};

getLocation(b_url);
