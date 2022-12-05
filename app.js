let Personne = {
    nom1: "coursan",
    prenom1: "corentin",
    age1: "19",
    sexe1: "masculin",

    nom2: "degousé",
    prenom2: "dominique",
    age2: "45",
    sexe2: "feminin",

    getNomPrenom1: function () {
        return "Ma personne s'apelle " + this.nom1 + " " + this.prenom1 + ", elle a " + this.age1 + " ans"
        + " et elle est de sexe " + this.sexe1
    },

    getModif1: function () {
        this.age1 = 34
        return this.age1
    },

    getNomPrenom2: function () {
        return "Ma personne s'apelle " + this.nom2 + " " + this.prenom2 + ", elle a " + this.age2 + " ans"
            + " et elle est de sexe " + this.sexe2
    },

    getModif2: function () {
        this.age2 = 67
        return this.age2
    }
}

document.getElementById('propriete1').innerHTML = Personne.prenom2
document.getElementById('propriete2').innerHTML = Personne.nom2
document.getElementById('method1').innerHTML = Personne.getNomPrenom1()
document.getElementById('method2').innerHTML = Personne.getModif1()



document.getElementById('propriete3').innerHTML = Personne.prenom1
document.getElementById('propriete4').innerHTML = Personne.nom1
document.getElementById('method3').innerHTML = Personne.getNomPrenom2()
document.getElementById('method4').innerHTML = Personne.getModif2()


console.log(Personne.getNomPrenom1());
console.log(Personne.getModif1());

console.log(Personne.getNomPrenom2());
console.log(Personne.getModif2());
