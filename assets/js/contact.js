let Contact=[];
function GetBack() {
    let Connecting=JSON.parse(localStorage.getItem("Contact"));
    if(Connecting) {
        Contact=Connecting
    }
}
GetBack();
function contact(event) {
event.preventDefault();
let Emailid=document.getElementById("email").value;
let Query=document.getElementById("query").value;
let connect ={
    "Email-id" : Emailid,
    "Suggestion" : Query
}
Contact.push(connect);
localStorage.setItem("Contact",JSON.stringify(Contact));
alert("Your query or Suggestion sent succesfully.Thank you");
}