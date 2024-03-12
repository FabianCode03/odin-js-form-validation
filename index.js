import * as constraints from "./modules/constraints.js";

// Extract the validation logic into separate functions
function validateLocalPart(localPart) {
  return constraints.LOCAL_PART_PATTERN.test(localPart);
}

function validateDomainPart(domainPart) {
  return constraints.DOMAIN_PART_PATTERN.test(domainPart);
}

const email = document.getElementById("email");
const emailError = email.nextElementSibling;

email.addEventListener("input", () => {
  const emailValue = email.value;

  if (emailValue === "") {
    email.setCustomValidity("");
    emailError.textContent = "";
  } else if (!emailValue.includes("@")) {
    emailError.textContent = "missing @-symbol";
  } else {
    const [localPart, domainPart] = emailValue.split("@");

    if (!validateLocalPart(localPart)) {
      email.setCustomValidity("local part (before @) is not valid!");
      emailError.textContent = "local part (before @) is not valid!";
    } else if (!validateDomainPart(domainPart)) {
      email.setCustomValidity("domain part (after @) is not valid!");
      emailError.textContent = "domain part (after @) is not valid!";
    } else {
      email.setCustomValidity("");
      emailError.textContent = "";
    }
  }
});
