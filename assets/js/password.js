function forgot(event) {
  event.preventDefault();
  let Email = document.getElementById("mail").value;
  console.log(Email);
  let isEmailExist = isEmailALreadyUsed(Email);
  let mail = Email;
  if (isEmailExist) {
    localStorage.setItem("forgotDetails", mail);

  }
  else {
    alert("Dear User, As You are the new user for this application Sign Up please.");
  }
}
function isEmailALreadyUsed(currentEmail) {
  let isExist = false;
  const userDetails = JSON.parse(localStorage.getItem("users"));
  if (userDetails) {
    for (let i of userDetails) {
      const email = i.EmailId;
      if (currentEmail == email) {
        isExist = true;
        break;
      }
    }
  }
  return isExist;
}
function random() {
  return Math.floor((Math.random()*999999) +100000);
}
const otimep = random();
console.log(otimep)
function sendEmail(event) {
  event.preventDefault();
  let email = document.getElementById("mail").value.toLowerCase();
  console.log(otimep);
  Email.send({
    Host: "smtp.gmail.com",
    Username: "fantasticjourneys09@gmail.com",
    Password: "1611minus",
    To: email,
    From: "fantasticjourneys09@gmail.com",
    Subject: "This is your otp",
    Body: otimep,
  }).then(
    message => alert('Mail Delivered successfully!')
  );
}
function submitOtp(event) {
  event.preventDefault();
  let otpFromUser = document.getElementById('otp').value;
  if (otpFromUser == otp) {
    alert("Enter new password");
    document.getElementById('create').disabled = false;
    document.getElementById('confirm').disabled = false;
  } else {
    alert('the entered otp is invalid');
  }
}
function updatePass(event) {
  event.preventDefault();
  let currentEmail = document.getElementById("mail").value;
  console.log(currentEmail);
  let emailverify = JSON.parse(localStorage.getItem("users"));
  for (let i of emailverify) {
    console.log(emailverify.length);
    let gmail = i.EmailId;
    console.log(gmail);
    if (currentEmail == gmail) {
      console.log(gmail);
      let pwd = document.getElementById("create").value;
      let cpassword = document.getElementById("confirm").value;
      i.password = pwd;
      i.confirmPassword = cpassword;
      localStorage.setItem("users", JSON.stringify(emailverify));
      window.location.href = "../../index.html";
      break;
    }
  }
}
function redirect() {
  window.location.href="../../index.html";
}

