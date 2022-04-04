// start header
let myHeader=document.createElement("header");
let myDiv=document.createElement("p");
let myUL=document.createElement("ul");

let mytextH=document.createTextNode("Elzero");
let myArr= ["Home", "About", "Service", "Contact"];


myHeader.appendChild(myDiv);

myHeader.appendChild(myUL);
myDiv.appendChild(mytextH);
for (let i = 0; i < myArr.length; i++) {
   let myLI=document.createElement("li");
   let myTextLi=document.createTextNode(myArr[i])
   myUL.appendChild(myLI);
   myLI.appendChild(myTextLi);
    
}

/*start-stylee*/

myHeader.style.padding="0px"
myDiv.style.color="green";
myDiv.style.display="inline";
myDiv.style.marginTop="20PX"
myUL.style.listStyle="none";
myUL.style.marginTop="3PX"
myUL.style.display="flex";
myUL.style.width="200px"
myUL.style.float="right";
myUL.style.fontSize="10px";
myUL.style.justifyContent="space-between";

/*end-stylee*/
document.body.appendChild(myHeader);
// end header


// START section-1
let mySec=document.createElement("div");

for (let index = 0; index <15; index++) {
    let myDiv1=document.createElement("div");
    let myNumber=document.createElement("h2");
    let myPro=document.createElement("p");

let myTextNum=document.createTextNode(`${index+1}`);
 let myTextPro=document.createTextNode("product");
 mySec.appendChild(myDiv1);
 myDiv1.appendChild(myNumber);
 myDiv1.appendChild(myPro);
 myNumber.appendChild(myTextNum);
 myPro.appendChild(myTextPro);
 for (let j = 0; j <15; j++) {
   
    let man= document.getElementsByClassName("div1");
    let myh=  document.getElementsByClassName("myh");
     let myp=  document.getElementsByClassName("myp");
     mySec.style.marginTop="20px"
     myDiv1.classList.add("div1");
     myNumber.classList.add("myh");
     myPro.classList.add("myp");
   myDiv1.style.backgroundColor="white";
   myDiv1.style.width="30%";
   myDiv1.style.textAlign="center";
   myDiv1.style.position="relative";
   myDiv1.style.margin="20px";
   myDiv1.style.display="inline-block"
   myDiv1.style.borderRadius="10px";
   
     
}


}


/*start-stylee*/
 mySec.style.backgroundColor="rgb(240 240 240)";
mySec.style.position="relative"
/*end-stylee*/
document.body.appendChild(mySec);
// end section-1

//start footer

let lastDiv=document.createElement("footer");
let lastp=document.createElement("p");
let lastTP=document.createTextNode("Copyright 2022");

lastDiv.appendChild(lastp);
lastp.appendChild(lastTP);

/*start stylee*/
lastDiv.style.backgroundColor="green";
lastDiv.style.height="30px";
lastp.style.textAlign="center";
lastp.style.lineHeight="30px";
lastp.style.color="white";
lastp.style.marginTop="0px";

/*end stylee*/
document.body.appendChild(lastDiv);
/*end footer*/