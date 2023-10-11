// (envoie une alerte)= alert('bonjour les sio');
//(envoi un message dans la console du navigateur permet de debuger)= console.log('bonjour les sio');
//('var' crée une variable, il faut mla nommer et lui donner une valeur si besoin)= var somme =0;
// ('console.log' permet d'afficher les infos dans la console du site pour débuger)= console.log(somme);
//('function' permet d'appeler une fonction qui a été definie afin de l'utiliser)= functioncalcul(){}
/// si on appelle une variable au debut elle sera dispo tout le long du code, si on crée une variable dans une fonction, celle ci sera dispo juste pour cette fonction
//('let' permet de declarer une variable sans qu'elle ne sort de son bloc, de sa fonction, de la condition dans laquelle elle est créé)= let bidon=2;
//('const' crée une constante cette valeur ne pourra pas etre changé)= const somme =0; (si on appelle somme=20 alors cela ne vas pas fonctionner carl la valeur de somme est tjrs egale a 0 dû a son const)
//('unTab'crée un tableau et met les variables a l'intérieur)= var unTab = new Array("quiche","abricot","poire");
//
/*
var somme =0;
somme = calcul();
console.log(somme);


function calcul(){
    var nb1 = 5;
    var nb2 = 10;
    var total;
    total = nb1 + nb2;

    if (total == 15){
        let bidon = 2;
        console.log(bidon);
    }
    return total;
}

var unTab = new Array("quiche","abricot","poire");
console.log(unTab);

//met le tableau dans l'ordre alphabétique
unTab.sort(function(a,b){
    if (a > b){
        return 1;
    } else {
        return -1;
    }
});
console.log(unTab);
unTab.push('pomme','banane','kiwi');
unTab.sort();//retrie le tableau
console.log(unTab);
unTab.pop();
console.log(unTab);
console.log(unTab.length);//donne le nombre d'entités dans le taleau


var nom;
nom = prompt("Saisir votre nom");
alert("Votre nom est "+nom);

aleur = prompt("saisir un entier");
valeur = parseInt(valeur);//transforme un integer en texte

valeur = prompt("Saisir un réel");
valeur = parseFloat(valeur)    //transforme un nombre a virgule en texte

var nombre;
nombre = Math.round(Math.random()*10);
alert(nombre) //donne un nombre aléatoire entre 1 et 10


var saisie;
var nombrealea;
var essais= 2;
nombrealea = Math.round(Math.random()*10);
saisie = prompt('saisir un nombre entre 1 et 10 vous avez 3 essais')
do {
    if (saisie>nombrealea) {
        saisie = prompt("c'est plus petit, saisir un nombre entre 1 et 10 plus que  "+essais+ "essais")
    }else if (saisie<nombrealea) {
        saisie = prompt("c'est plus grand,saisir un nombre entre 1 et 10 plus que  "+essais+ "essais")
    }
    essais--
} while (saisie != nombrealea && essais >0);
if (saisie==nombrealea) {
    alert("vous avez trouvé le nombre qui etait  "+ nombrealea);
}else{
    alert("les 3 essais sont épuisés RIP");
}

console.log(window.document); //Afficher le contenu du document dans la console de site. Vous pouvez dérouler son contenu en cliquant sur les dérouleurs

console.log(window.document.title); //affiche le titre du document

var valeur = document.getElementById("titre");
console.log(valeur.innerText); //affiche le titre de la page dans la console

var valeur2 = document.getElementById("para");
console.log(valeur2.innerHTML); //montre dans la console le contenu de la balise p
console.log(valeur2.nodeName);//montre dans la console le type de balise du texte : ici p

var valeurs = document.getElementsByTagName("h2");
console.log(valeurs); // Ici nous voyons que valeurs est une HTML Collection
//Parcours d'une HTML Collection
for (let item of valeurs) {
console.log(item.innerText); // Nous parcourons la liste des H2 et nous affichons chacun des contenus.
}
console.log(" Il y a "+valeurs.length+ " chapitre(s) ") ;
var stat = document.getElementById("stat");
 stat.innerText=' Il y a ' + valeurs.length + ' chapitre(s) ';

var ul = document.getElementById("liste");
//console.log(ul.children);
var liste = []; // je déclare un tableau vide
for (let item of ul.children) { // Je parcours la collection HTML et j’ajoute au tableau chaquevaleur de la liste ul
liste.push(item.innerText);
}
liste.sort(); // je trie le tableau
var i=0;
liste.forEach(function(element) { //Je parcours le tableau trié ul.children[i].innerText = element; je mets dans la liste ul l’élément du tableau à l’indice i
i = i + 1; // J’incrémente i afin de placer le prochain élément en dessous.
});

*/
//jeu nb alea 
var nbalea = Math.round(Math.random() * 10);
var nbsaisi = document.getElementById("nbsaisi");
var btn = document.getElementById("btn");
btn.addEventListener("click", btClick, false);
var essais = 2;
var mystere = document.getElementById("mystere");
console.log(nbalea)

function btClick() {

    if (nbalea > nbsaisi.value) {
        mystere.innerText = "plus grand saisir un nombre entre 1 et 10 plus que  " + essais + " essais";
        essais = essais - 1;
    }
    if (nbalea < nbsaisi.value) {
        mystere.innerText = "plus petit saisir un nombre entre 1 et 10 plus que  " + essais + " essais";
        essais = essais - 1;
    }
    if (nbsaisi.value < 1) {
        mystere.innerText = "ERREUR, saisir un nombre entre 1 et 10 plus que  " + essais + " essais";
        essais = essais + 1;
    }
    if (nbsaisi.value > 10) {
        mystere.innerText = "ERREUR, saisir un nombre entre 1 et 10 plus que  " + essais + " essais";
        essais = essais + 1;
    }

    if (essais == -1) {
        mystere.innerText = "les 3 essais sont épuisés RIP";
    }

    if (nbsaisi.value == nbalea) {
        mystere.innerText = "vous avez trouvé le nombre qui etait" + nbsaisi.value + "!";
    }
}


//jeu nb alea 

//mot qui apparait et disparait
var panneau = document.getElementById("caché");
var btn = document.getElementById("btn7");
btn.addEventListener("click", btClick7, false);

function btClick7() {
    if (panneau.style.display == "block") {
        panneau.style.display = "none";
    } else {
        panneau.style.display = "block";
    }
}

//mot qui apparait et disparait



//affiche l'index et le contenu du choix qu'il a fait
sel.addEventListener("click", () => { console.log(sel.children[(sel.selectedIndex)].innerText, sel.selectedIndex) }, false)
console.log(sel.children[(sel.selectedIndex)].innerText, sel.selectedIndex)
console.log(sel.selectedIndex)
console.log(sel.children[2])
console.log(sel.value)

//affiche l'index et le contenu du choix qu'il a fait


// ajout valeur dans list ul /li
var btn2 = document.getElementById("ajouter");
btn2.addEventListener("click", btClick2, false);

function btClick2() {
    var li = document.createElement("li");
    li.innerText = sel.children[(sel.selectedIndex)].innerText;
    listeVal.appendChild(li)
}

//ajout valeur dans list ul / li



//Récupérer des données à partir du nom d’une classe 

valeurs = document.getElementsByClassName("note");
console.log(valeurs);

//Récupérer des données à partir du nom d’une classe 



//cochage, decochage et inversion de checkbox
var btn3 = document.getElementById("ttc");
btn3.addEventListener("click", btnClick5, false);
var btn3 = document.getElementById("ttdc");
btn3.addEventListener("click", btnClick6, false);
var btn3 = document.getElementById("I");
btn3.addEventListener("click", btnClick7, false);
var check = document.getElementsByClassName("checkbox")


function btnClick5() {
    for (item of check) {
        item.checked = true;
    }

}
function btnClick6() {
    for (item of check) {
        item.checked = false;
    }

}
function btnClick7() {
    for (let item of check) {
        if (item.checked == false) {
            item.checked = true;
        }
        else if (item.checked == true) {
            item.checked = false;
        }

    }

}
//cochage, decochage et inversion de checkbox

//facturation

//facturation

//carousel
var carousel = document.getElementById("carousel");
var listcar = [];
var index = 0;
for (let imagecar of carousel.children) {
    listcar.push(imagecar)
}
var precedent = document.getElementById("precedent");
var suivant = document.getElementById("suivant");
precedent.addEventListener("click", precedt, false);
suivant.addEventListener("click", suivt, false);


function precedt() {
    if (index == 0) {
        listcar[index].style.display = "none";
        index = listcar.length-1;
        listcar[index].style.display = "block";
    }else{
        listcar[index].style.display = "none";
        index--;
        listcar[index].style.display = "block";   
    }
}
function suivt() {
    if (index == listcar.length - 1) {
        listcar[index].style.display = "none";
        index = 0;
        listcar[index].style.display = "block";
    }else{
        listcar[index].style.display = "none";
        index++;
        listcar[index].style.display = "block";   
    }

}
setInterval(()=>{
    suivt()
},250)
//carousel

