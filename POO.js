class Animal{
    constructor(nom, couleur, sante = 100){
        this.nom = nom;
        this.couleur = couleur
        this.sante = 
    }

    dormir(){
        console.log("L'animal" + this.nom + "dort.");
    }

    manger(){
        console.log("L'animal" + this.nom + "mange.");
    }

    attaquer(){
        console.log("L'animal" + this.nom + "attaque.");
    }

    seDeplacer(){
        console.log("L'animal" + this.nom + "seDeplace.");
    }

    Communiquer(){
        console.log("L'animal" + this.nom + "communique.");
    }
}

class Oiseau extends Animal{
    constructor(nom, couleur, sante = 100, longueurDesAiles);
        super(nom, couleur, sante);

        this.longueurDesAiles = longueurDesAiles;
}

voler(){
    super.seDeplacer();
    console.log("L'oiseau" + this.nom + "chante.");
}

