let m1 = window.document.getElementById("md1")
let m2 = window.document.getElementById("md2")
let m3 = window.document.getElementById("md3")
let busc = window.document.getElementById("busca")
let vrm1 = window.document.getElementById("vrm1")
let vrm2 = window.document.getElementById("vrm2")
let vrm3 = window.document.getElementById("vrm3")
let img1 = window.document.getElementById("mdimg1")
let img2 = window.document.getElementById("mdimg2")
let img3 = window.document.getElementById("mdimg3")
let sai1 = window.document.getElementById("sai1")
let comp1 = window.document.getElementById("compra1")
let sai2 = window.document.getElementById("sai2")
let comp2 = window.document.getElementById("compra2")
let sai3 = window.document.getElementById("sai3")
let comp3 = window.document.getElementById("compra3")
function ent1() {

    saiu()

    m1.style.width = "620px"
    m1.style.height = "442px"

    m2.style.width = "320px"
    m2.style.height = "229px"

    m3.style.width = "320px"
    m3.style.height = "229px"

    vrm1.innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, eius deserunt consectetur sapiente libero dicta corporis amet recusandae reiciendis odit iure ipsa nobis autem commodi et voluptates ullam officiis sunt?"
    vrm1.style.backgroundColor = "white"
    vrm1.style.width = "400px"
    vrm1.style.marginLeft = "100px"
    vrm1.style.color = "black"
    vrm1.style.lineHeight = "25px"
    vrm1.style.fontSize = "20px"

    vrm2.style.marginTop = "60px"
    vrm2.style.marginLeft = "50px"

    vrm3.style.marginTop = "60px"
    vrm3.style.marginLeft = "50px"

    img1.style.marginLeft = "160px"
    img2.style.marginTop = "20px"
    img3.style.marginTop = "20px"

    img1.style.boxShadow = "0px 0px 0px 6px rgb(165, 90, 56)"
    img2.style.boxShadow = "0px 0px 0px 0px rgb(165, 90, 56)"
    img3.style.boxShadow = "0px 0px 0px 0px rgb(165, 90, 56)"

    img2.style.marginLeft = "4px"
    img3.style.marginLeft = "4px"

    sai1.innerText = "Sair"
    comp1.innerText = "Comprar"
}
function ent2() {
    
    saiu()

    m2.style.width = "620px"
    m2.style.height = "442px"

    m1.style.width = "320px"
    m1.style.height = "229px"

    m3.style.width = "320px"
    m3.style.height = "229px"

    vrm2.innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, eius deserunt consectetur sapiente libero dicta corporis amet recusandae reiciendis odit iure ipsa nobis autem commodi et voluptates ullam officiis sunt?"
    vrm2.style.backgroundColor = "white"
    vrm2.style.width = "400px"
    vrm2.style.marginLeft = "100px"
    vrm2.style.color = "black"
    vrm2.style.lineHeight = "25px"
    vrm2.style.fontSize = "20px"

    vrm1.style.marginTop = "60px"
    vrm1.style.marginLeft = "50px"

    vrm3.style.marginTop = "60px"
    vrm3.style.marginLeft = "50px"

    img2.style.marginLeft = "160px"
    img1.style.marginTop = "20px"
    img3.style.marginTop = "20px"

    img2.style.boxShadow = "0px 0px 0px 6px rgb(165, 90, 56)"
    img1.style.boxShadow = "0px 0px 0px 0px rgb(165, 90, 56)"
    img3.style.boxShadow = "0px 0px 0px 0px rgb(165, 90, 56)"

    img1.style.marginLeft = "4px"
    img3.style.marginLeft = "4px"

    sai2.innerText = "Sair"
    comp2.innerText = "Comprar"
}
function ent3() {
    
    saiu()

    m3.style.width = "620px"
    m3.style.height = "442px"

    m2.style.width = "320px"
    m2.style.height = "229px"

    m1.style.width = "320px"
    m1.style.height = "229px"

    vrm3.innerText = ""
    vrm3.style.width = "0px"
    vrm3.style.height = "0px"

    vrm2.style.marginTop = "60px"
    vrm2.style.marginLeft = "50px"

    vrm1.style.marginTop = "60px"
    vrm1.style.marginLeft = "50px"

    img3.style.marginLeft = "160px"
    img2.style.marginTop = "20px"
    img1.style.marginTop = "20px"

    img3.style.boxShadow = "0px 0px 0px 6px rgb(165, 90, 56)"
    img2.style.boxShadow = "0px 0px 0px 0px rgb(165, 90, 56)"
    img1.style.boxShadow = "0px 0px 0px 0px rgb(165, 90, 56)"

    img2.style.marginLeft = "4px"
    img1.style.marginLeft = "4px"
}
function entbusc() {
   
    saiu()

    busc.style.width = "540px"
    busc.style.height = "1500px"

    m1.style.width = "340px"
    m1.style.height = "200px"

    m2.style.width = "340px"
    m2.style.height = "200px"

    m3.style.width = "340px"
    m3.style.height = "200px"

    vrm1.style.marginLeft = "60px"
    vrm2.style.marginLeft = "60px"
    vrm3.style.marginLeft = "60px"

    vrm1.style.marginTop = "40px"
    vrm2.style.marginTop = "40px"
    vrm3.style.marginTop = "40px"

    img1.style.marginTop = "20px"
    img2.style.marginTop = "20px"
    img3.style.marginTop = "20px"

    img1.style.marginLeft = "10px"
    img2.style.marginLeft = "10px"
    img3.style.marginLeft = "10px"

    img1.style.boxShadow = "0px 0px 0px 0px rgb(165, 90, 56)"
    img2.style.boxShadow = "0px 0px 0px 0px rgb(165, 90, 56)"
    img3.style.boxShadow = "0px 0px 0px 0px rgb(165, 90, 56)"
}
function entsai() {
    sai1.style.textDecoration = "underline"
}
function saisai() {
    sai1.style.textDecoration = "none"
}
function saiu() {
    m1.style.width = "420px"
    m1.style.height = "300px"

    m2.style.width = "420px"
    m2.style.height = "300px"
    m2.style.marginTop = "100px"

    m3.style.width = "420px"
    m3.style.height = "300px"

    busc.style.width = "300px"
    busc.style.height = "1500px"

    vrm1.innerText = "Ver Mais"
    vrm1.style.width = "210px"
    vrm1.style.height = "40px"
    vrm2.innerText = "Ver Mais"
    vrm2.style.width = "210px"
    vrm2.style.height = "40px"
    vrm3.innerText = "Ver Mais"
    vrm3.style.width = "210px"
    vrm3.style.height = "40px"

    vrm1.style.marginTop = "60px"
    vrm1.style.marginLeft = "105px"
    vrm2.style.marginTop = "60px"
    vrm2.style.marginLeft = "105px"
    vrm3.style.marginTop = "60px"
    vrm3.style.marginLeft = "105px"

    img1.style.marginTop = "60px"
    img2.style.marginTop = "60px"
    img3.style.marginTop = "60px"

    img1.style.marginLeft = "52.5px"
    img2.style.marginLeft = "52.5px"
    img3.style.marginLeft = "52.5px"

    img1.style.boxShadow = "0px 0px 0px 2px rgb(165, 90, 56)"
    img2.style.boxShadow = "0px 0px 0px 2px rgb(165, 90, 56)"
    img3.style.boxShadow = "0px 0px 0px 2px rgb(165, 90, 56)"

    sai1.innerText = ""
    comp1.innerText = ""
    sai2.innerText = ""
    comp2.innerText = ""
    sai3.innerText = ""
    comp3.innerText = ""

    vrm1.style.backgroundColor = "rgb(44, 42, 42)"
    vrm1.style.color = "rgb(165, 90, 56)"
    vrm1.style.lineHeight = "40px"
    vrm1.style.fontSize = "17px"
    vrm2.style.backgroundColor = "rgb(44, 42, 42)"
    vrm2.style.color = "rgb(165, 90, 56)"
    vrm2.style.lineHeight = "40px"
    vrm2.style.fontSize = "17px"
    vrm3.style.backgroundColor = "rgb(44, 42, 42)"
    vrm3.style.color = "rgb(165, 90, 56)"
    vrm3.style.lineHeight = "40px"
    vrm3.style.fontSize = "17px"
}