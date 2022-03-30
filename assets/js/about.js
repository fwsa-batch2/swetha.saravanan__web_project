function ShowNavbar() {
let loginDetails=JSON.parse(localStorage.getItem("LoginDetails"));
if(loginDetails=null) {
    document.getElementsByClassName('navbar').style.display="none";
}}