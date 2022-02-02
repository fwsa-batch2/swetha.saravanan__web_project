     const reservationDetails=JSON.parse(localStorage.getItem("TravellerDetails"));
     let Adult=reservationDetails.Adults;
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
     
     let Children=reservationDetails.Children;
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