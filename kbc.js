function kbc_game(questi,option,solution){
    var hint=0;
    for(var i=0;i<questi.length;i++) {
        console.log("This is your question?")
        console.log("Q.",i+1,questi[i])
        console.log("OPTION.............")
        for(var j=0;j<option[i].length;j++) {
            console.log(j+1,option[i][j])
        }
        let user=require("readline-sync");
        let answer=user.question("choose your answer?/hint: ")
        if (answer=="hint"){
            if(hint==0){
                console.log(i+1,fifty_op[i][0])
                console.log(i+2,fifty_op[i][1])
                fifty=require("readline-sync");
                seclt_ans=fifty.question("enter answer: ")
                if(seclt_ans==fifty_ans[i]) {
                    console.log("your answer is right")
                }
                else{
                    console.log("your answer is wrong")
                    break
                }
                hint=hint+1
            }
            else {
                console.log("once you use hint so,again you can't use hint")
                d=require("readline-sync");
                e=d.question("choose your answer: ");
                if(e==solution[i]){
                    console.log("your answer is right")
                }
                else{
                    console.log("wrong answer")
                    break
                }
            }
        }
        else if(answer==solution[i]){
            console.log("congrates! your answer is right")
        }
        else{
            console.log("sadly! your answer is wrong")
            break
        }
    }
}
questi=["What is your capital city of india","Where Tajmahal is situated","Who is the co-founder of navgorukul","Which course you learning in NavGurukul "]
option=[["Kolkata","Mumbai","Bangalore","Delhi"],["Rajasthan","Pune","Delhi","Agra"],["Manisha","Abhishek Gupta","Rahul","Rishav Varma"],["Software_engeneering","Hotel management","Pilot","Army"]]
solution=[4,3,4,1]
fifty_op=[["Delhi","Mumbai"],["Pune","Agra"],["Manisha","Rishav Varma"],["Pilot","Software_engeneering"]]
fifty_ans=[1,2,2,2]

kbc_game(questi,option,solution)


