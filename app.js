const set1 = new Set();


function get(){
    const num = Math.floor(Math.random() * 99) + 1;
    if(set1.has(num)){
        get();
    }
    else{
        set1.add(num);
        document.getElementById("number").innerHTML=num;
    }
    
}
function checkValue(){
    const userInput = prompt("Enter a value:");
     const num = parseInt(userInput);
    alert(set1.has(num));
}

// function checkValue() {
//     const inputValue = document.getElementById("check").value;
//     const inputNumber = parseInt(inputValue);

//     if (!isNaN(inputNumber)) {
//         if (set1.has(inputNumber)) {
//             document.getElementById("found").innerHTML="true";
//             s();
//         } else {
//             document.getElementById("found").innerHTML="false";
//             s();
//         }
//     } 
//     else {
//         document.getElementById("found").innerHTML="valid number";
//         s();
//     }
//     function s() {
//         timeout = setTimeout(alertFunc, 2000);
//       }
    
//     function alertFunc() {
//         document.getElementById("found").innerHTML="";
//       }
    
// }



