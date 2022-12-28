let celsius = document.getElementById("celsius");
let fahernheit = document.getElementById("fahernheit");
console.log(celsius ,fahernheit);

function celToFar(){
    let output = (parseFloat(celsius.value) * 9/5) * 32;
    fahernheit.value = parseFloat(output.toFixed(2));
  
}
function FarTocel(){
    let output = (parseFloat(fahernheit.value) - 32)* 5/9;
    celsius.value = parseFloat(output.toFixed(2));
    console.log(output);
}
gsap.from (".wrapper", {
    duration:1,
    y:-400,
    delay:0.5,
opacity:1,
   
});

   