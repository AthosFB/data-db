let volt = window.document.getElementById("txtvolta")
let comp = window.document.getElementById("comp")
function entrou() {
    volt.innerText = "<= Voltar"
    volt.style.fontSize = "40px"
    volt.style.textDecoration = "underline"
    volt.style.boxShadow = "6px 6px 6px black"
}
function saiu() {
    volt.innerText = "Voltar"
    volt.style.fontSize = "50px"
    volt.style.textDecoration = "none"
    volt.style.boxShadow = "3px 3px 3px black"
}
function entcomp() {
    comp.style.fontSize = "65px"
    comp.style.boxShadow = "25px 25px black"
    comp.style.marginTop = "90px"
    comp.style.marginRight = "90px"
}
function saicomp() {
    comp.style.fontSize = "50px"
    comp.style.boxShadow = "50px 50px black"
    comp.style.marginTop = "120px"
    comp.style.marginRight = "70px"
}