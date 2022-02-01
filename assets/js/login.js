function login(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let get ={};
    let got=JSON.parse(localStorage.getItem("users"))
    for(let i of got) {
        if(email==i.EmailId) {
            get=i;
            console.log(get);
            break;
        }
    }
    let isEmailExist = isExist(email , password);
    if (isEmailExist) {
        localStorage.setItem("LoginDetails", JSON.stringify(get));
        window.location.href = "./pages/home.html";
    }
    else {
       alert("Dear User, As You are the new user for this application Sign Up please.");
    }
}
function isExist(paramemail, parampassword) {
    let isexist = false;
    const userdetails = JSON.parse(localStorage.getItem("users"));
    for ( let i of userdetails) {
        const useremail = i.EmailId;
        const userpassword = i.password;
        if (useremail === paramemail && userpassword === parampassword) {
            isexist = true;
            break;
        }
    }
    return isexist;
}
function logasadmin(event) {
    event.preventDefault();
    let Email = document.getElementById("email").value;
    let pwd = document.getElementById("password").value;
    if(Email=="admin@gmail.com"&& pwd=="admin") {
        window.location.href="./pages/home.html";
    }
    else {
        alert("Something wrong");
    }
}
function logout() {
    localStorage.removeItem("LoginDetails");
    alert("You have been logged out");
}
