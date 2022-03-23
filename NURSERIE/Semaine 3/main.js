// let texte = "un text au choix";
// let nombre = 235;
// let isCool = true;

// console.log(texte)
// console.log(nombre)
// console.log(isCool)

let prenom = "Sylvain"
let age = 38

console.log("je m'appel "+prenom)
console.log('je m\'appel '+prenom)
console.log(`je m'appel ${prenom}`)

// je m'appel Sylvain j'ai 38 ans

console.log("je m'appel " + prenom + " j'ai " + age + " ans")
console.log(`je m'appel ${prenom} j'ai ${age} ans`)

// console.log(prenom.length)

prenom.substring(0,4)


console.log(prenom.split(''));

let nomComplet = "Julien La Garde, Julien La Garde, Julien La Garde";
console.log(nomComplet.split('Julien'));


// créer une nouvelle variable contenant un tableau js, avec au moins 5 entrées
    // - faire un console.log de ce tableau
    // - puis y ajouter une nouvelle entrée au début et à la fin
    // - modifier/donner une nouvelle valeur a la 3ème entrée
    // - refaire un console.log de ce tableau

let personne = {
    prenom: "Julien",
    nom: "La garde",
    age: 30,
    passions: ["foot", "natation", "jeux videos"],
    adresse : {
        rue : "rue Nationale",
        ville : "Lille",
        pays : "France"
    }
};




// <julien> est agé de <30> ans, il habite à <lille>

console.log(`${personne.prenom} est agé de ${personne.age} ans, il habite a ${personne.adresse.ville}`)

// ajouter une nouvelle passion a julien!
personne.passions.push('xxx')

//julien déménage

personne.adresse.pays = "nouveau pays"
personne.adresse.ville = "nouvelle ville"
personne.adresse.rue = "nouvelle rue"

personne.adresse = {
    rue: "nouveau rue",
    ville: "nouvelle ville",
    pays: "nouvelle pays",
}



// lire la partie objet du pdf(pages 9-10), puis:
//     - réussir a afficher cette phrase ou les mot entre <> sont des variables
//     // <julien> est agé de <30> ans, il habite à <lille>
//     - ajouter une nouvelle passion a julien(ex: lecture)
//     - julien déménage, modifier sa rue, sa ville et son pays


// déclarer une nouvelle variable 'age' avec la valeur que vous voulez, puis a l'aide d'un block condition afficher dans la console si la personne est majeur ou mineure

age = 15

if(age >= 18){
    console.log("la personne est majeur")
} else {
    console.log('la personne est mineur')
}


// nouvelle variable 'performance' vous lui donner la valeur que vous voulez, et on initialise également une variable prime a 0

    // si perf >= 90 => prime de 200
    // si perf >= 80 => prime de 150
    // si perf >= 70 => prime de 100
    // si perf < 70 => prime de 0

//     vu votre performance de XXX vous gagnez une prime de XX €

    let perf = 80 // (0-100)
    let prime = 0
    
    if(perf >= 90){
        prime = 200
    }else if(perf >= 80){
        prime = 150
    }else if( perf >= 70){
        prime = 100
    }else{
        prime = 0
    }
        
        console.log("vu votre \"performance\" de "+perf+" vous gagnez une prime de "+prime+"€")
        console.log(`vu aujourd'hui "votre performance" de ${perf} vous gagnez une prime de ${prime}€`)

// let x=12
// let message = x > 10 ? "commande permise" : "commande non permise";
// console.log(message);

let txt1 = "how're you to     day?";
let txt2 = "welcome to Hkkkkk";
// a l'aide d'un ternaire afficher dans un console.log txt1 plus CanvasGradient, ou txt2 plus grand

let message = txt1.length > txt2.length ? "txt1 plus grand": txt1.length < txt2.length ? "txt1 plus petit": "les text sont égaux";
console.log(message)

let vehicule = {
    id: 11456,
    matricule: "GH 114654 - 59",
    type: "c",
    age: 6,
};


// type : v=voiture /  c=camion
console.log(vehicule.type == "v"?"voiture": "camion")

// <= 5 ans : age normal
// >5 : vehicle agé

console.log(vehicule.age <= 5? 'age normal': 'vehicule agé')
console.log(vehicule.age > 5? 'vehicule agé': 'age normal')



prompt('bonjour')