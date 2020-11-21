assume=6;
game=(chance)=>{
    for(let i=1;i<=chance;i++){
        b=require("readline-sync");
        guess=b.question("guess number: ")
        if(guess==assume){
            console.log("your guess is right")
            break
        }
        else{
            let numb=assume-guess
            console.log("your guess is wrong")
        }
    }
}
c=require("readline-sync");
ch=c.question("how many times you want to guess: ")
game(ch)
