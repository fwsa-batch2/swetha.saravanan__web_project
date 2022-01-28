let details = [];
function pageOnload() {
    let userInfo=JSON.parse(localStorage.getItem("Reservation"));
   if(userInfo) {
       details=userInfo;
       document.getElementById("from").innerText = details[0].Starting;
       document.getElementById("to").innerText = details[0].Finish;
       document.getElementById("returnfrom").innerText=details[0].Finish;
       document.getElementById("returnto").innerText=details[0].Starting;
   }
}

function Redirect(event) {
    event.preventDefault();
    let start = document.getElementById("src").value;
    let end = document.getElementById("destination").value;
    let Date=document.getElementById("date").value;
    let No=document.getElementById("number").value;
    let mode=document.getElementById("class").value

    let journey = {
        "Starting": start,
        "Finish": end,
        "date":Date,
        "no": No,
        "Class":mode
    }
    details.push(journey);
    console.log(details)
    localStorage.setItem("Reservation",JSON.stringify(details));
    console.log("checking")
    switch (document.getElementById('destination').value) {
       
        case "Switzerland":
            window.location="./switpack.html";
            break;

        case "Beijing":
            window.location = "./beijingpack.html";
            break;

        case "England":
            window.location = "./engpack.html";
            break;
        case "Newyork":
            window.location = "./nypack.html";
            break;
        case "Moscow":
            window.location="./moscowpack.html";
            break;
    }
}
