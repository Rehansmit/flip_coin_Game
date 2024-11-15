// functin for Start Game
var player1Name
var player2Name

function startGame() {
  document.getElementById("body").classList.add("body2")
  player1Name= document.getElementById("player1").value;
  player2Name= document.getElementById("player2").value;

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
   document.getElementById("p1name").innerHTML=`<h4>${player1Name}</h4>`
   document.getElementById("p2name").innerHTML=`<h4>${player2Name}</h4>`


        }



        

        function clikonhead (){
          
          document.getElementById("p1slected").innerHTML=`<h4> Head </h4>`
          document.getElementById("p2slected").innerHTML=`<h4> Tail </h4>`
          
        }


        function clikontail (){
          document.getElementById("p1slected").innerHTML=`<h4> Tail </h4>`
          document.getElementById("p2slected").innerHTML=`<h4> Head </h4>`
        }


// function added

function player1win(){
  coinarr=["Head","Tail"]
randomvalue= Math.floor(Math.random()*2)
var result = coinarr[randomvalue]
  Swal.fire
({
title: "Congratulations! " + player1Name, 
text: "Result is "  + result + " "+"You Won" ,
icon: "success"
});

}

// function added

function player2win(){
  coinarr=["Head","Tail"]
randomvalue= Math.floor(Math.random()*2)
var result = coinarr[randomvalue]
  Swal.fire
  ({
    title: "Congratulations! " + player2Name , 
    text: "Result is "  + result +" "+ "You Won",
    icon: "success"
  });


}
// function added

function tosscoinimage(){
  document.getElementById("image-coin").src="assets/coin.gif"
}

// function added for stopping the image
function stillimage(){
  document.getElementById("image-coin").src="assets/flipstill.PNG"
}





        
  
function flipcoin()
{

tosscoinimage()
setTimeout(stillimage,3000)
var p_selected =document.getElementById("p1slected").innerText
coinarr=["Head","Tail"]
randomvalue= Math.floor(Math.random()*2)
var result = coinarr[randomvalue]

if(result=== p_selected){
  
  setTimeout(player1win,3000)


   }
   
else{
  setTimeout(player2win,3000)
   
   }
   
        
   }
    

