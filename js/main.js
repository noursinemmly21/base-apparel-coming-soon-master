



let form=document.querySelector("#register");
let button=document.querySelector(".submit");
let email=document.querySelector("#email");
let error_correct=document.querySelector(".error");

form.addEventListener("submit",(e)=>{
    error_correct.textContent=" "
    e.preventDefault();
    let validRegex =/[^0-9]\w+(\d+|\w+|\W+)?@gmail.com/ig
    let testre=validRegex.test(email.value)
    email.value=" "
    if(testre===false){
        let text_error=document.createElement("span")
        let svg_error=document.createElement("svg");
        let span_error=document.createTextNode("this is error")
        text_error.appendChild(span_error)
        svg_error.className="fa-solid fa-circle-exclamation";
        error_correct.appendChild(text_error)
        error_correct.appendChild(svg_error)
        form.appendChild(error_correct);
        return false
    }
    
    
    return true
})