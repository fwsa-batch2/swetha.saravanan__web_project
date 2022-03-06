             let review="";
             let range=JSON.parse(localStorage.getItem("ratings"));
             let i=0;
             for ( i of range) {
             review +=`<div class="display reviews">
                 <h2>Name : ${i.Name}</h2>
                 <h2>Date :${i.Date}</h2>
                 <h2> Ratings : ${i.Ratings}</h2>
                 <h2> Feedback :${i.Comments}</h2>
             </div>`
            } 
             document.getElementById("get").innerHTML+=review;
             