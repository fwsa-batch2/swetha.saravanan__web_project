//rename - goToPage()

function Click() {
    let destination = document.getElementById("destination").value;
    console.log(destination);
    window.location.href = "../../pages/"+  destination.lowercase() +".html";
    //future requiredment => add/remove/modify

    // switch (destination) {
    //     case "Chicago":
    //         window.location.href = "../../pages/chicago.html";
    //         break;
    //     case "New york":
    //         window.location.href = "../../pages/ny.html";
    //         break;
    //     case "San francisco":
    //         window.location.href = "../../pages/san francisco.html";
    //         break;
    //     case "India":
    //         window.location.href = "../../pages/northindia.html";
    //         break;
    //     case "Beijing":
    //         window.location.href = "../../pages/beijing.html";
    //         break;
    //     case "Hongkong":
    //         window.location.href = "../../pages/hongkong.html";
    //         break;
    //     case "Moscow":
    //         window.location.href = "../../pages/moscow.html";
    //         break;
    //     case "England":
    //         window.location.href = "../../pages/england.html";
    //         break;
    //     case "Switzerland":
    //         window.location.href = "../../pages/switzerland.html";
    //         break;

    // }
}

let details = [];
function getback() {
    let get = JSON.parse(localStorage.getItem("PassengerDetails"));
    if (get) {
        details = get;
    }
}
let adults;
function booking(event) {
    event.preventDefault();

    // varrrrrrrrrrrrrrrrrrrrrriable must be mean
    let got = JSON.parse(localStorage.getItem("TravellerDetails"));//=> [] or {}
    let adult = got.Adults; //{ "adddddddddddddddddddults:[]"}
    let kid=got.Children;
    let total=parseInt(adult)+parseInt(kid);
    console.log(total);
    let i =1;
    for (i; i<=total; i++) {
         adults = i;
        const Name = document.getElementById(`Name${adults}`).value;
        let Age = document.getElementById(`age${adults}`).value;
        let passPort = document.getElementById(`pass${adults}`).value;
        let gender = document.getElementById(`gender${adults}`).value;
        let phone = document.getElementById("phone").value;
        let admobile = document.getElementById("adphone").value;
        let Emailid = document.getElementById("email").value;
        let ademail = document.getElementById("ademail").value;
        let Address = document.getElementById("address").value;
       let main = {
            "id:": i,
            "Name": Name,
            "Age": Age,
            "PassPort": passPort,
            "Gender": gender,
            "Mobile": phone,
            "Exmobile": admobile,
            "Email": Emailid,
            "Exemail": ademail,
             "Address": Address
        }

        //passengaer details - duplicate validation
        details.push(main);
        console.log(main);
        localStorage.setItem("PassengerDetails", JSON.stringify(details));
        getback();
    }}
function redirect() {
    window.location.href="../../pages/payment.html";
}