function titleCase(str){
   var smallStr = str.toLowerCase().split(' ');
   for (var i = 0; i < smallStr.length; i++) {
       smallStr[i] = smallStr[i].charAt(0).toUpperCase() + smallStr[i].substring(1);     
   }
   alert(smallStr.join(" "));
}

titleCase("the quick brown fox");