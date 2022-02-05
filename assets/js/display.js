const passengerDetails=JSON.parse(localStorage.getItem("PassengerDetails"));
let length=passengerDetails.length;
console.log(length);
let i=0;
let no=1;
let airport=["18", "22"]
let seat=20;
for(i of details) {
    let display=`<div id="display">
    <table>
        <tr>
                  <td id="no">${no}</td>
                  <td>${i.Name}</td>
                  <td>${i.Age}</td>
                  <td>${i.PassPort}</td>
                  <td>${i.Gender}</td>
                  <td>${airport[1]}</td>
                  <td>${seat}</td>
            </tr>
    </table></div>`
    document.getElementById("got").innerHTML+=display;
    no++;
    seat++;
}
const data=JSON.parse(localStorage.getItem("TravellerDetails"));
document.getElementById("date").innerHTML+=data.Departure;
document.getElementById("return").innerHTML+=data.Arrival;
document.getElementById("adult").innerHTML+=data.Adults;
document.getElementById("child").innerHTML+=data.Children;
let total = parseInt(data.Adults)+parseInt(data.Children);
console.log(total);
let first =150000;
let second=200000;
let third=100000;
let destination=data.Destination;
console.log(destination);
switch(destination) {
    case "Chicago","New york","Moscow":
        let payment=`<div id="payment"><table>
        <tr>
        <td>${second}</td>
        <td></td>
        </tr>
        </table></div>`;
        console.log(payment);
        document.getElementById("Payment").innerHTML+=payment;


}
let datas=JSON.parse(localStorage.getItem("LoginDetails"))
document.getElementById("name").innerHTML+=datas.Username;
console.log(datas);
console.log(datas.Username);



