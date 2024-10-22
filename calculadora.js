// Função para calcular IMC
function calcularImc(peso, altura) {
    return peso / (altura ** 2);
  }
  
  // Função para classificar IMC
  function classificarImc(imc) {
    if (imc < 18.5) {
      return "Esqueleto";
    } else if (imc < 25) {
      return "Pessoa normal";
    } else if (imc < 30) {
      return "Gordinho";
    } else if (imc < 35) {
      return "Gordãoda xj 1";
    } else if (imc < 40) {
      return "Gordão da xj 2";
    } else {
      return "Gordão da xj 3";
    }
  }
  
  // Função principal
  function calcular() {
    const peso = parseFloat(prompt("Digite seu peso em kg:"));
    const altura = parseFloat(prompt("Digite sua altura em metros:"));
  
    const imc = calcularImc(peso, altura);
    const classificacao = classificarImc(imc);
  
    alert(`Seu IMC é: ${imc.toFixed(2)}\nSua classificação é: ${classificacao}`);
  }
  
  // Executar função principal
  calcular();