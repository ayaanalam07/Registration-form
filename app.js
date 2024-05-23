const form=document.querySelector("#form")
const userName=document.querySelector("#username")
const email=document.querySelector("#email")
const password=document.querySelector("#password")
const cnic=document.querySelector("#cnic")


let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let regex = /^(?=.*!)[a-zA-Z0-9!]{4,5}$/;
let cnicRegex = /^42\d{11}$/;
let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


form.addEventListener('submit', (event)=>{
    event.preventDefault()

    console.log(userName.value);
    if(emailRegex.test(email.value)){
       console.log(email.value);
    }else{
        console.log("invalid email")
    }
    console.log(password.value);

    if(cnicRegex.test(cnic.value)){
        console.log(cnic.value)
    }else{
        console.log("invalid CNIC number")
    }
})

