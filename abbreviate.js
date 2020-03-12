//Abreviação por ordem de 2 em 2 decimais
const abbrCode = ["", "K", "M", "B", "T"];

(function($) {
  $.fn.abbreviate = function(count, abbrName = true, decimals = 2) {
    for (let index = 0; index < $(this).length; index++) {
      count = $(this)[index].textContent;
      //Verifica a posição da abreviação, se é necessário abreviar e inserir o tipo de abreviação
      const i = 0 === count ? count : Math.floor(Math.log(count) / Math.log(1000));
      //Converte o número em decimal e formata em ponto fixo de acordo com a variável decimals
      let result = parseFloat((count / Math.pow(1000, i)).toFixed(decimals));
      //Se a variável abbrName estiver como verdadeiro é inserido o tipo de abreviação
      if (abbrName) {
        result += `${abbrCode[i]}`;
      }
      $(this)[index].textContent = result;
    }
  };
})(jQuery);

$(".abbreviate").abbreviate();