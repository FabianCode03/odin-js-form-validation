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

email.addEventListener("input", () => {
  const emailValue = email.value;

  if (inputIsEmpty()) {
    setValidateAndMessage(email, "");
  } else if (!hasAtSign(emailValue)) {
    setValidateAndMessage(email, "missing @-symbol");
  } else {
    const [localPart, domainPart] = emailValue.split("@");

    if (!localePartIsValid(localPart)) {
      setValidateAndMessage(email, "local part (before @) is not valid!");
    } else if (!domainPartIsValid(domainPart)) {
      setValidateAndMessage(email, "domain part (after @) is not valid!");
    } else {
      setValidateAndMessage(email, "");
    }
  }
});
