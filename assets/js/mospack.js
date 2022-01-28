let details = [];
function pageOnload() {
    let userInfo = JSON.parse(localStorage.getItem("Reservation"));
    if (userInfo) {
        details=userInfo;
        document.getElementById("from").innerHTML = details[0].Starting;
        document.getElementById("to").innerHTML = details[0].Finish;
        document.getElementById("returnfrom").innerHTML=details[0].Finish;
        document.getElementById("returnto").innerHTML=details[0].Starting;
    }
}
function redirect() {
    window.location.href="../pages/moscow.html";
}
function booking() {
    window.location.href="../pages/flightb.html";
}