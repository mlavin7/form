        const anrede = sessionStorage.getItem("anrede") //< here i am geting ,my items
        const vorname = sessionStorage.getItem("vorname")
        const nachname = sessionStorage.getItem("nachname")
        const geburtsdatum = sessionStorage.getItem("gebrtsdatum")
        const strasse = sessionStorage.getItem ("strasse")
        const plz =sessionStorage.getItem("plz")
        const ort = sessionStorage.getItem("ort")
        const email = sessionStorage.getItem("email")
        const telg = sessionStorage.getItem("telg")
        const telp = sessionStorage.getItem("telp")
        const agb = sessionStorage.getItem("agb")
        const newsletter = sessionStorage.getItem("newsletter")
        const bemerkung = sessionStorage.getItem("bemerkung")


        document.getElementById("anrede").innerHTML= `${anrede} `
        document.getElementById("vorname").innerHTML=  `${vorname}`
        document.getElementById("nachname").innerHTML= `${nachname}`
        document.getElementById("geburtsdatum").innerHTML= `${geburtsdatum}`
        document.getElementById("strasse").innerHTML= `${strasse}`
        document.getElementById("plz").innerHTML= `${plz}`
        document.getElementById("ort").innerHTML= `${ort}`
        document.getElementById("email").innerHTML= `${email}`
        document.getElementById("telg").innerHTML= `${telg}`
        document.getElementById("telp").innerHTML= `${telp}`
        document.getElementById("agb").innerHTML= `${agb}`
        document.getElementById("newsletter").innerHTML= `${newsletter}`
        document.getElementById("bemerkung").innerHTML= `${bemerkung}`
        document.getElementById("salute").innerHTML = `Dear ${anrede} ${vorname} ${nachname} welcome to Setilingua!!`