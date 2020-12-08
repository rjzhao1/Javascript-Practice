'use strict';
var printVal1 = {
    message: "In printVal1 …",
    printMessage: function(){
    console.log(this.message);
    }
}
this.message="Global Scopes";
// var print = printVal1.printMessage;
// print(); //Throws error Cannot read property 'message'
var print2 = printVal1.printMessage.bind(printVal1);
print2();  //logs In printVal1 ...