// let img = [];
// img[0].src = "images/1.png";
// img[1].src ="images/2.png";



// document.querySelectorAll("img)").addEventListener ("mouseover", () =>{
// for(i =0; i<img.length; i++){ 

// }
// }


let User1Total = 0;

document.getElementById("roll").addEventListener("click", () => {  
    // Play a sound - slight delay - so maybe see if can cycle images /delay image or something
    // document.getElementById("sound").play()

    // Generate a number
    let diceRolled = Math.floor(Math.random()*6)+1;
    // Generate dice image 
    const diceImage = 'images/' + diceRolled + '.png';
    // Insert dice image
    document.querySelectorAll('img')[0].setAttribute('src', diceImage);
    let score = User1Total += diceRolled;
    document.getElementById("score").innerHTML = `Score: ${score}`   


    // Create win/lose scenario 
    if(score >=20){
        document.getElementById("winLose").textContent = "You win!"
        User1Total = 0;
        document.getElementById("score").style.display ="none";
        document.getElementById ("roll").style.display = "none"
      
    }
    else if (diceRolled ==1){ 
        document.getElementById("winLose").textContent = "You rolled 1! You lose!"
        document.getElementById("score").textContent = ""
        User1Total = 0;
        document.getElementById ("roll").style.display = "none"
    }
    
    
})

const newGame = document.getElementById("newgame")
newGame.addEventListener ("click", () => 
{ 
    window.location.reload();
});