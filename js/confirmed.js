const course = sessionStorage.getItem("courseName") 
let image = document.getElementById("background")




if( course ==="english" ){ 
    image.src = "./assets/Img/burger.jpeg"
} else if( course === "italian"){
    image.src = "./assets/Img/carbonara.jpeg"
} else if( course === "spanish"){
    image.src ="./assets/Img/paella.jpeg";
} else if( course === "klingon"){
    image.src = "./assets/Img/klingon food.jpeg"
}
