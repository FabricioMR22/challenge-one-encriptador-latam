// Description: Encriptador de texto
const keys = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

const encrip = (strTrim, ed) => {
  //Recorriendo las llaves
  Object.entries(keys).forEach((entry) => {
    const [key, value] = entry;
    //Remplazando llave o valor segun sea el caso
    strTrim = strTrim.replace(
      new RegExp(ed ? key : value, "g"),
      ed ? value : key
    );
  });
  //Retornando el texto encriptado(sin espacios) o desencriptado(con espacios)
  return ed ? strTrim.replace(/\s/g, "") : strTrim;
};

//Obteniendo los elementos del DOM
const elements = {
  form: {
    txtinput,
    txtoutput,
  },
  btns: {
    btnE,
    btnD,
    btnC,
  },
  msj: {
    label,
    circle,
  },
};

form.addEventListener("submit", (event) => {
  //Desactivando el envio del formulario
  event.preventDefault();
});

btnC.addEventListener("click", async () => {
  //Copiando el texto
  await navigator.clipboard.writeText(elements.form.txtoutput.value);
});

btnE.addEventListener("click", () => {
  //Validando el input
  if (validator()) {
    elements.form.txtoutput.value = encrip(elements.form.txtinput.value, true);
  }
});

btnD.addEventListener("click", () => {
  //Validando el input
  if (validator()) {
    elements.form.txtoutput.value = encrip(elements.form.txtinput.value, false);
  }
});

const validator = () => {
  //Expresion regular minisculas y signos de puntuacion
  const valid = /^[a-z\s]+$/;
  const entrada = elements.form.txtinput.value;

  //Recorrido de estilos de elementos
  Object.values(elements.msj).forEach((value) => {
    !valid.test(entrada)
      ? (value.style.color = "red")
      : (value.style.color = "black");
  });

  //Respuesta de validacion
  return valid.test(entrada);
};
