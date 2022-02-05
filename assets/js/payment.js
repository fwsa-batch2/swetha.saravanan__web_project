let Pay=[];
function onPageload() {
  const paymentDetails=JSON.parse(localStorage.getItem("Payment"));
  if(details) {
    Pay=paymentDetails;
  }
}
function payment(event) {
  event.preventDefault();
  let Name=document.getElementById("name").value;
  let CardNumber=document.getElementById("number").value;
  let code=document.getElementById("password").value;
  let year=document.getElementById("Year").value;
  let Case ={
      "Name" : Name ,
      "Card_No" : CardNumber,
      "CVV" : code,
      "Year" : year
  }
  Pay.push(Case);
  localStorage.setItem("Payment",JSON.stringify(Pay));
  localStorage.getItem("Payment");
}
function redirect() {
  window.location.href="./ticket.html";
}