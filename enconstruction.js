
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
            
        
        }


//Quand on clique sur le troisième bouton la fonction ci-dessus s'éxecute    

        document.getElementById("button3").addEventListener("click", cacheDialogue2);





        function messageAurevoir(){

            document.getElementById("bonjourprenom").innerHTML="Merci "+champdesaisie.value +" et à bientôt !";
        
        }
        
            document.getElementById("button3").addEventListener('click', messageAurevoir);