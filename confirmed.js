const course = sessionStorage.getItem("courseName") 
let image = document.getElementById("background")




if( course ==="english" ){ 
    image.src = "./assets/burger.jpeg"
} else if( course === "italian"){
    image.src = "./assets/carbonara.jpeg"
} else if( course === "spanish"){
    image.src ="./assets/paella.jpeg";
} else if( course === "klingon"){
    image.src = "./assets/klingon food.jpeg"
}
