GCD=(n,num)=>{
    let i=1;
    var gcd=1
    while(i<n){
        if(n%i==0 && num%i==0){
            gcd=i;
        }
        i++;
    }
    console.log(gcd)
}
d=require("readline-sync");
n=d.question("enter number: ")
num=d.question("enter sec number: ")
GCD(n,num)

