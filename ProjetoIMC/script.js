// Capturar evento de submit do formulário

const form = document.querySelector('.formulario');

form.addEventListener('submit', 
  function (e) {
    e.preventDefault();
    const inputPeso = document.querySelector('.Peso');
    const inputAltura = document.querySelector('.Altura');
    const inputNome = document.querySelector('.nome');
    const inputSobrenome = document.querySelector('.sobrenome');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    const nome = (inputNome.value);
    const sobrenome = (inputSobrenome.value); 
    if (!peso) {
        setResultado('Preencha o campo do peso', false);
        return;
      }
      if (!altura) {
        setResultado('Preencha o campo do altura', false);
        return;
      }
      if(!nome) {
        setResultado('Preencha seu nome', false);
        return;
      }
      if (!sobrenome) {
        setResultado('Preencha seu sobrenome', false);
        return;
      }   
      const imc = getImc(peso, altura);
      const nivelImc = getNivelImc(imc);
      const msg = `Seu IMC é ${imc} (${nivelImc}).`;
      setResultado(msg, true);
});//fechamento da função de evento
function getNivelImc (imc) {
  if(imc<18.5){
    return nivel="Abaixo do peso";
  }else if(imc>=18.6&&imc<=24.9){
    return nivel="Peso ideal";
  }else if(imc>=25&&imc<=29.9){
    return nivel="Levemente acima do peso";
  }else if(imc>=30&&imc<=34.9){
    return nivel="Obesidade grau I";
  }else if(imc>=35&&imc<=39.9){
    return  nivel="Obesidade grau II";
  }else{
    return nivel="Obesidade grau III";
  }
} //chamada da função de verificar o nível do IMC

function getImc (peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}
pessoas.push({
  nome:nome.value,
  sobrenome:sobrenome.value,
  peso:inputPeso,
  altura:inputAltura,
  imc:imc,
  nivel:nivel}) 
console.log(pessoas)
function setResultado(msg, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = document.createElement('p');
  if (isValid) {
    p.classList.add('#resultado');
  } else {
    p.classList.add('bad');
  }

  p.textContent = msg;
  resultado.appendChild(p);
}