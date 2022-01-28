let userList = [];
onPageLoad();
function onPageLoad() {
    console.group("onPageLoad");
    const userDetails = JSON.parse(localStorage.getItem("users"));
    if (userDetails) {
        userList = userDetails;
        console.table(userList);
    }
    console.groupEnd("onPageLoad");
}
onPageLoad();
function submitHandler(event) {
    event.preventDefault();
    let UserName = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let no = document.getElementById("phoneno").value;
    let password = document.getElementById("create").value;
    let confirmPassword = document.getElementById("confirm").value;
    let users = {
        "Username": UserName,
        "EmailId": email,
        "contact": no,
        "password": password,
        "confirmPassword": confirmPassword
    };
    if (password != confirmPassword) {
        alert("Password Mismatch");
        return;
    }
    const isEmailExist = isEmailALreadyUsed(email);
    if (isEmailExist) {
        alert("Already Exist");
        return;
    }
    userList.push(users);
    localStorage.setItem("users", JSON.stringify(userList));
    window.location.href = "../index.html";
}
function isEmailALreadyUsed(currentEmail) {
    console.group("isEmailAlreadyUsed");
    let isExist = false;
    const userDetails = JSON.parse(localStorage.getItem("users"));
    if (userDetails) {
        for ( let i of userDetails) {
            const email = i.EmailId;
            if (currentEmail == email) {
                console.log(isExist);
                isExist = true;
                break;
            }
        }
    }
    console.log(isExist);
    console.groupEnd("isEmailAlreadyUsed");
    return isExist;
}
function checkBox() {
    let checkbox=document.getElementById("check");
    if(checkbox.checked) {
     document.getElementById("create").type="text";
     document.getElementById("confirm").type="text";
    }
    else {
    document.getElementById("create").type="password";
    document.getElementById("confirm").type="password";  
    }
}
