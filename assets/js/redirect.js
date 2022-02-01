function goTopage() {
    let destination = document.getElementById("places").value;
    console.log(destination);
    window.location.href="../../pages/"+destination+".html";
    
}