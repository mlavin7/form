// defining variables adresses in the DOM

let anrede = document.getElementById("anrede")
let vorname = document.getElementById("vorname")
let nachname = document.getElementById("nachname")
let geburtsdatum = document.getElementById("geburtsdatum")
let strasse = document.getElementById("strasse")
let plz = document.getElementById("plz")
let ort = document.getElementById("ort")
let email = document.getElementById("email")
let telg = document.getElementById("telg")
let telp = document.getElementById("telp")
let agb = document.getElementById("agb")
let bemerkung = document.getElementById("bemerkung")

// here i will pass the functions I want to work at on click
// this includeds validation and setStore

function onSubmit(){
    console.log("lala")
    event.defaultPrevent
    validation()
    setStore()
}


// function validation(){
//     console.log("lele")
// if (!anrede.value || !vorname.value || !nachname.value || !geburtsdatum.value
//     || !strasse.value || !plz.value || !ort.value || !email.value || !telg.value 
//     || !telp.value ||! agb.value ||  !bemerkung.value ){
//    alert(" please complete all fields")
// }
// else if (plz.value < 1000 || plz.value > 9999) {
//     alert("Please insert valid PLZ")
// }
// };

function validation(){
    console.log( " vali vali")
    if (!vorname.value){
        vorname.classList.add("error")
    }
}

 function setStore(){
    console.log( "lulu")
if( anrede.value && vorname.value && nachname.value && geburtsdatum.value
    && strasse.value &&  plz.value && ort.value && email.value && telg.value 
    && telp.value &&  agb.value  && bemerkung.value)
    {
   console.log("set store f is being readed")

   sessionStorage.setItem( "anrede", anrede.value )
   sessionStorage.setItem( "vorname", vorname.value)
   sessionStorage.setItem( "nachname", nachname.value)
   sessionStorage.setItem( "geburtsdatum", geburtsdatum.value)
   sessionStorage.setItem( "strasse", strasse.value)
   sessionStorage.setItem( "plz", plz.value)
   sessionStorage.setItem( "ort", ort.value)
   sessionStorage.setItem( "email",email.value )
   sessionStorage.setItem("telg", telg.value)
   sessionStorage.setItem( "telp", telp.value)
   sessionStorage.setItem("agb", agb.value)
   sessionStorage.setItem( "bemerkung", bemerkung.value)

   document.getElementById("myForm").submit()
}
      }


function saveRadioValue(radioButton) {
    let selectedValue = radioButton.value;
sessionStorage.setItem( "newsletter", selectedValue)

    }
// testing individual validation
// function anredeValidation() {

//     vorname.addEventListener("input", function(e){
//       vorname.setCustomValidity('');//remove message when new text is input
//     });
//     vorname.addEventListener("invalid", function(e){
//       vorname.setCustomValidity('Please enter your name');
//       vorname.style.borer = "red" //custom validation message for invalid text
//     });}

// document.addEventListener('DOMContentLoaded', function () {
    // Get the input element
    

//     // Add an event listener to the input field
//     vorname.addEventListener('input', function () {
//         // Check if the input is empty
//         if (vorname.value.trim() === '') {
//             // If empty, set a red border directly using inline style
//             vorname.style.border = '2px solid red';
//         } else {
//             // If not empty, set the default border color using inline style
//             vo.style.border = '2px solid #ccc';
//         }
//     });
// })