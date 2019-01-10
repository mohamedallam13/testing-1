function thisfunc() {
  var x = this;
  x=x+1
  Logger.log(x);
}

function splicefunc() {
  var x = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(5,1,5,1);
  x.splice(0,2,'a','b');
  Logger.log(x);
}

function splicefunc() {
  var x = [1,2,3,4,5];
  x.splice(0,2,'a','b');
  Logger.log(x);
}

function keysfunc() {
  var arr = ['a', 'b', 'c']
  Logger.log(Object.keys(arr))
  
}

var a = 2, b = 2


function testarg(arg1,arg2){
  
  if (arguments.length <2){
    Logger.log(arg1 + 0)
    /*throw new Error("Hahahahahah")*/
  }
  
  Logger.log(arg1 + arg2)
  
}

function testarg2(){
  
  testarg(a,b)
  
}
//change is imminent