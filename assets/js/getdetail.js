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
  window.location.href="../pages/"+destination+".html";
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
document.getElementById('arrival').min=`${today}`;