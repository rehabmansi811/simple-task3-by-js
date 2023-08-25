//take string from user 
 var str =prompt("pleas enter string");
  var nstr=str;
 var i=0;
 var count=0;
 for (const i of nstr){
if (i==="e")
count++;
 }
 document.write("The number of e characters in the string is: " + count);