function checkAccess() {
    const cardNumber = parseInt(document.getElementById("cardNumber").value);
    const accessMessage = document.getElementById("accessMessage");

    if (cardNumber >= 1000 && cardNumber <= 1999) {
        accessMessage.textContent = "Acesso total permitido!";
        document.body.style.backgroundColor = "#69dd69";
    }

    if (cardNumber >= 2000 && cardNumber <= 2999) {
        accessMessage.textContent = "Acesso limitado permitido.";
        document.body.style.backgroundColor = "#e5e598";
    }

    if (cardNumber >= 3000) {
        accessMessage.textContent = "Acesso negado.";
        document.body.style.backgroundColor = "#d10000";
    }

    if (cardNumber < 1000 || cardNumber === NaN) {
        accessMessage.textContent = "Número de cartão inválido.";
    }
}