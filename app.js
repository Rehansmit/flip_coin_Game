


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



            


