
//La fonction ici veut dire que dans le paragraphe vide bonjourprénom, s'affichera bonjour + la valeur indiqué dans la barre
function messageBienvenue(){

    document.getElementById("bonjourprenom").innerHTML="Bonjour "+champdesaisie.value +" !";

}
//Quand on clique sur le premier bouton la fonction ci-dessus s'éxecute
    document.getElementById("button").addEventListener('click', messageBienvenue);
    

    

//Ici cette fonction sert à cacher les div mentionnées avec la fonction "none"
    function cacheBloc() {
        fourthdiv.style.display = "none";
        fifthdiv.style.display = "none";
    }
    cacheBloc();

//Ici cette fonction sert à afficher les div mentionnées avec la fonction "flex"  
    function afficheBloc(){
        fourthdiv.style.display = "flex";
        fifthdiv.style.display = "flex";
    }
    document.getElementById("button").addEventListener("click", afficheBloc);





//La fonction ici veut dire que dans le paragraphe vide textedialogue, s'affichera bonjour + la valeur indiquée dans la barre du prénom + la valeur indiquée dans la barre de l'e-mail
    function messageDialogue(){

        document.getElementById("textedialogue").innerHTML="Bonjour "+champdesaisie.value + " ! Nous te confirmons que tu seras informé sur ton e-mail : "+email.value;
    
    }
//Quand on clique sur le deuxième bouton la fonction ci-dessus s'éxecute    
        document.getElementById("button2").addEventListener('click', messageDialogue);


    
//Ici cette fonction sert à cacher les div mentionnées avec la fonction "none"
        function cacheDialogue() {
            elementdialogue.style.display = "none";
           
        }
        cacheDialogue();
 
//Ici cette fonction sert à afficher les div mentionnées avec la fonction "flex"  
//Le zIndex 1 sert à ce que l'élément passe "au dessus" des autrez        
        function afficheDialogue(){
            elementdialogue.style.display = "flex";
            elementdialogue.style.zIndex = "1";
            
        }
//Quand on clique sur le deuxième bouton la fonction ci-dessus s'éxecute    
        document.getElementById("button2").addEventListener("click", afficheDialogue);



//Ici cette fonction sert à cacher les div mentionnées avec la fonction "none"
        function cacheDialogue2(){
            elementdialogue.style.display = "none";
            fourthdiv.style.display = "none";
            fifthdiv.style.display = "none";
            firstdiv.style.display = "none";
            fourthdiv.style.display = "none";
            seconddiv.style.display = "none";
            div.style.display = "none";
            thirddiv.style.display = "none";    
        }

//Quand on clique sur le troisième bouton la fonction ci-dessus s'éxecute    
        document.getElementById("button3").addEventListener("click", cacheDialogue2);





        function messageAurevoir(){

            document.getElementById("bonjourprenom2").innerHTML="Merci "+champdesaisie.value +" et à bientôt !";
        }
        
            document.getElementById("button3").addEventListener('click', messageAurevoir);

//.style.display = "block"; veut dire qu'il sera par dessus et visible
//.style.display = "none" ; veut dire qu'il sera en dessous et caché



//Ici cette fonction sert à cacher les div mentionnées avec la fonction "none" soit en l'occurence la barre de cookie
function cacheDialogue3(){
    barrecookie.style.display = "none";
    
}

//Quand on clique sur le quatrième bouton la fonction ci-dessus s'éxecute    
document.getElementById("button4").addEventListener("click", cacheDialogue3);



//Ici on veut faire apparaître la fenêtre modale
function afficheModale(){
    fenetreModale.style.display = "flex";
    fenetreModale.style.zIndex = "1";
    
}
//Quand on clique sur le bouton la fonction ci-dessus s'éxecute    
document.getElementById("button5").addEventListener("click", afficheModale);


//Le bouton deviendra vert au clic (this. signifie "quand on clique sur CE bouton, selon le bouton")
function changeColorAccept(){
    this.style.backgroundColor = "green";  
// Variable qui s'appelle buttonIdReverse et qui est égale au bouton "inverse" du bouton sur lequel on clique    
    let buttonIdReverse = this.getAttribute("data-inverse");
//Ici on vient mettre en gris le bouton opposé au bouton sur lequel on clique (et qui lui deviendra vert dans cette fonction)    
    document.getElementById(buttonIdReverse).style.backgroundColor = "#D3D3D3";  

// SAUVEGARDE DANS LE SYSTEME AVEC LE SETITEM DES BOUTONS ACCEPTER QUAND L'UTILISATEUR FAIT SON CHOIX    
    localStorage.setItem(this.id,"green") 
    localStorage.setItem(buttonIdReverse,"#D3D3D3")

}

//Quand on clique sur le bouton la fonction ci-dessus s'éxecute    
document.getElementById("button6").addEventListener("click", changeColorAccept);

//Quand on clique sur le bouton la fonction ci-dessus s'éxecute    
document.getElementById("button8").addEventListener("click", changeColorAccept);

//Quand on clique sur le bouton la fonction ci-dessus s'éxecute    
document.getElementById("button10").addEventListener("click", changeColorAccept);






//Le bouton deviendra rouge au clic
function changeColorDeclined(){
    this.style.backgroundColor = "red";  
// Variable qui s'appelle buttonIdReverse et qui est égale au bouton "inverse" du bouton sur lequel on clique    
    let buttonIdReverse = this.getAttribute("data-inverse");
//Ici on vient mettre en gris le bouton opposé au bouton sur lequel on clique (et qui lui deviendra rouge dans cette fonction)    
    document.getElementById(buttonIdReverse).style.backgroundColor = "#D3D3D3";

// SAUVEGARDE DANS LE SYSTEME AVEC LE SETITEM DES BOUTONS REFUSER QUAND L'UTILISATEUR FAIT SON CHOIX    
    localStorage.setItem(this.id,"red");
    localStorage.setItem(buttonIdReverse,"#D3D3D3");
    
}

//Quand on clique sur le bouton la fonction ci-dessus s'éxecute    
document.getElementById("button7").addEventListener("click", changeColorDeclined);

//Quand on clique sur le bouton la fonction ci-dessus s'éxecute    
document.getElementById("button9").addEventListener("click", changeColorDeclined);

//Quand on clique sur le bouton la fonction ci-dessus s'éxecute    
document.getElementById("button11").addEventListener("click", changeColorDeclined);



// Ici la fenêtre modale disparaîtra
function cacheFenetre(){
    fenetreModale.style.display = "none";
}

//Quand on clique sur le quatrième bouton la fonction ci-dessus s'éxecute    
document.getElementById("button12").addEventListener("click", cacheFenetre);



//RÉCUPÉRATION DE LA SAUVEGARDE FAITE AVEC LE SETITEM AU DESSUS // ON VIENT CHERCHER LA SAUVEGARDE AVEC LE GETITEM AVEC UNE FONCTION POUR CHACUN DES BOUTONS


//Fonction pour qu'au chargement de la page, le choix que l'utilisateur a fait précédemment s'affiche
//Premier bouton ACCEPTER
function userAccept1(){
    let contenuPersoValidate = localStorage.getItem('button6');
    if(contenuPersoValidate != null){
        document.getElementById("button6").style.backgroundColor = contenuPersoValidate;
    }
    else{
        document.getElementById("button6").style.backgroundColor = "#D3D3D3";
    }
}

    userAccept1()



//Fonction pour qu'au chargement de la page, le choix que l'utilisateur a fait précédemment s'affiche
//Deuxième bouton ACCEPTER
function userAccept2(){
    let pubValidate = localStorage.getItem("button8");
    if(pubValidate != null){
        document.getElementById("button8").style.backgroundColor = pubValidate;
    }
    else{
        document.getElementById("button8").style.backgroundColor = "D3D3D3";
    }
}
    userAccept2()



//Fonction pour qu'au chargement de la page, le choix que l'utilisateur a fait précédemment s'affiche
//Troisième bouton ACCEPTER
function userAccept3(){
    let audianceValidate = localStorage.getItem("button10");
    if(audianceValidate != null){
        document.getElementById("button10").style.backgroundColor = audianceValidate;
    }
    else{
        document.getElementById("button10").style.backgroundColor = "D3D3D3";
    }
}
    userAccept3()




//Fonction pour qu'au chargement de la page, le choix que l'utilisateur a fait précédemment s'affiche
//Premier bouton REFUSER
function userDeclined1(){
    let contenuDeclined = localStorage.getItem("button7");
    if(contenuDeclined != null){
        document.getElementById("button7").style.backgroundColor = contenuDeclined;
    }
    else{
        document.getElementById("button7").style.backgroundColor = "D3D3D3";
    }
}
    userDeclined1()





//Fonction pour qu'au chargement de la page, le choix que l'utilisateur a fait précédemment s'affiche
//Deuxième bouton REFUSER
function userDeclined2(){
    let pubDeclined = localStorage.getItem("button9");
    if(pubDeclined != null){
        document.getElementById("button9").style.backgroundColor = pubDeclined;
    }
    else{
        document.getElementById("button9").style.backgroundColor = "D3D3D3";
    }
}
    userDeclined2()



    

//Fonction pour qu'au chargement de la page, le choix que l'utilisateur a fait précédemment s'affiche
//Troisième bouton REFUSER
function userDeclined3(){
    let audianceDeclined = localStorage.getItem("button11");
    if(audianceDeclined != null){
        document.getElementById("button11").style.backgroundColor = audianceDeclined;
    }
    else{
        document.getElementById("button11").style.backgroundColor = "D3D3D3";
    }
}
    userDeclined3()