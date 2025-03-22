let numbercontainer = document.querySelector(".Rating_state_numbers");
let respuesta = document.querySelector(".Thankyou-state_respuesta--number");
let sumbitbtn = document.querySelector(".Rating_state_sumbit");
let Ratingstate = document.querySelector(".Rating_state");
let Thankyoustate = document.querySelector(".Thankyou-state");

numbercontainer.addEventListener("click", event=>{
    let numberselector = event.target.innerText;
    respuesta.innerText = numberselector;
    if (numberselector > 0 || numberselector<=5){
        sumbitbtn.addEventListener("click", ()=>{
            Ratingstate.style.display = "none";
            Thankyoustate.style.display = "flex";
        });
    }
});
  



   
   




























































