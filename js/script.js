let headerTime = document.querySelector("#time");
let dateAndDay = document.querySelector("#day-date");
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let statusButton = document.querySelectorAll(".btn");
let boxContainer = document.querySelector(".box");


/* for time */

setInterval(() => {
  let date = new Date();
  headerTime.innerHTML = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  dateAndDay.innerHTML = `${weekday[date.getDay()]} | ${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
}, 1000);



/**/
for(let i = 0; i < statusButton.length; i++){
  statusButton[i].addEventListener("click", function(){
    if(statusButton[i].innerHTML == "off"){
      statusButton[i].innerHTML = "On";
    }
    else{
      statusButton[i].innerHTML = "off";
    }
  })
}

