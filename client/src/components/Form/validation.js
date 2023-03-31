export default function validate(data) {
  let errors = {};

  if (!data.title) {
    errors.title =
      "Please enter a title for your input. This field is required.";
  } else if (data.title.length <= 3) {
    errors.title =
      "The input must contain at least 4 characters. Please try again.";
  }
  if (!data.summary) {
    errors.summary = "Please enter a brief description. This field is required.";
  } else if(data.summary.length <= 10){
    errors.summary = "The field must contain at least 10 characters. Please try again."
  }

  if (!data.steps.length) {
    errors.steps = "The field cannot be empty. Please enter a value and try again.";
  }
  if (!data.image?.length) errors.image = "The field cannot be empty. Please enter a value and try again.";
  else if(data.image){
    if(!validarURL(data.image)){
      errors.image = "The URL is not valid. Please enter a valid URL and try again."
    }
  }

  if (!data.healthScore) {
    errors.healthScore = "Please enter a value. This field is required.";
  } else if(data.healthScore < 0 || data.healthScore > 100){
    errors.healthScore= "The value must be between 0 and 100. Please enter a valid value and try again."
  }
  if (!data.diets.length > 0) {
    errors.diets = "Check one or more";
  }

  return errors;
}


function validarURL(url) {
  // Expresión regular para validar una URL
  var regex = new RegExp(
    "^(https?:\\/\\/)" + // Protocolo (http o https)
    "(([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}" + // Dominio
    "(:\\d{2,5})?" + // Puerto
    "(\\/[-a-z\\d%@_.~+&:]*)*" + // Ruta
    "(\\?[;&a-z\\d%@_.,~+&:=-]*)?" + // Parámetros de consulta
    "(\\#[-a-z\\d_]*)?$", "i"); // Fragmento
    
  // Devuelve verdadero si la URL es válida, falso en caso contrario
  return regex.test(url);
}
