
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


//Le bouton deviendra vert au clic
function changeColor1(){
    button6.style.backgroundColor = "green";   
}

//Quand on clique sur le bouton la fonction ci-dessus s'éxecute    
document.getElementById("button6").addEventListener("click", changeColor1);




//Le bouton deviendra rouge au clic
function changeColor2(){
    button7.style.backgroundColor = "red";    
}

//Quand on clique sur le bouton la fonction ci-dessus s'éxecute    
document.getElementById("button7").addEventListener("click", changeColor2);



//Le bouton deviendra vert au clic
function changeColor3(){
    button8.style.backgroundColor = "green";   
}

//Quand on clique sur le bouton la fonction ci-dessus s'éxecute    
document.getElementById("button8").addEventListener("click", changeColor3);



//Le bouton deviendra rouge au clic
function changeColor4(){
    button9.style.backgroundColor = "red";
}

//Quand on clique sur le bouton la fonction ci-dessus s'éxecute    
document.getElementById("button9").addEventListener("click", changeColor4);




//Le bouton deviendra vert au clic
function changeColor5(){
    button10.style.backgroundColor = "green";    
}

//Quand on clique sur le bouton la fonction ci-dessus s'éxecute    
document.getElementById("button10").addEventListener("click", changeColor5);



//Le bouton deviendra rouge au clic
function changeColor6(){
    button11.style.backgroundColor = "red";   
}

//Quand on clique sur le bouton la fonction ci-dessus s'éxecute    
document.getElementById("button11").addEventListener("click", changeColor6);



function cacheFenetre(){
    fenetreModale.style.display = "none";
    
}

//Quand on clique sur le quatrième bouton la fonction ci-dessus s'éxecute    

document.getElementById("button12").addEventListener("click", cacheFenetre);
