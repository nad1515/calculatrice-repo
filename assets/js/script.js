
let  main = document.createElement("main");
document.body.appendChild(main);
//............calculatrice..................

let calculatrice = document.createElement("div");
main.appendChild(calculatrice);
calculatrice.classList.add("calculatrice");

//............calcecran...........................

let calcEcran = document.createElement("div");
calculatrice.appendChild(calcEcran);
calcEcran.classList.add("calc-ecran");
calcEcran.innerText ="0";

//............clavier................

let clavier = document.createElement("div")
calculatrice.appendChild(clavier);
clavier.classList.add("chiffres-signes")

//...........clavierchiffres............

 for (let index = 9; index >= 0; index--) {
    let clavChiffres = document.createElement("button");
    clavier.appendChild(clavChiffres);
    clavChiffres.classList.add("chiffres"); 
    clavChiffres.innerText = index;

    
 }
 for (let){

 }
 
 




