     let got=JSON.parse(localStorage.getItem("TravellerDetails"));
     let Adult=got.Adults;
     console.log(Adult);
     let i=1;
     for(i; i<=Adult; i++) {
        let adults=i;
         let form=`<div id="important">
         <h3 id="top" > Adult-${adults}</h3>
         <h3>Name</h3>
         <input type="text" placeholder="Enter your name" minlength="3" pattern="[A-Za-z]{1,255}" id="Name${adults}"
             required>
         <h3>Age</h3>
         <input type="number" pattern="[0-9]{1,80}" min="19" title="Age mustbe greater than 18"
             placeholder="Enter you age" id="age${adults}" minlength="2" required>
         <h3>Pass port number</h3>
         <input type="text" id="pass${adults}" pattern="[A-Za-z]{1,255}"required><br>
         <h3>Gender</h3>
         <input list="class" id="gender${adults}" pattern="[A-Za-z]{1,255}"required>
         <datalist id="class">
             <option value="Male">
             <option value="Female">
             <option value="Other">
         </datalist>
     </div>`
     document.getElementById("get").innerHTML+=form;
     
     }
     
     let Children=got.Children;
     let total=parseInt(Adult)+parseInt(Children);
     let j=parseInt(Adult)+1;
     for(j; j<=total; j++) {
        let children=j;
         let form1=`<div id="important">
         <h3 id="top"> Children-${children}</h3>
         <h3>Name</h3>
         <input type="text" placeholder="Enter your name" minlength="3" pattern="[A-Za-z]{1,255}" id="Name${children}"
             required>
         <h3>Age</h3>
         <input type="number" pattern="[0-9]{1,80}"min="0" max="18" title="Age mustbe greater than 18"
             placeholder="Enter you age" id="age${children}" minlength="2" required>
         <h3>Pass port number</h3>
         <input type="text" id="pass${children}" pattern="[A-Za-z]{1,255}"required><br>
         <h3>Gender</h3>
         <input list="class" id="gender${children}" pattern="[A-Za-z]{1,255}" required>
         <datalist id="class">
             <option value="Male">
             <option value="Female">
             <option value="Other">
         </datalist>
     </div>`
     document.getElementById("child").innerHTML+=form1;
     console.log(Children);
     }

function Redirect() {
    let to=localStorage.getItem("Available Places");
    console.log(to);
    switch(to) {
        case "CHICAGO":
            window.location.href="../../pages/chicagopack.html";
            break;
        case "NEWYORK":
            window.location.href="../../pages/nypack.html";
            break;
        case "SWITZERLAND":
            window.location.href="../../pages/switpack.html";
            break;
        case "ENGLAND":
            window.location.href="../../pages/engpack.html";
            break;
        case "BEIJING" :
            window.location.href="../../pages/beijingpack.html";
            break;
        case "MOSCOW" :
            window.location.href="../../pages/moscowpack.html";
            break;
        case "INDIA" :
            window.location.href="../../pages/indpack.html";
            break;
        case "SANFRANCISCO" :
            window.location.href="../../pages/sanfrancisopack.html";
            break;
        case "HONGKONG":
            window.location.href="../../pages/hongkongpack.html";
            break;
    }
}

let display = [];
function onPageload() {
    let userDetail = JSON.parse(localStorage.getItem("Main details of User"));
    if (userDetail) {
        display = userDetail;
    }
}
onPageload();
function Display(event) {
    event.preventDefault();
    let userName = document.getElementById("Name").value;
    let Age = document.getElementById("age").value;
    let passPort = document.getElementById("pass").value;
    let no = document.getElementById("phone").value;
    let Departure=document.getElementById("departure").value;
    checking(Departure);
    let Arrival=document.getElementById("return").value;
    let adult=document.getElementById("num").value;
    let child=document.getElementById("child").value;
    let gender = document.getElementById("gender").value;
    let Emailid = document.getElementById("email").value;
    let Address = document.getElementById("address").value;

    let displayDetail = {
        "Name": userName,
        "Age": Age,
        "Passport_No": passPort,
        "Phone no": no,
        "Departure" : Departure,
        "Return":Arrival,
        "Adults" : adult,
        "Children" :child,
        "Gender": gender,
        "Email-id": Emailid,
        "Address": Address
    }
    display.push(displayDetail);
    console.log(display);
    localStorage.setItem("Main details of User", JSON.stringify(display));
    window.location.href = "../pages/payment.html";
}
function checking(date) {
 let journey=document.getElementById("departure");
 let starting=new Date();
 console.log(starting);
 let result=starting.setDate(journey.getDate() + 5);
 document.getElementById("return").innerHTML=result;
 console.log(result);


}
localStorage.removeItem("No of travellers");
   