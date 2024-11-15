

// functin for Start Game

function startGame() {

    var player1Name = document.getElementById("player1").value;
    var player2Name = document.getElementById("player2").value;

    if (player1Name === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Enter player 1 name",
           
          });
    return;}
     
    
     if (player2Name === "") {
        Swal.fire({
             icon: "error",
            title: "Oops...",
             text: "Enter player 2 name",
            
          });
        return;}    
    
   document.getElementById("maindiv").classList.remove("d-none")
   document.getElementById("pname").classList.add("d-none")
   var p1n = document.getElementById("player1").value  
   var p2n = document.getElementById("player2").value  

   document.getElementById("p1name").innerHTML=`<h4>${p1n}</h4>`
   document.getElementById("p2name").innerHTML=`<h4>${p2n}</h4>`


        }



        

        function clikonhead (){
          
          document.getElementById("p1slected").innerHTML=`<h4> Head </h4>`
          document.getElementById("p2slected").innerHTML=`<h4> Tail </h4>`
          
        }


        function clikontail (){
          document.getElementById("p1slected").innerHTML=`<h4> Tail </h4>`
          document.getElementById("p2slected").innerHTML=`<h4> Head </h4>`
        }










        
  
function flipcoin()
{ 
document.getElementById("flip_img").scr ="assets/head.jpg"
var p_selected =document.getElementById("p1slected").innerText

var p1nm = document.getElementById("player1").value  
var p2nm = document.getElementById("player2").value  
 
coinarr=["Head","Tail"]
randomvalue= Math.floor(Math.random()*2)
var p
var result = coinarr[randomvalue]

if(result=== p_selected){
  
Swal.fire
({
title: "Congratulations! " + p1nm, 
text: "Result is "  + result + " "+"You Won" ,
icon: "success"
});

   }
   
else{
    Swal.fire
    ({
      title: "Congratulations! " + p2nm , 
      text: "Result is "  + result +" "+ "You Won",
      icon: "success"
    });

   }
   
        
    // setTimeout(tossthecoin,5000)
   }
    

