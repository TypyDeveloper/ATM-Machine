import inquirer from "inquirer";
let balance = 10000;
let pin = 12334;
let answer = await inquirer.prompt(
    {
        name : "Q1",
        message : "Enter our pin number",
        type : "number"
    })
    if(answer.Q1 === 12334)
        {
            console.log("Correct pin code");
            let take = await inquirer.prompt(
                {
                    name : "Q2",
                    message : "What you want to do:",
                    type : "list",
                    choices : ["Withdraw","Check Balance"]
                })
                if(take.Q2 === "Withdraw" ){
                    let takes = await inquirer.prompt({
                        name : "Q3",
                        type : "list",
                        message : "Enter amount",
                        choices : ["1000","2000","5000","10000","15000","20000"]
                    })
                    if (takes.Q3 > 10000){
                        console.log("Sorry you have insufficient balance");
                        
                    }else{
                    let cut = balance - takes.Q3;
                    console.log(`Your remaining balance is ${cut}`);
                }
                    
                }
                else if(take.Q2 === "Check Balance") {
                    console.log(`Your balance is ${balance}`);
                    
                }
                    
            
        }
        else{
            console.log("You enter incorrect pincode");
            
        }
