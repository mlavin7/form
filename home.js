let course= document.getElementById("courseName")


function onSubmit(){
event.preventDefault()
 setStore()
}

function setStore(){
    sessionStorage.setItem("courseName", course.value)
    console.log(course)
    document.getElementById("myForm").submit()
}