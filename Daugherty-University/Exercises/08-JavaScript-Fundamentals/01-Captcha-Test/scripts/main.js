// Declare Values
let notYetHuman = true;
let firstTry = true;
let num1, num2, sum, promptMessage, promptReply, confirmMessage, confirmReply;
while(notYetHuman) {
    // Generate Prompt
    num1 = Math.floor(Math.random() * 100);
    num2 = Math.floor(Math.random() * 100);
    sum = num1 + num2;
    confirmReply = false;
    // Make sure they are ok with they're answer
    while(!confirmReply) {
        if(firstTry) {
            promptMessage = "How much is " + num1.toString() + " + " + num2.toString() + "?";
        } else {
            promptMessage = "That's not correct. Try again. " + 
            "How much is " + num1.toString() + " + " + num2.toString() + "?";
        }
        promptReply = prompt(promptMessage);
        // Generate Confirm
        confirmMessage = "Are you sure that " + num1.toString() + " + " + num2.toString() + " = " + promptReply.toString() + "?";
        confirmReply = confirm(confirmMessage);
    }
    if(promptReply == sum) {
        notYetHuman = false;
        console.log("Human user identified");
        document.write("Human user identified");
    } else {
        firstTry = false;
    }
}