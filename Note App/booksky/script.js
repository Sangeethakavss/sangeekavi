//selecting popup box popup overlay button
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style. display="block"
})

var cancelpopup = document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
    popupoverlay.style.display="none"
    popupbox.style.display="none"
}
)
//select container
var container=document.querySelector(".container")

var addbook=document.getElementById("add-book")
var booktitleinput= document.getElementById("book-title-input")
var bookauthorinput= document.getElementById("book-author-input")
var bookdescriptioninput= document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.CreateElement("div")
    div.setAttribute("class","book-container")
    div.innerhtml=`<h1>${booktitleinput.value}</h1>`
    container.append(div)
    

})

//concat
 let names = "Kavss";
 let age = 18;
 let profession = "Developer";

 let Person = " My name is "+ names +" and My age is "+ age +" and my profession is "+ profession;
 console.log(Person);

 //Template Literals

  let Person1= `My Name is ${names}, and My age is ${age}, and My Profession is ${profession}.`
 console.log(Person1);

 //Function

 //function Details(){
    //console.log("Details function is Working")

 //};
 //Details()

 //return

 //function Details(){
    //let x = 10;
    //let y = 20;
    //return x + y
 //}
 //let result = Details()
 //console.log(result);

 //function add(a,b){
       //return a+b
 //}
 //let result1 = add(10,20);
 //console.log(result1);

 //function fullName(firstName,lastName){
    //let FirstName = firstName;
    //let LastName = lastName;
    //console.log(`My First Name is ${FirstName} and my Second Name is ${LastName}`)}; 
    //fullName("sangeetha","swaminathan")
    //fullName("Heamalatha","Swaminathan");
 
 //Arrow Function
 const myfun = ()=>{
    console.log("I am Arrow Function");
 }
    
 myfun();