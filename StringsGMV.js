function strings() {
    var string1 = document.getElementById("initStr").value;
    var string2 = document.getElementById("sndStr").value;
    
    alert(string1);
    alert(string2);
// Creates an alert reading back the input to the user
var str3 = string1 + string2;
// creates a concatenated string
var len = string2.length 

document.getElementById("updatedString").innerHTML = "concatenated string" + str3;
var rev = str3;
// Concatenates Strings One and Two to create String Three

var splitString = str3.split("");
alert(splitString);
// repeats the input back to the user but dotted

var reverseArray = splitString.reverse();
alert(rev);
//repeats the input back to the user as an alert mashed together in one line

var joinArray = reverseArray.join("");
alert(joinArray);
//repeats the input back to the user as an alert of the input placed backwords

document.getElementById("Updated string").innerHTML = "revers of string = " + joinArray;
}

if (joinArray == str3)
{
    alert("this is a palindrone")
}
// Gives the User the Alert for when they have created a Palindrone