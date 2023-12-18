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
    event.preventDefault()
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
    event.preventDefault()
    
        if (!anrede.value){ 
            document.getElementById("errorMessage1").innerHTML= `please select your salute`
        } else { 
            document.getElementById("errorMessage1").innerHTML= ``
        }

        if (!vorname.value){ 
            document.getElementById("errorMessage2").innerHTML= `please add your name`
        } else { 
            document.getElementById("errorMessage2").innerHTML= ``
        }
        if (!nachname.value){ 
            document.getElementById("errorMessage3").innerHTML= `please add your surname `
        } else { 
            document.getElementById("errorMessage3").innerHTML= ``
        }
        if (!geburtsdatum.value){ 
            document.getElementById("errorMessage4").innerHTML= `please select your birthday`
        } else { 
            document.getElementById("errorMessage4").innerHTML= ``
        }if (!strasse.value){ 
            document.getElementById("errorMessage5").innerHTML= `please fill your adress`
        } else { 
            document.getElementById("errorMessage5").innerHTML= ``
        }
        if (!plz.value){ 
            document.getElementById("errorMessage6").innerHTML= `please select your salute`
        } else { 
            document.getElementById("errorMessage6").innerHTML= ` please fill your PLZ`
        }
        if (!ort.value){ 
            document.getElementById("errorMessage7").innerHTML= `please select your ORT`
        } else { 
            document.getElementById("errorMessage7").innerHTML= ``
        }
        if (!email.value){ 
            document.getElementById("errorMessage8").innerHTML= `please insert your E-mail`
        } else { 
            document.getElementById("errorMessage8").innerHTML= ``
        }
        if (!telg.value ){ 
            document.getElementById("errorMessage9").innerHTML= `please give your telephone number`
        } else { 
            document.getElementById("errorMessage9").innerHTML= ``
        }
        if (!telp.value){ 
            document.getElementById("errorMessage10").innerHTML= `please give your telephone number`
        } else { 
            document.getElementById("errorMessage10").innerHTML= ``
        }
        if (!agb.value){ 
            document.getElementById("errorMessage11").innerHTML= `please accept the AGB`
        } else { 
            document.getElementById("errorMessage11").innerHTML= ``
        }
        if (!bemerkung.value){ 
            document.getElementById("errorMessage13").innerHTML= `please provide relevan informations / observations`
        } else { 
            document.getElementById("errorMessage13").innerHTML= ``
        }
     

    
}

 function setStore(){
    event.preventDefault()
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
    event.preventDefault()
    let selectedValue = radioButton.value;
sessionStorage.setItem( "newsletter", selectedValue)
if (!selectedValue){ 
    document.getElementById("errorMessage12").innerHTML= `please select an option`
} else { 
    document.getElementById("errorMessage12").innerHTML= ``
}

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