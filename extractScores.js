setTimeout(function() {
  var x = document.getElementsByName("username");
  alert(x.length);var answer; 
  
  function isVisible(e) {return !!( e.offsetWidth || e.offsetHeight || e.getClientRects().length );
  
  for(var i = 0 ; i < x.length; ++i)  {
      if(isVisible(x[i]))
        answer = i;
    }
  x[answer].value = "TakshPS";
 }
,5000);
