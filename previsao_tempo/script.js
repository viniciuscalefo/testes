const key = "a12f6d277632a9264e67d7149c4be434";

function colocarDados(dados) {
  document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
  document.querySelector(".temp").innerHTML = `Temperatura Atual: ${Math.round(dados.main.temp) } °C`;
  document.querySelector(".texto-previsao").innerHTML =
    dados.weather[0].description;
  document.querySelector(".umidade").innerHTML = `Umidade: ${dados.main.humidity} %`;
  document.querySelector(".img-previsao").src=`//openweathermap.org/img/wn/${dados.weather[0].icon}.png`
  document.querySelector(".max").innerHTML = `Máxima: ${Math.round(dados.main.temp_max)} °C`;
  document.querySelector(".min").innerHTML = `Mínima: ${Math.round(dados.main.temp_min)} °C`;
  document.querySelector(".sensacao").innerHTML = `Sensação Térmica: ${Math.round(dados.main.feels_like)} °C`;
}

async function buscarCiadade(cidade) {
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
  ).then((resposta) => resposta.json());
  colocarDados(dados);
  console.log(dados)
}

function cliqueNoBotao() {
  const cidade = document.querySelector(".input-usuario").value;
  buscarCiadade(cidade);
  
}
