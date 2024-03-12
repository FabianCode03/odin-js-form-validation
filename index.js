import {
  inputIsEmpty,
  hasAtSign,
  localePartIsValid,
  domainPartIsValid,
} from "./modules/validations.js";

const email = document.getElementById("email");

const setValidateAndMessage = (element, message) => {
  element.setCustomValidity(message);
  element.nextElementSibling.textContent = message;
};

const validateEmail = emailValue => {
  // Check if the input is empty
  if (inputIsEmpty(emailValue)) {
    setValidateAndMessage(email, "");
    return;
  }

  // Check if the email has an @ sign
  if (!hasAtSign(emailValue)) {
    setValidateAndMessage(email, "missing @-symbol");
    return;
  }

  // Split the email into local and domain parts
  const [localPart, domainPart] = emailValue.split("@");

  // Validate the local part
  if (!localePartIsValid(localPart)) {
    setValidateAndMessage(email, "local part (before @) is not valid!");
    return;
  }

  // Validate the domain part
  if (!domainPartIsValid(domainPart)) {
    setValidateAndMessage(email, "domain part (after @) is not valid!");
    return;
  }

  // If all checks pass, clear the validation message
  setValidateAndMessage(email, "");
};

email.addEventListener("input", () => {
  const emailValue = email.value;
  validateEmail(emailValue);
});
