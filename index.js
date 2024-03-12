const email = document.getElementById("email");
const emailError = email.nextElementSibling;

email.addEventListener("input", () => {
  const emailValue = email.value;

  //   constraints to be checked
  const localPartIsValid = /^[a-zA-Z0-9]+([._+-][a-zA-Z0-9]+)*$/;
  const hasAtSymbol = emailValue.includes("@");
  const domainPartIsValid = /^[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
  if (!hasAtSymbol) {
    emailError.textContent = "missing @-symbol";
  } else {
    const [localPart, domainPart] = emailValue.split("@");

    if (!localPartIsValid.test(localPart)) {
      email.setCustomValidity("local part (before @) is not valid!");
      emailError.textContent = "local part (before @) is not valid!";
    } else if (!domainPartIsValid.test(domainPart)) {
      email.setCustomValidity("domain part (after @) is not valid!");
      emailError.textContent = "domain part (after @) is not valid!";
    } else {
      email.setCustomValidity("");
      emailError.textContent = "";
    }
  }
});
