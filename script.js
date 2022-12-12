document.querySelector(".conf_btn").addEventListener("click", function (prv) {
  prv.preventDefault();

  const UserCardName = document.querySelector("#card_name").value;
  const UserCardNumber = document.querySelector("#card_number").value;
  const UserCardExM = document.querySelector("#exp_date_m").value;
  const UserCardExY = document.querySelector("#exp_date_y").value;
  const UserCarcvc = document.querySelector("#cvc").value;
  const numbersAlert = document.querySelector(".card_number_alert");
  const nameAlert = document.querySelector(".card_name_alert");
  const cvcAlert = document.querySelector(".card_cvc_alert");
  const expDateYAlert = document.querySelector(".exp_date_y_alert");
  const expDateMAlert = document.querySelector(".exp_date_m_alert");

  let alert = addValidationInformation();

  addGreenOnCorrectInputs();

  let correctValidation = checkFormValidation();

  if (correctValidation) {
    showSuccess();
  }

  function showSuccess() {
    document.querySelector(".card__form").style.display = "none";
    document.querySelector(".thank-you-wrapper").style.display = "block";
    document.querySelector(".front-owner").textContent = UserCardName;
    document.querySelector(".front-numbers").textContent = UserCardNumber;
    document.querySelector(".card-exp-m").textContent = UserCardExM;
    document.querySelector(".card-exp-y").textContent = UserCardExY;
    document.querySelector(".back-cv").textContent = UserCarcvc;
  }

  function addValidationInformation() {
    let alert = "";
    numbersAlert.textContent = alert;
    numbersAlert.textContent = alert;
    nameAlert.textContent = alert;
    nameAlert.textContent = alert;
    cvcAlert.textContent = alert;
    expDateMAlert.textContent = alert;
    expDateYAlert.textContent = alert;
    return alert;
  }

  function checkFormValidation() {
    let pass = true;
    if (isNaN(UserCardNumber)) {
      alert = "Wrong format";
      numbersAlert.textContent = alert;
      document.querySelector("#card_number").style.borderColor = "red";
      pass = false;
    }
    if (UserCardNumber == "") {
      alert = `Can't be blank `;
      numbersAlert.textContent = alert;
      document.querySelector("#card_number").style.borderColor = "red";
      pass = false;
    }
    if (UserCardName == "") {
      alert = `Can't be blank `;
      nameAlert.textContent = alert;
      document.querySelector("#card_name").style.borderColor = "red";
      pass = false;
    }
    if (UserCarcvc == "" || UserCarcvc.toString().length !== 3 || isNaN(UserCardExY)) {
      alert = `Wrong format `;
      cvcAlert.textContent = alert;
      document.querySelector("#cvc").style.borderColor = "red";
      pass = false;
    }
    if (UserCardExM == "" || UserCardExM > 12 || UserCardExM <= 0 || isNaN(UserCardExM)) {
      alert = `Wrong format `;
      expDateMAlert.textContent = alert;
      document.querySelector("#exp_date_m").style.borderColor = "red";
      pass = false;
    }
    if (UserCardExY == "" || UserCardExY.toString().length !== 2 || isNaN(UserCardExY)) {
      alert = `Wrong format `;
      expDateYAlert.textContent = alert;
      document.querySelector("#exp_date_y").style.borderColor = "red";
      pass = false;
    }
    return pass;
  }

  function addGreenOnCorrectInputs() {
    document.querySelector("#card_name").style.borderColor = "green";
    document.querySelector("#card_number").style.borderColor = "green";
    document.querySelector("#cvc").style.borderColor = "green";
    document.querySelector("#exp_date_m").style.borderColor = "green";
    document.querySelector("#exp_date_y").style.borderColor = "green";
  }
});

document.querySelector(".re-btn").addEventListener("click", function () {
  location.reload();
});
