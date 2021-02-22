
var family_array = ["Dad.png","Mom.png","boy.png","girl.png"];

var i = 0;

var name_array = ["Raja Ramana Macha","Rehana Macha","Sai Smaran Macha","Sai Sruti Macha"];



function next_hooman() {

document.getElementById("id_pic").src=family_array[i];
document.getElementById("name").innerHTML=name_array[i];
if ( i >= 3) {
 i = 0;   
}

else {i++;}
}



