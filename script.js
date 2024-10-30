// Defina suas informações
const nome = "Seu Nome";
const profissao = "Sua Profissão";
const sobreMim = "Descreva-se em poucas linhas.";
const telefone = "(11) 12345-6789";
const email = "seuemail@example.com";
const redesSociais = "@seunome";

// Preencha as informações
document.getElementById("nome").innerHTML = nome;
document.getElementById("profissao").innerHTML = profissao;
document.getElementById("sobre-mim").innerHTML = sobreMim;
document.getElementById("telefone").innerHTML = telefone;
document.getElementById("email").innerHTML = email;
document.getElementById("redes-sociais").innerHTML = redesSociais;

// Adicione evento de clique para mostrar/ocultar verso
document.getElementById("ver-mais").addEventListener("click", function() {
    document.querySelector(".frente").style.display = "none";
    document.querySelector(".verso").style.display = "block";
});

document.getElementById("voltar").addEventListener("click", function() {
    document.querySelector(".frente").style.display = "block";
    document.querySelector(".verso").style.display = "none";
});