let form = document.getElementById("form");
let namehard = document.getElementById("namehard");
let checkboxint = document.getElementById("checkboxint");
let checkboxon = document.getElementById("checkboxon");
let assunto = document.getElementById("assunto");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    let namehardValue = namehard.value;
    let checkboxintValue = checkboxint.value;
    let checkboxonValue = checkboxon.value;
    let assuntoValue = assunto.value;

    if (namehardValue === "") {
        setErrorFor(namehard, "Insira o nome do computador");
    } else {
        setSuccessFor(namehard);
    }

    let formControls = form.querySelectorAll(".form-control");
    let formIsValid = [...formControls].every(formControl => {
return (formControl.className === "form-control success");
    });

    if (formIsValid){
        console.log("O formulário está 100% valido");
    } 
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    //Add Error Message
    small.innerText = message;

    //Add Error Class
    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    //Add Sucess Class
    formControl.className = "form-control success";
}