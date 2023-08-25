import okCPF from "../js/cpf-verify.js";
import okAGE from "../js/age-verify.js";

const formfield = document.querySelectorAll("[required]");

formfield.forEach((field) => {
    field.addEventListener("blur", () => fieldVerify(field));
    field.addEventListener("invalid", event => event.preventDefault());
});

const errorList = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
];

const messageList = {
    name: {
        valueMissing: "Por favor, preencha este campo.",
        patternMismatch: "Por favor, preencha com um nome válido.",
        tooShort: "Por favor, preencha com um nome válido."
    },
    email: {
        valueMissing: "Por favor, preencha este campo.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "Por favor, preencha este campo.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caracteres suficientes."
    },
    phone: {
        valueMissing: "Por favor, preencha este campo.",
        patternMismatch: "Por favor, preencha um telefone válido.",
        typeMismatch: "Por favor, preencha um número válido.",
        tooShort: "Por favor, preencha um número válido."
    },
    cpf: {
        valueMissing: 'Por favor, preencha este campo.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caracteres suficientes."
    },
    birth: {
        valueMissing: 'Por favor, preencha este campo.',
        customError: 'Você deve ter ou ser maior que 18 anos para se cadastrar.'
    },
    terms: {
        valueMissing: 'Você deve aceitar os termos antes de continuar.',
    }
};

function fieldVerify(field) {
    let message = "";
    field.setCustomValidity("");

    if (field.name == "cpf" && field.value.length >= 11) {
        okCPF(field);
    } if (field.name == "birth" && field.value != "") {
        okAGE(field);
    }
    errorList.forEach(error => {
        if (field.validity[error]) {
            message = messageList[field.name][error];
        }
    });

    const messageError = field.parentNode.querySelector(".message");
    const validityInput = field.checkValidity();

    if (!validityInput) {
        messageError.textContent = message;
    } else {
        messageError.textContent = "";
    }
}


/*=== ACCORDION =================================*/

const openDown = document.querySelectorAll(".help-info");

openDown.forEach(accordion => {
    accordion.addEventListener("click", () => {
        accordion.classList.toggle("active");

        let accordionIMG = accordion.querySelector('#open');
        if (accordionIMG.textContent === '►') {
            accordionIMG.textContent = '▼';
        } else {
            accordionIMG.textContent = '►';
        }

    })
})

/*=== MENU-MOBILE =================================*/

const open = document.getElementById("menu-open");
const close = document.getElementById("menu-close");

open.addEventListener("click", function (){
    document.body.classList.add("menu-expanded");
})

close.addEventListener("click", function (){
    document.body.classList.remove("menu-expanded");
})

/*=== ARROW-UP =================================*/

const btn = document.getElementById("btnTop");

btn.addEventListener("click", function (){
    window.scrollTo(0,0);    
})

document.addEventListener("scroll", hide);

function hide(){
    if (window.scrollY > 10){
        btn.style.display = "block"
    } else {
        btn.style.display = "none"
    }
}


