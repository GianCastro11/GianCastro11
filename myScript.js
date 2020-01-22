for(i = 0;i < 30; i++){
  document.write ("Loop number"+ i +"<br />");
}

for(i = 200; i > 150; i--){
  document.write ("Loop Number"+ i +"<br />");
}

var ans = Math.pow(2,9)
document.write("Power of:" + ans + "<br />")

for(i = 2; i < 9; i++){
  document.write("Loop of " + i + "<br />")
}

var beginning = 20;
var limit = -20;

/*while(beginning < limit)
  {
    document.write("Current Count: " +beginning )
    beginnng++;
  } */
  
  while(beginning > limit)
    {
      document.write(" Current Count: " + beginning + "<br />")
      beginning = beginning -2;
    }

function myLoop(){ 
var end = document.getElementById("end").value;
var start = document.getElementById("start").value;
for(var i = start; i <= end; i++)
  {
    document.write('<p>' + i);
  }
  }
