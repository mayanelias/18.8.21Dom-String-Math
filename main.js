//!!!!!Math!!!!!//
//!1//
// function getFromZeroToNinetyNine(){
//    var randomaly= Math.floor(Math.random(0)*100);
//    return randomaly
// }
// var result=getFromZeroToNinetyNine();
// console.log(result);
//!2//
// function getFromZeroToTenThousand(){
//        var randomaly= Math.floor(Math.random(0)*10000);
//        return randomaly
//     }
//     var result=getFromZeroToTenThousand();
//     console.log(result);
//!3//
//  function getFromZeroToFiftyFour(){
//     var randomaly= Math.floor(Math.random(0)*55);
//     return randomaly
//  }
//  var result=getFromZeroToFiftyFour();
//  console.log(result);
//!4//
//  var userInput=prompt("guess number from 0-99")
//  function getFromUserInput(){
//     var randomaly= Math.floor(Math.random(0)*100);
//     return userInput
//  }
//  var result=getFromUserInput();
//  console.log(result);
//!5//
// var userInput=prompt("guess number from 0-9")
//  function getFromUserInputZeroToNine(){
//     var randomaly= Math.floor(Math.random(0)*10);
//     if(userInput==randomaly){
//     return alert("you are right")
//     }
//     return alert("try again")
//  }
//  getFromUserInputZeroToNine();
//!6//
//  var userInput=prompt("guess number from 0-99")
//  function getFromUserInputZeroToNinetyNine(){
//     var randomaly= Math.floor(Math.random(0)*100);
//     if(userInput==randomaly){
//     return alert("you are right")
//     }
//     return alert("try again")
//  }
//  getFromUserInputZeroToNinetyNine();
//!7//
// var userName=prompt("enter name")
//  var userInput=prompt("guess number from 0-9")
//  function getFromUserInputNameZeroToNine(){
//     var randomaly= Math.floor(Math.random(0)*9);
//     if(userInput==randomaly){
//     console.log(userName,userInput,"you won");
//     }
//     else alert("try again")
//  }
//  getFromUserInputNameZeroToNine();
//!!!!!Dom!!!!!//
//!1//
// function helloThere(){
// document.write("hello there")
// }
// helloThere()
//!2//
// function helloThereDavid(){
//     document.write("hello there david")
//     }
//     helloThereDavid()
//!3//
// var userName=prompt("enter name")
// function userNameHelloThere(){
//     document.write(userName ," " ,"hello there")
//     }
//     userNameHelloThere()
//!4//
// var userFirstName=prompt("enter name")
// var userLastName=prompt("enter last name")
// var userAge=prompt("enter age")
// function userFirstLastNameAge(){
//     document.write(userFirstName ," " ,userLastName," ",userAge)
//     }
//     userFirstLastNameAge()
//!5//
// var userFirstName=prompt("enter name")
// var userAge=prompt("enter age")
// function printDiv(name,age){
//     document.getElementById("divUser").innerHTML=`name:${name},age:${age}`
// }
// printDiv(userFirstName,userAge)
//!6//
// var userFirstName=prompt("enter name")
// var userLastName=prompt("enter last name")
// var userAge=prompt("enter age")
// function printDiv3(first,last,age){
//     document.getElementById("div1").innerHTML=`name:${first}`
//     document.getElementById("div2").innerHTML=`last name:${last}`
//     document.getElementById("div3").innerHTML=`age:${age}`
// }
// printDiv3(userFirstName,userLastName,userAge)
//!7//
// var userFirstName=prompt("enter name")
// var userAge=prompt("enter age")
// function prinTowindow(name,age){
//   document.write(`<div>name:${name},age:${age}</div>`)  
// }
// prinTowindow(userFirstName,userAge);
//!8//
// var userFirstName=prompt("enter name")
// var userLastName=prompt("enter last name")
// var userAge=prompt("enter age")
// function prinTowindowP(first,last,age){
//     document.write(`<div><p>name:${first} last name:${last} age:${age}</p></div>`)  
//   }
//   prinTowindowP(userFirstName,userLastName,userAge);
//!9//
// var userFirstName=prompt("enter name")
// var userLastName=prompt("enter last name")
// var userAge=prompt("enter age")
//   function prinTowindowP(first,last,age){
//     document.write(`<p id=myP>name:${first} last name:${last} age:${age}</p>`)  
//   }
//   prinTowindowP(userFirstName,userLastName,userAge);
//!10A//
// var userFirstName=prompt("enter name")
// var userLastName=prompt("enter last name")
// var userAge=prompt("enter age")
//   function prinTowindowP(first,last,age){
//     document.write(`<div><p id=myPh>name:${first} last name:${last} age:${age}</p></div>`)  
//   }
//!10B//
// var userLastName=prompt("enter last name")
// function userLastNameAndP(last){
// document.getElementById("ph").innerHTML=last
// }
// var result=userLastNameAndP(userLastName);
//!11A//
// var userFirstName=prompt("enter name")
// function userFirstNameP(){
//     document.write(`<p id=ph>name:${userFirstName}</p`)
// }
// userFirstNameP()
//!11B//
// var userLastName=prompt("enter last name")
// function userLastNameP(){
//     var myDate= new Date() ; 
//     document.getElementById("p").innerHTML= (userLastName+" "+myDate);
// }
// userLastNameP()
//!12A//
// var carColor=prompt("enter car color")
// var carBrand=prompt("enter car brand")
// var carCapacity=Number(prompt("enter car capacity"))
// function car(Ccolor,Cbrand,Ccapacity){
//     var myCar={};
//     myCar.color=Ccolor;
//     myCar.brand=Cbrand;
//     myCar.capacity=Ccapacity;
//     console.log(myCar); 
//     }
//     car(carColor,carBrand,carCapacity);
//!12B//
// var carColor = prompt("enter car color")
// var carBrand = prompt("enter car brand")
// var carCapacity = Number(prompt("enter car capacity"))
// function car(Ccolor, Cbrand, Ccapacity) {
//         var myCar={};
//     myCar.color=Ccolor;
//     myCar.brand=Cbrand;
//     myCar.capacity=Ccapacity;
//    document.write(`color:${myCar.color} brand:${myCar.brand} capacity:${myCar.capacity}`)      
// }
// car(carColor, carBrand, carCapacity);
//!13A//
// var carColor=prompt("enter car color")
// var carBrand=prompt("enter car brand")
// var carCapacity=Number(prompt("enter car capacity"))
// function car(Ccolor,Cbrand,Ccapacity){
//     var myCar={};
//     myCar.color=Ccolor;
//     myCar.brand=Cbrand;
//     myCar.capacity=Ccapacity;
//     myCar.year= new Date().getFullYear();
//     console.log(myCar); 
//     }
//     car(carColor,carBrand,carCapacity);
//!13B//
// var carColor = prompt("enter car color")
// var carBrand = prompt("enter car brand")
// var carCapacity = Number(prompt("enter car capacity"))
// function car(Ccolor, Cbrand, Ccapacity) {
//         var myCar={};
//     myCar.color=Ccolor;
//     myCar.brand=Cbrand;
//     myCar.capacity=Ccapacity;
//    document.write(`color:${myCar.color} brand:${myCar.brand} capacity:${myCar.capacity}`)      
// }
// car(carColor, carBrand, carCapacity);
//!14A//
// var carColor=prompt("enter car color")
// var carBrand=prompt("enter car brand")
// var carCapacity=Number(prompt("enter car capacity"))
// function car(Ccolor,Cbrand,Ccapacity){
//     var myCar={};
//     myCar.color=Ccolor;
//     myCar.brand=Cbrand;
//     myCar.capacity=Ccapacity;
//     console.log(myCar); 
//     }
//     car(carColor,carBrand,carCapacity);
//!14B//
// var carColor=prompt("enter car color")
// var carBrand=prompt("enter car brand")
// var carCapacity=Number(prompt("enter car capacity"))
// function car(Ccolor,Cbrand,Ccapacity){
//     var myCar={};
//     myCar.color=Ccolor;
//     myCar.brand=Cbrand;
//     myCar.capacity=Ccapacity;
//     document.getElementById("myDiv").innerHTML=(`color:${myCar.color} brand:${myCar.brand} capacity:${myCar.capacity}`) 
//     }
//     car(carColor,carBrand,carCapacity);
//!15A//
// var carColor=prompt("enter car color")
// var carBrand=prompt("enter car brand")
// var carCapacity=Number(prompt("enter car capacity"))
// function car(Ccolor,Cbrand,Ccapacity){
//     var myCar={};
//     myCar.color=Ccolor;
//     myCar.brand=Cbrand;
//     myCar.capacity=Ccapacity;
//     myCar.year= new Date().getFullYear();
//     console.log(myCar); 
//     }
//     car(carColor,carBrand,carCapacity);
//!15B//
// var carColor=prompt("enter car color")
// var carBrand=prompt("enter car brand")
// var carCapacity=Number(prompt("enter car capacity"))
// function car(Ccolor,Cbrand,Ccapacity){
//     var myCar={};
//     myCar.color=Ccolor;
//     myCar.brand=Cbrand;
//     myCar.capacity=Ccapacity;
//     myCar.year= new Date().getFullYear();
//    document.getElementById("1").innerHTML=myCar.color;
//    document.getElementById("2").innerHTML=myCar.brand;
//    document.getElementById("3").innerHTML=myCar.capacity;
//    document.getElementById("4").innerHTML=myCar.year;
//     }
//     car(carColor,carBrand,carCapacity);
//!16A//
// var carColor=prompt("enter car color")
// var carBrand=prompt("enter car brand")
// var carCapacity=Number(prompt("enter car capacity"))
// function car(Ccolor,Cbrand,Ccapacity){
//     var myCar={};
//     myCar.color=Ccolor;
//     myCar.brand=Cbrand;
//     myCar.capacity=Ccapacity;
//     myCar.year= new Date().getFullYear();
//     console.log(myCar); 
//     }
//     car(carColor,carBrand,carCapacity);
//!16B//
// var carColor=prompt("enter car color")
// var carBrand=prompt("enter car brand")
// var carCapacity=Number(prompt("enter car capacity"))
// function car(Ccolor,Cbrand,Ccapacity){
//     var myCar={};
//     myCar.color=Ccolor;
//     myCar.brand=Cbrand;
//     myCar.capacity=Ccapacity;
//     myCar.year= new Date().getFullYear();
//    document.getElementById("1").innerHTML=myCar.color;
//    document.getElementById("2").innerHTML=myCar.brand;
//    document.getElementById("3").innerHTML=myCar.capacity;
//    document.getElementById("4").innerHTML=myCar.year;
//     }
//     car(carColor,carBrand,carCapacity);
//!!!!!!!String!!!!!!!//
//!1//
// var userString=prompt("enter string");
// function myString(){
//     if(userString.length>5){

//         return "long"
//     }
//     return "short"    
// }      
// var result=myString(userString);
// console.log(result);
//!2//
// var userString=prompt("enter string");
// function getMyA(){
//     for(var i=0;i<userString.length;i++){
//         if(userString.indexOf("a")>-1){
//             return "a"

//         }
//     }
//     return "not found"
// }
// var result=getMyChar();
// console.log(result);
//!3//
// var userString=prompt("enter string");
// function getMyR(){
//     for(var i=0;i<userString.length;i++){
//         if(userString.indexOf("r")>-1){
//             return true
//         }
//     }
//     return false
// }
// var result=getMyR();
// console.log(result);
//!4//
// var userString=prompt("enter string");
// var userChar=prompt("enter character");
// function getMyChar(str,char){
//     for(var i=0;i<str.length;i++){
//         if(str.indexOf(char)>-1){
//             return true
//         }
//     }
//     return false
// }
// var result=getMyChar(userString,userChar);
// console.log(result);
//!5//
// var userString=prompt("enter string");
// var userChar=prompt("enter char");
// function getStringChar(str,character){
//     for(var i=0;i<str.length;i++){
//         if(str[i].lastIndexOf(character)>-1){
//             return i

//         }
//     }
//     return ("the char dosent exist")
// }
// var result=getStringChar(userString,userChar);
// console.log(result);
//!6//
// var userString=prompt("enter string");
// function get3Char(){
// return userString.substr(0,3)
// }
// var result=get3Char(userString);
// console.log(result);
//!7//
// var userString=prompt("enter string");
// function get4Char(){
// return userString.substr(0,4)
// }
// var result=get4Char(userString);
// console.log(result);
//!8//
// var userString=prompt("enter string");
// function get4Char(){
// return userString.substr(3,8)
// }
// var result=get4Char(userString);
// console.log(result);
//!9//
// var userString=prompt("enter string");
// var userIndex=prompt("enter index");
// function isStringIndex(str,inx){
//     for(var i=0;i<str.length;i++){
//         if(inx>str.length){
//             return("index too big")
//         }
//     }
//     return str.substr(inx)   
// }
// result=isStringIndex(userString,userIndex);
// console.log(result);
//!10//
// var userString=prompt("enter string");
// var userIndex=prompt("enter index");
// function isIndexString(str,inx){
//     for(var i=0;i<str.length;i++){
//         if(inx>str.length){
//             return("index too big")
//         }
//     }
//     return str.substring(inx,3)   
// }
// result=isIndexString(userString,userIndex);
// console.log(result);
//!11//
// userString=prompt("enter string");
// userFirstNum=prompt("enter first number");
// userSecondNum=prompt("enter second number");
// function isStringTwoNumbers(str,num1,num2){
//     for(var i=0;i<str.length;i++){
//         if(str==num1){
//             return str.substr(num1)

//         }
//     }
//     return str.substr(num2)
// }
// var result=isStringTwoNumbers(userString,userFirstNum,userSecondNum);
// console.log(result);
//!12//
// var userString=prompt("enter string");
// function get3Char(){
// return userString.substring(0,3)
// }
// var result=get3Char(userString);
// console.log(result);
//!13//
// var userString=prompt("enter string");
// function get4Char(){
// return userString.substring(2,6)
// }
// var result=get4Char(userString);
// console.log(result);
//!14//
// var userString=prompt("enter string");
// function get5Char(){
// return userString.substring(3,8)
// }
// var result=get5Char(userString);
// console.log(result);
//!15//
// let firstName=prompt("enter first name");
// let lastName=prompt("enter last name");
// function printLong(first,last){
//     if(first.length>last.length){
//         return first;
//     }
//     return last;
//     }
// let result=printLong(firstName,lastName);
// console.log(result);
//!16//
// var firstUserString=prompt("enter first string");
// var secondUserString=prompt("enter second string");
// function isTwoString(str1,str2){
//     if(str1==str2){
//         return str1&&str2.toLowerCase()
//     }
//     return ("not the same")
// }
// var result=isTwoString(firstUserString,secondUserString);
// console.log(result);
//!17//
// var firstUserString=prompt("enter first string");
// var secondUserString=prompt("enter second string");
// function isTwoString(str1,str2){
//     if(str1==str2){
//         return str1&&str2.toUpperCase()
//     }
//     return ("not the same")
// }
// var result=isTwoString(firstUserString,secondUserString);
// console.log(result);
//!18//
// let firstName=prompt("enter first name");
// let lastName=prompt("enter last name");
// function printA(first){
//     if(first.indexOf("a")>-1){
//         return true
//     }
//     return false
// }
// let result=printA(firstName)
// console.log(result);
// function printApi(last){
//     if(last.indexOf("api")>-1){
//         return true
//     }
//     return false
// }
// let result1=printApi(lastName)
// console.log(result1);
//!19//
// let fullName=prompt("enter full name");
// function printLengthString(string){
//     console.log(string.length);
// }
// let result=printLengthString(fullName);
// let fullName=prompt("enter full name");
// function printSpaceString(string){
//     if(string.indexOf(" ")>-1){
//     return true
//     }
//     return false
// }
// let result=printSpaceString(fullName);
// console.log(result);
// let fullName=prompt("enter full name");
// function printFirstHalfName(first){
//   return first.substring(0,first.indexOf(" "))  
// }
// let result=printFirstHalfName(fullName);
// console.log(result);
// function printSecondHalfName(last){
//    return last.substring(last.indexOf(" ")+1)
// }
// let result1=printSecondHalfName(fullName);
// console.log(result1);
//!20//
// let str=prompt("enter string");
// function printLong(string){
//     if(string.length>5){
//         return ("long");
//     }
//     return ("short");
//     }
// let result=printLong(str);
// console.log(result);
//!21//
// let state=prompt("enter country");
// function printLong(string){
//     if(string.length<3){
//         return ("yes");
//     }
//     return ("no");
//     }
// let result=printLong(state);
// console.log(result);
//!22//
// let str=prompt("enter string");
// let char=prompt("enter char")
// function printStrChar(string,character){
//     if(string.length>6){
//         return string
//     }
//     return string.indexOf(character)
//     }
// let result=printStrChar(str);
// console.log(result);
//!23//
// let str=prompt("enter string");
// let char=prompt("enter char");
// function getstringChar(string,character){
//     if(string.indexOf(character)>-1){
//     return string.indexOf(character)
//     }
//     return string    
// }
// let result=getstringChar(str,char);
// console.log(result);
//!24//
// let firstName=prompt("enter first name");
// let lastName=prompt("enter last name");
// let firstName=prompt("enter a name");
// let lastName=prompt("enter last name");
// function getFirstName(first){
//     return first.substring(0,1);
// }
// let result=getFirstName(firstName);
// console.log(`${result}. ${lastName.toUpperCase()}`);
//!25//
// let lastName1=prompt("enter last name 1");
// let lastName2=prompt("enter last name 2");
// function printLongLastName(last1,last2){
//     if(last1.length>last2.length){
//         console.log(last2.toLowerCase()); 
//         return last1
//     }
//     console.log(last1.toLowerCase()); 
//     return last2      
//     }  
// let result=printLongLastName(lastName1,lastName2);
// console.log(result);
//!26//
// let firstName=prompt("enter first name");
// let char=prompt("enter char");
// function getNameChar(name,character){
//     if(name.indexOf(character)>-1){
//         return name
//     }
//     return ("not exist")
// }
// let result=getNameChar(firstName,char);
// console.log(result);











