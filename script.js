let personagensids = 0, personagensranby = 1;
function Adicionar(){
    //variavel username recebe valor de um elemento reconhecido pelo id
    var username = document.getElementById("playername").value;
    var personagem = document.createElement("div");
    //ids sempre começaram em 1
    personagensids = personagensids + 1;
    personagem.innerHTML = username + " " + personagensids;
    personagem.id = personagensids;
    personagem.style.width = "75px";
    personagem.style.height = "75px";
    personagem.style.position = "absolute";
    personagem.style.background = "rgb(126, 47, 47)";
    personagem.style.color = "white";    
    personagem.style.display = "flex";
    personagem.style.justifyContent = "center";
    personagem.style.alignItems = "center";
    document.getElementById("circle").appendChild(personagem);
    for(personagensranby = 1; personagensranby <= personagensids; personagensranby++){
        personagem = document.getElementById(personagensranby);
        topposition = (Math.sin(2*Math.PI/4) + Math.cos(2*Math.PI*personagensranby/personagensids)*-1) * 30 + "vh";
        leftposition = (Math.sin(2*Math.PI/4) + Math.sin(2*Math.PI*personagensranby/personagensids)) * 30 + "vh";
        personagem.style.top = topposition;
        personagem.style.left = leftposition;
        personagem.style.borderRadius = "50%"
        personagem.style.transform = "translate(-50%, -50%)";
    }
    return personagensids;
}function Remover(){
    //variavel username recebe valor de um elemento reconhecido pelo id
    var personagem = document.getElementById(personagensids);
    personagem.remove();
    personagensids = personagensids - 1;
    for(personagensranby = 1; personagensranby <= personagensids; personagensranby++){
        personagem = document.getElementById(personagensranby);
        topposition = (Math.sin(2*Math.PI/4) + Math.cos(2*Math.PI*personagensranby/personagensids)*-1) * 30 + "vh";
        leftposition = (Math.sin(2*Math.PI/4) + Math.sin(2*Math.PI*personagensranby/personagensids)) * 30 + "vh";
        personagem.style.top = topposition;
        personagem.style.left = leftposition;
        personagem.style.borderRadius = "50%"
        personagem.style.transform = "translate(-50%, -50%)";
    }
    return personagensids;
}
