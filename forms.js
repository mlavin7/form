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


function validation(){
    console.log("lele")
if (!anrede.value || !vorname.value || !nachname.value || !geburtsdatum.value
    || !strasse.value || !plz.value || !ort.value || !email.value || !telg.value 
    || !telp.value ||! agb.value ||  !bemerkung.value ){
   alert(" please complete all fields")
}
else if (plz.value < 1000 || plz.value > 9999) {
    alert("Please insert valid PLZ")
}
};

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
 
 
