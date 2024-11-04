function calcularIMC() {
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const imc = peso / (altura * altura);
    const resultado = document.getElementById('resultado');
  
    resultado.textContent = `Seu IMC é: ${imc.toFixed(2)}`;
  }