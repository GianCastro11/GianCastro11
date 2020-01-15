for(i = 0;i < 30; i++){
  document.write ("Loop number"+ i +"<br />");
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
