function got(event) {
  event.preventDefault();
  let source = document.getElementById("from").value;
  let destination = document.getElementById("places").value;
  let adult = document.getElementById("adults").value;
  let children = document.getElementById("children").value;
  let departure = document.getElementById("departure").value;
  let arrival = document.getElementById("arrival").value;
  let Details = {
    "Source": source,
    "Destination": destination,
    "Adults": adult,
    "Children": children,
    "Departure": departure,
    "Arrival": arrival
  }
  localStorage.setItem("TravellerDetails", JSON.stringify(Details));
  console.log(destination);
  switch(destination) {
    case "Chicago":
      window.location.href = "../../pages/chicago.html";
      break;
    case "New york":
      window.location.href = "../../pages/ny.html";
      break;
    case "Switzerland":
      window.location.href = "../../pages/switzerland.html";
      break;
    case "England":
      window.location.href = "../../pages/england.html";
      break;
    case "Beijing":
      window.location.href = "../../pages/beijing.html";
      break;
    case "Moscow":
      window.location.href = "../../pages/moscow.html";
      break;
    case "India":
      window.location.href = "../../pages/northindia.html";
      break;
    case "San francisco":
      window.location.href = "../../pages/san francisco.html";
      break;
    case "Hongkong":
      window.location.href = "../../pages/hongkong.html";
      break;
  }
}
const data = new Date();
let month = JSON.stringify(data.getMonth() + 1);
let date = JSON.stringify(data.getDate());
if (date.length == 1) {
  date = '0' + date;
}
if (month.length == 1) {
  month = "0" + month;
}
const today = `${data.getFullYear()}-${month}-${date}`
console.log(today);
document.getElementById('departure').min = `${today}`;