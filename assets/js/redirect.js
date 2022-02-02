function goTopage() {
    let destination = document.getElementById("places").value;
    console.log(destination);
    window.location.href="../pages/"+destination+".html";
    }
const loginDetails=JSON.parse(localStorage.getItem("LoginDetails"));
if(loginDetails==null) {
    alert("Please SignIn to get more details");
    window.location.href="../../pages/login.html";
}
