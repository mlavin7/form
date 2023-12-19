const course = sessionStorage.getItem("courseName") //< here i am geting ,my items
let image = document.getElementById("courseImage")



if( course ==="english" ){ 
    document.getElementById("courseName").innerHTML= `${course} `
    document.getElementById("courseDescription").innerHTML = `Embark on a captivating linguistic journey with our course, "Dynamic English Discourse." This innovative program blends literature, culture, and contemporary communication to enhance your language skills. From classic literature to digital discourse, explore diverse genres and master persuasive writing and eloquent speech. Engage in thought-provoking discussions, analyze modern media, and navigate the evolving landscape of English in the digital age. Join us to unlock the power and beauty of language, making every word count in today's dynamic world.`
    image.src = './assets/english.jpeg'
} else if( course === "italian"){
    document.getElementById("courseName").innerHTML= `${course} `
    document.getElementById("courseDescription").innerHTML =` 
    Embark on a captivating linguistic and cultural odyssey with our course, "Vivace Italiano: A Journey Through Language and Culture." Immerse yourself in the allure of Italian as our experienced instructors guide you through dynamic lessons, combining essential language skills with an exploration of Italy's rich heritage. From mastering everyday conversation to delving into literature, music, and film, this course promises an engaging experience for beginners and intermediate learners alike. Join us to unlock the joy of speaking Italian with confidence and cultural flair, making each lesson a vibrant celebration of la dolce vita.`
    image.src = './assets/italy.jpeg'
} else if( course === "spanish"){
    document.getElementById("courseName").innerHTML= `${course} `
    document.getElementById("courseDescription").innerHTML =`
    Embark on a vibrant linguistic adventure with our course, "Sabor Español: A Journey into Spanish Language and Culture." Dive into the rhythmic tapestry of the Spanish language as our skilled instructors guide you through immersive lessons, blending essential language skills with an exploration of the diverse cultures that shape the Spanish-speaking world. From mastering everyday communication to delving into the richness of Spanish literature, music, and cinema, this course caters to both beginners and intermediate learners. Join us to unlock the passion and rhythm of Spanish, fostering a deep appreciation for language and culture that extends far beyond the classroom. ¡Bienvenidos a Sabor Español! (Welcome to Spanish Flavor!)`
    image.src ='./assets/spain.jpeg';
} else if (course === "klingon"){
    document.getElementById("courseName").innerHTML= `${course} `
    document.getElementById("courseDescription").innerHTML =` Embark on a thrilling intergalactic linguistic expedition with our course, "Klingon Mastery: Conquering the Warrior's Tongue." Immerse yourself in the complex and guttural beauty of the Klingon language as our expert instructors guide you through an immersive curriculum, blending essential language skills with the cultural nuances of this proud warrior race. From mastering Klingon grammar and vocabulary to delving into the rich tapestry of Klingon lore and traditions, this course caters to both language enthusiasts and those seeking to communicate with honor and strength. Engage in immersive scenarios, honing your conversational skills in the distinctive tones of Qo'noS. Join us to unlock the secrets of the Warrior's Tongue and boldly go where few have gone before.Qapla'! Dochvetlh vISopla' vItlhutlh. (Success! Embrace the challenge and conquer it.)`
    image.src = './assets/Klingon Empire.jpeg'
}
