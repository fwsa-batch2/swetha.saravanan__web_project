let review = [];

function onPageload() {
    let got = JSON.parse(localStorage.getItem("ratings"));
    if (got) {
        review = got;
    }
} onPageload();
const loginDetails = JSON.parse(localStorage.getItem("LoginDetails"));
let Name = loginDetails.Username;
console.log(Name);
let mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
let date = new Date().getDate();
let month = mon[new Date().getMonth()];
let year = new Date().getFullYear();
let today = date + "-" + month + "-" + year;
console.log(today);
document.getElementById("date").innerHTML = date + "-" + month + "-" + year;
document.getElementById("name").innerHTML = Name;
function rearrange(event) {
    event.preventDefault();
    let star = document.getElementById("review").value;
    console.log(star);
    let feedback = document.getElementById("feedback").value;
    let Rating = {
        "Name": Name,
        "Date": today,
        "Ratings": star,
        "Comments": feedback
    }
    review.unshift(Rating);
    localStorage.setItem("ratings", JSON.stringify(review));
    window.location.href = "./display review.html";
}
if (loginDetails == null) {
    alert("please login to submit your reviews");
    window.location.href = "../../pages/login.html";
}
