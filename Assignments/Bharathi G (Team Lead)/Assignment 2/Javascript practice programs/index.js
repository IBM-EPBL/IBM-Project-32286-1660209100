/*
// HOW TO WRITE TEXTS IN WEBPABE USING JAVASCRIPT
function basic(){
  document.write("<h1 style='color:teal;'>JAVASCRIPT TUTORIAL</h1>");
  document.write("<hr/>");
  document.write("<p>Writing javascript in external file.</p> ");
  document.write("<p>We can actually write html inside javascript.</p> ");
}
*/

//DATATYPES IN JAVASCRIPT
datatypes()
function datatypes(){
  document.write("<h2 style='color:crimson;'>DATA TYPES</h2>");
  var name="Hello world"
  document.write("String   : "+name+ "<br/>");
  var age=19;
  document.write("Int      : "+age+"<br/>");
  var cgpa=8.96;
  document.write("Float: "+cgpa+"<br/>");
  var isfemale= true;
  document.write("Boolean: "+isfemale+"<br/>");
  var arrears=null;
  document.write("Null: "+arrears+"<br/>");
  var endsemexam=undefined;
  document.write("Undefined: "+endsemexam);
}

//STRINGS AND METHODS IN JAVASCRIPT
stringsAndMethods()
function stringsAndMethods(){
  document.write("<h2 style='color:crimson;'>STRINGS AND METHODS</h2>");
  var phrase="Strings are awesome";
  var text="awesome";
  document.write("<b>Here's a few string methods:</b> <br/> ");
  document.write(phrase.length);
  document.write("<br/>" +phrase.toUpperCase());
  document.write("<br/>"+phrase.toLowerCase());
  document.write("<br/>"+phrase.charAt(0));
  document.write("<br/>"+phrase.endsWith("awesome"));
  document.write("<br/>"+phrase.indexOf("a"));
  document.write("<br/>"+phrase.lastIndexOf("a"));
  document.write("<br/>"+phrase.includes("awesome"));
  document.write("<br/>"+phrase.substring(phrase.lastIndexOf("a"),phrase.length));
}


//MATH FUNCTIONS IN JAVASCRIPT
mathFunctions()
function mathFunctions(){
  document.write("<h2 style='color:crimson;'>MATH FUNCTIONS</h2>");
  var a=4;
  var b=8;
  document.write("Addition : ",a+b,"<br>");
  document.write("<b>Here's a few math functions:</b>");
  var number=-5;
  var decimal=5.28;
  var wholeno=36;
  document.write("<br/>Absolute value: "+Math.abs(number));
  document.write("<br/>Maximum value: "+Math.max(number,decimal));
  document.write("<br/>Minimum value: "+Math.min(number,decimal));
  document.write("<br/>Rounding a value: "+Math.round(decimal));
  document.write("<br/>Squratroot value: "+Math.sqrt(wholeno));
  document.write("<br/>Power of a num: "+Math.pow(number,2));
  document.write("<br/>Random number: "+Math.random());
}

//HOW TO GET USER INPUT IN JAVASCRIPT
userInput()
function userInput(){
  var name= window.prompt("enter your name");
  alert("Hey "+name+" Nice to meet you ");
}
/*
//BASIC CALCULATOR USING JAVASCRIPT
function basicCalculator(){
  var num1=window.prompt("Enter a number");
  var num2=window.prompt("Enter another number");
  num1=parseInt(num1);
  num2=parseInt(num2);
  document.write(num1+num2);
}


//ARRAYS IN JAVASCRIPT
function arrays(){
  var friends= new Array("Mike",24,"Tom",23,"Harry",25);
  var vegetables=["carrot","potato","tomato","onion"]
  document.write(friends+"<br\>");
  document.write(vegetables)
}


//FUNCTION WITH RETURN TYPE IN JAVASCRIPT
function add(num1,num2){
  return num1+num2;
}
result=add(2,3);


//EVENT LISTENERS IN javascript
function handleClick(element) {
  element.style="background-color:lightblue;";
}

var button = document.getElementById("button");
button.addEventListener("click",function(){
  this.innerHTML="Clicked";
  this.style="background-color:lightblue;"
});

var image=document.getElementById("image");
image.addEventListener("mouseover",function(){
  this.style="box-shadow:0px 0px 3px 3px lightgrey";
  this.width="170";
});

image.addEventListener("mouseout",function(){
  this.style="";
  this.width="150";
});


//MESSAGING APP
var textbox= document.getElementById("textbox");
var messages= document.getElementById("messages");
var sendbutton= document.getElementById("sendbutton");
sendbutton.addEventListener("onclick", function(){
  this.innerHTML="clicked";
});



//IF STATEMENTS IN JAVASCRIPT
function ifStatements(){
  var isFemale=true;
  var isTall=true;
  if(isFemale && isTall){
    document.write("You are a tall female.");
  }else if (isFemale && !isTall ){
    document.write("You are a short female.");
  }else if(!isFemale && isTall){
    document.write("You are a tall male.");
  }else {
    document.write("You are a short male.");
  }
}
ifStatements();
 


//SWITCH STATEMENTS IN JAVASCRIPT
function switchStatements() {
  do{
    var num1=window.prompt("Enter a num");
    var num2=window.prompt("Enter another num");
    var value=window.prompt("Choose one operation ( + , - , * , / )");
    num1=parseInt(num1);
    num2=parseInt(num2);

    switch(value){
      case '+':
        document.write(num1+" + "+num2+" = ");
        document.write(num1+num2);
        document.write("<br/>");
        break;
      case '-':
        document.write(num1+" - "+num2+" = ");
        document.write(num1-num2);
        document.write("<br/>");
        break;
      case '/':
        document.write(num1+" / "+num2+" = ");
        document.write(num1/num2);
        document.write("<br/>");
        break;
      case '*':
        document.write(num1+" * "+num2+" = ");
        document.write(num1*num2);
        document.write("<br/>");
        break;
      default:
        document.write("Invalid input");
        break;
    };
    var yesOrNo = window.prompt("Do you want to continue ? \n(Yes/No)");

  }while(yesOrNo == "Yes" || yesOrNo == "yes")
}

switchStatements(); */


// //OBJECTS IN JAVASCRIPT
// var myMovies = {
//   title:"Frozen",
//   year:2013,
//   duration:"1hr 42min",
//   cast:[
//     {
//       Name:"Idina Menzel",
//       Birthday:new Date("May 30, 1971"),
//       Native:"New York",
//       Role:"Elsa"
//     },
//     {
//       Name:"Kristen Bell",
//       Birthday:new Date("July 18,1980"),
//       Native:"Michigan",
//       Role:"Anna"
//     }
//   ]
// }
// document.write(myMovies.cast[1].Role); 



// //WHILE LOOPS IN JAVASCRIPT
// var i = 0;
// while(i<=10){
//   document.write(i);
//   i++;
// } 



// //PASSWORD CHECKER IN JAVASCRIPT
// var password="Poose";
// var yourPassword ;
// var count=0;
// var countlimit =3;
// var limitExceed =false;
// while(password != yourPassword && !limitExceed){
//   if(count< countlimit){
//     yourPassword = window.prompt("Enter the password.");
//     count++;
//   }else {
//     limitExceed=true;
//   }
// }
// if(limitExceed == true){
//   alert("You have exceeded your limit.");
// }else {
//   alert("You got it!");
// }



// //FOR LOOPS IN JAVASCRIPT
//  for(var i = 0 ; i < 10 ; i++){
//    document.write(i+"<br/>");
//  }


//  //MULTIPLE CHOICE QUESTIONS IN JAVASCRIPT
//  var questions=[
//    {
//      prompt:"1.What color is the sky ?\n(a).Red\n(b).Blue\n(c).Yellow",
//      answer:"b",
//    },
//    {
//      prompt:"1.What color is the moon ?\n(a).White\n(b).Blue\n(c).Yellow",
//      answer:"a",
//    },
//    {
//      prompt:"1.What color is the sun ?\n(a).Red\n(b).Blue\n(c).Orange",
//      answer:"c",
//    }
//  ]

//  var score=0;
//  for(var i=0;i<questions.length;i++){
//    var response=window.prompt(questions[i].prompt);
//    if(response == questions[i].answer){
//      alert("CORRECT!");
//      score++;
//    }else {
//      alert("WRONG!");
//    }
//  }
// document.write("Your score is "+score+"/"+questions.length);



// //NESTED FOR LOOP AND 2D ARRAY IN JAVASCRIPT
// var matrixA=[
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ]
// var matrixB=[
//   [9,8,7],
//   [6,5,4],
//   [3,2,1]
// ]
// var matrixC =[[],[],[]];
// for(var i=0; i<matrixA.length;i++){
//   for(var j=0 ; j<matrixB.length;j++){
//     matrixC[i][j]=matrixA[i][j]*matrixB[j][i];
//   }
// }

// for(var i=0; i<matrixC.length; i++){
//   for(j=0; j<matrixC[i].length; j++){
//     document.write(matrixC[i][j]);
//     document.write("\t");
//   }
//   document.write("<br/>");
// }

