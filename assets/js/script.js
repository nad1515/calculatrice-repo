
let  main = document.createElement("main");
document.body.appendChild(main);
let signes = ["+","-","*","/"];

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

 //........clavierSignes..............   
}
  for ( let index = 0; index <= 3; index ++) {
  let clavSignes = document.createElement("button");
  clavSignes.classList.add("signes")
  clavier.appendChild(clavSignes);
  clavSignes.innerText = signes[index];

}
  //.........egle..........
  let equal = document.createElement("button");
  equal.classList.add("egale")
  clavier.appendChild(equal);
  equal.innerText = "=";
  //......;;;point.........

  let point = document.createElement("button");
  point.classList.add("vergule")
  clavier.appendChild(point);
  point.innerText = ".";

  // Fonctionnement de la calculatrice
  let mesBoutons = document.querySelectorAll("button");
  for (let index = 0; index < mesBoutons.length; index++) {
    mesBoutons[index].addEventListener("click", (eventClick) => {
        console.log("Bouton cliqué : ", eventClick.target.innerText);
        document.querySelector(".calc-ecran").innerText = eventClick.target.innerText;
       
    })
    
}


 
 




