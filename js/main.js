//alert("funcionou");

function consultaCep(){
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "http://viacep.com.br/ws/" + cep + "/json";
    console.log(url);
    $.ajax({
        url: url,
        type:"GET",
        success: function(response){
            console.log(response);
            //formato em AJAX
            $("#logradouro").html(response.logradouro);
            $("#complemento").html(response.complemento);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#titulo_cep").html("CEP " + response.cep);
            $(".cep").show();
            $(".barra-progresso").hide();
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            //formato em HTML
            //document.getElementById("complemento").innerHTML = response.complemento;
            //document.getElementById("bairro").innerHTML = response.bairro;
            //document.getElementById("localidade").innerHTML = response.localidade;
            //document.getElementById("uf").innerHTML = response.uf;
        }
    })
}
$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
});
