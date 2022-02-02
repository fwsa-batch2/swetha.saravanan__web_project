//rename - goToPage()

function goToPage() {
    let destination = document.getElementById("destination").value;
    console.log(destination);
    window.location.href = "../../pages/"+  destination.lowercase() +".html";
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
             "Address": Address
        }

        //passengaer details - duplicate validation
        details.push(main);
        console.log(main);
        localStorage.setItem("PassengerDetails", JSON.stringify(details));
        getback();
    }}
function redirect() {
    window.location.href="../pages/payment.html";
}