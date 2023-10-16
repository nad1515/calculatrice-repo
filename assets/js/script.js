
let  main = document.createElement("main");
document.body.appendChild(main);
let signes = ["+","-","*","/"];
let saisie = [];

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
  //.........egale..........
  let equal = document.createElement("button");
  equal.classList.add("egale")
  clavier.appendChild(equal);
  equal.innerText = "=";
  //......;;;point.........

  let point = document.createElement("button");
  point.classList.add("vergule")
  clavier.appendChild(point);
  point.innerText = ".";

 
  let bouttonAC = document.createElement("button");
  clavier.appendChild(bouttonAC);
  bouttonAC.setAttribute("id","btnAC")
  bouttonAC.innerText = "AC"; 



  //  Fonctionnement de la calculatrice...................................
  let mesBoutons = document.querySelectorAll(".chiffres, .signes, .vergule");
  console.log(mesBoutons);
  mesBoutons.forEach((mesBoutons) => {
    mesBoutons.addEventListener("click", (evenementClick) => {
      // console.log(saisie.length)
      if(saisie.length === 0)
      document.querySelector(".calc-ecran").innerText = "";
      document.querySelector(".calc-ecran").innerText += evenementClick.target.innerText;
      saisie.push(evenementClick.target.innerText);
    
      
    });
  });
   
  //.............boutton AC........................................
  let delet = document.querySelector("#btnAC");
  delet.addEventListener('click', function () {
      saisie = []; 
     document.querySelector(".calc-ecran").innerText = "0";
       calculer(saisie);

  });

///...................EVAL...............
 let calcul = document.querySelector(".egale")
     calcul.addEventListener('click', (fonctioncalcul) => {
  document.querySelector(".calc-ecran").innerText= eval(document.querySelector(".calc-ecran").innerText);

 });

//  function calculer(operation) {
    //eval()
 
 // Et si c'est un bouton qui a reçu le click et qu'on veut récupérer le texte du bouton 
  // (innerText ou textContent) :
  // console.log(eventClick.target.innerText);
