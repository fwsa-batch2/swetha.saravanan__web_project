let change=JSON.parse(localStorage.getItem("TravellerDetails"));
let destination=change.Destination;
let source=change.Source;
let text=source.toString();
let rewrite=text.toUpperCase();
document.getElementById("from").innerHTML=rewrite;
document.getElementById("returnto").innerHTML=rewrite;
console.log(destination);
