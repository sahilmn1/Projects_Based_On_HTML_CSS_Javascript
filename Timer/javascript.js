const endDate ="15 March 2024 01:37 AM";
document.getElementById("end-date").innerHTML =endDate;
const inputs = document.querySelectorAll("input");
function clock() {
    const end =new Date(endDate);
  const now =new Date();
  const diff =(end - now) / 1000;
  console.log(diff);

  if(diff < 0) 
  return;
  inputs[0].value =Math.floor(diff /3600 /24);
  inputs[1].value =Math.floor(diff /3600) % 24;
  inputs[2].value =Math.floor(diff /60) % 60;
  inputs[3].value =Math.floor(diff) % 60;
}


clock();

setInterval(
    () => {
        clock()
    },
    1000
)