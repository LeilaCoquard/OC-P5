//Deux tableaux de citations sous format matrice, où la première partie correspond au début de citations, la deuxième partie au milieu de citations et la troisième partie à la fin de citations
//Premier tableau sur les citations de Gandhi
const tabGandhi =[["La victoire obtenue par la violence","La haine", "Un homme cruel avec les animaux", "Lorsque nous critiquons, il", "La démocratie", "Colère et intolérance"],[" équivaut ", " tue ", " ne peut être ", " faut ", " devrait ", " sont "],["à une défaite, car elle est momentanée.", "toujours, l'amour ne meurt jamais.", "un homme bon.", "le faire avec une humilité et une courtoisie qui ne laisse subsister aucune amertume.", "assurer au plus faible les mêmes opportunités qu'au plus fort.", "les ennemis d'une bonne compréhension."]]

//Deuxième tableau sur les citations de Coluche
const tabColuche = [["L'horreur", "C'est pas compliqué, en politique, il", "Mon psychiatre, pour quinze mille francs, il", "Dans les manifs, rien", "La misère du monde", "L'avenir"],[" est ", " suffit ", " m'a ", " ne sert ", " n'est pas ", " appartient "],["humaine.", "d'avoir une bonne conscience, et pour ça il faut avoir une mauvaise mémoire !", "débarrassé de ce que j'avais : quinze mille francs.", "de partir à point, il faut courir.", "de dimension humaine.", "à ceux qui ont le veto."]]

//Fonction qui prend un tableau en paramètre, et qui retourne une citation aléatoire en sortie
var genererCitations = function(tab){
    var tabDeb = tab[0];
    var tabMil = tab[1];
    var tabFin = tab[2];

    var aleaDeb = Math.floor(Math.random()*tabDeb.length);
    var aleaMil = Math.floor(Math.random()*tabMil.length);
    var aleaFin = Math.floor(Math.random()*tabFin.length);

    return (tabDeb[aleaDeb] + tabMil[aleaMil] + tabFin[aleaFin]);
};

//Fonction qui prend en paramètre un nombre de citation donné et un tableau de citations, et qui imprime le nombre de citations aleatoires demandé
var nbreCitations = function(num, tab){
    if(num>5 || num<1){
        console.log("Ce n'est pas un nombre de citations correct.");
    }else{
        for(let i=0; i<num; i++){
            console.log(genererCitations(tab));
        }
    }
}

//Fonction qui permet d'intéragir avec l'utilisateur/console
var menu = function(){
    console.log("Tapez 0 pour generer des citations de Gandhi \nTapez 1 pour generer des citations de Coluche \nTapez 2 pour quitter");
    var choix = parseInt(prompt("Que voulez vous ?"));
    var nbre = 0;
    if(choix === 0){
        nbre = parseInt(prompt("Combien de citations voulez-vous (de 1 à 5) ?"));
        nbreCitations(nbre, tabGandhi);
        menu();
    }else if(choix === 1){
        nbre = parseInt(prompt("Combien de citations voulez-vous (de 1 à 5) ?"));
        nbreCitations(nbre, tabColuche);
        menu();
    }else if(choix === 2){
        console.log("Au revoir et à bientôt !");
    }else{
        console.log("Ce n'est pas compris dans les options");
        menu();
    }
};

menu();
