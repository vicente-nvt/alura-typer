$("#botao-frases").click(obtemFrasesAleatorias);
$("#botao-frase-id").click(buscaFrase);

function obtemFrasesAleatorias(){
    $("#spinner").fadeIn(1500);
    setTimeout(function(){
    $.get("http://localhost:3000/frases",trocaFraseAleatoria)
    .fail(function(){
        $("#erro").toggle();
    })
    .always(function(){
        $("#spinner").fadeOut(1500);
    })}        
    ,2000);
}

function trocaFraseAleatoria(dados){
    var numeroAleatorio = Math.floor(Math.random() * dados.length);
    console.log(numeroAleatorio);
    var frase = $(".frase");
    
    frase.text(dados[numeroAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(dados[numeroAleatorio].tempo);
}

function buscaFrase(){
    
    $("#spinner").toggle();
    var fraseID = $("#frase-id").val();
    var Dados = {id: fraseID};
    
    $.get("http://localhost:3000/frases",Dados,trocaFrase)
    .fail(function(){
        $("#erro").toggle();
    })
    .always(function(){
        $("#spinner").slideToggle(2000);
    });        
}

function trocaFrase(data){
    var frase = $(".frase");
    frase.text(data.texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data.tempo);
}