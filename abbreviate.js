//Abreviação por ordem de 2 em 2 decimais
const abbrCode = ["", "K", "M", "B", "T"];

function abbreviate(abbrName = true, decimals = 2) {
  for (let index = 0; index < abbr.length; index++) {
    let count = abbr[index].textContent;
    //Verifica a posição da abreviação, se é necessário abreviar e inserir o tipo de abreviação
    const i = 0 === count ? count : Math.floor(Math.log(count) / Math.log(1000));
    //Converte o número em decimal e formata em ponto fixo de acordo com a variável decimals
    let result = parseFloat((count / Math.pow(1000, i)).toFixed(decimals));
    //Se a variável abbrName estiver como verdadeiro é inserido o tipo de abreviação
    if (abbrName) {
      result += `${abbrCode[i]}`;
    }
    abbr[index].textContent = result;
  }
}

//Chamando a função através da classe .abbreviate
var abbr = document.querySelectorAll(".abbreviate");
abbreviate(true, 4, abbr);