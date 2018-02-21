class BaseballPlayer {
   constructor(name) {
       this.name = name;
       this.SuccessfulBattingAttempts = 0;
       this.strikes = 0;
   }

   hit() {
       let success = Math.round(Math.random());
       if(success == 1) {
           this.SuccessfulBattingAttempts++;
       } else {
           this.SuccessfulBattingAttempts--;
       }
   }

   getSuccessfulBattingAttempts() {
       return this.SuccessfulBattingAttempts;
   }

   showSuccessfulBattingAttempts() {
       console.log(`${this.name}: ${this.getSuccessfulBattingAttempts()} hits`);
   }
}

// Creating instances and running them
var matt = new BaseballPlayer("Matt");
matt.hit();
matt.hit();
matt.hit();
matt.hit();

var greg = new BaseballPlayer("Greg");
greg.hit();
greg.hit();
greg.hit();
greg.hit();

matt.showSuccessfulBattingAttempts(); // In my case, it logged: Matt: 3 hits
greg.showSuccessfulBattingAttempts(); // In my case, it logged: Greg: 2 hits