


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
    
   
window.location.href = "game.html";

        }


        
        function clikonhead (){
          document.getElementById("p1slected").innerHTML=`<h4> Head </h4>`
          document.getElementById("p2slected").innerHTML=`<h4> Tail </h4>`

        }


        function clikontail (){
          document.getElementById("p1slected").innerHTML=`<h4> Tail </h4>`
          document.getElementById("p2slected").innerHTML=`<h4> Head </h4>`

        }



        
function stillimage (){
  document.getElementById("flip_img").scr ="assets/head.jpg"
  var p1slected = document.getElementById("p1slected").value       
   

}

function tossthecoin(){ 
stillimage()
 
  
coinarr=["Head","Tail"]
randomvalue= Math.floor(Math.random()*2)
var result = coinarr[randomvalue]

console.log(result)

if(result === p1slected){
  
Swal.fire
({
title: "Congratulations! " + "Player 1", 
text: "Result is "  + result + " You Won" ,
icon: "success"
});

   }
   
else{
    Swal.fire
    ({
      title: "Congratulations! " + "Player 2 " , 
      text: "Result is "  + result + " You Won" ,
      icon: "success"
    });

   }
   
      
      
    setTimeout(stillimage,3000)
   }
    

