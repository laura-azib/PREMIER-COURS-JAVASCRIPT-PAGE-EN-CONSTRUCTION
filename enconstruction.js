function messageBienvenue(){

    document.getElementById("bonjourprenom").innerHTML="Bonjour "+champdesaisie.value;

}

    document.getElementById("button").addEventListener('click', messageBienvenue);
    




    function cacheBloc() {
        fourthdiv.style.display = "none";
        fifthdiv.style.display = "none";
    }
    cacheBloc();
    
    function afficheBloc(){
        fourthdiv.style.display = "flex";
        fifthdiv.style.display = "flex";
    }
    document.getElementById("button").addEventListener("click", afficheBloc);






    function messageDialogue(){

        document.getElementById("boitedialogue").innerHTML="Bonjour "+champdesaisie.value + ", nous te confirmons que tu seras informé sur ton e-mail : "+email.value;
    
    }
    
        document.getElementById("button2").addEventListener('click', messageDialogue);


    

        function cacheDialogue() {
            boitedialogue.style.display = "none";
           
        }
        cacheDialogue();
        
        function afficheDialogue(){
            boitedialogue.style.display = "flex";
            
        }
        document.getElementById("button2").addEventListener("click", afficheDialogue);