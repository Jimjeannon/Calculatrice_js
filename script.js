//Je fais mes variables global 

let btnDelete = document.querySelector(".btnDelete");
let outPut = document.getElementById("output");
let input = "";


// Suprimer tout les elements de la calculatrice 

btnDelete.addEventListener("click", function(){
outPut.innerHTML= 0;
input = "";
});

// Suprimer chaque elements de la calculatrice 

let btnRemove = document.querySelector(".btnRemove");

btnRemove.addEventListener("click", function ()
{
    input= input.replace(input.slice(-1), "");  
     outPut.innerHTML = input;
    })

// Afficher tout les elements dans le input 

    let allBtnNb = [...document.querySelectorAll(".allBtnNb")]
    console.log(allBtnNb);
    
    for (let i = 0; i < allBtnNb.length; i++) {
        
      allBtnNb[i].addEventListener("click", (e) => {
    
        e.preventDefault();
        input += allBtnNb[i].value;
    
        document.getElementById("output").innerHTML = input;
    })
    
    }


//Fait le calcul et envoie dans le input 

let egal = document.getElementById ("egal")


function calculTotal(){
  document.getElementById("output").innerHTML = eval(input);
}

egal.addEventListener("click", function(){
  calculTotal();
})

// Afficher avec le clavier 


// afficher les nombres avec le clavier 
const saisirNombre = nombre => {
  afficherKey(nombre);
 
 }
const afficherKey = text =>
outPut.textContent += text ;

document.addEventListener('keydown', e => {
    const key = e.key
  
    switch (key) {
      case '0':
        saisirNombre(0)
        break
      case '1':
        saisirNombre(1)
        break
      case '2':
        saisirNombre(2)
        break
      case '3':
        saisirNombre(3)
        break
      case '4':
        saisirNombre(4)
        break
      case '5':
        saisirNombre(5)
        break
      case '6':
        saisirNombre(6)
        break
      case '7':
        saisirNombre(7)
        break
      case '8':
        saisirNombre(8)
        break
      case '9':
        saisirNombre(9)
        break
      case '+':
        saisirNombre('+')
        break
      case '-':
        saisirNombre('-')
        break
      case '*':
        saisirNombre('x')
        break
      case '.':
        saisirNombre(".")
        break
        case '=':
            calculTotal("=")
            break
    }
})


