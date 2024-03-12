import * as constraints from "./modules/constraints.js";
import checkConstraint from "./modules/checkConstraint.js";

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

    if (!checkConstraint(constraints.LOCAL_PART_PATTERN, localPart)) {
      email.setCustomValidity("local part (before @) is not valid!");
      emailError.textContent = "local part (before @) is not valid!";
    } else if (!checkConstraint(constraints.DOMAIN_PART_PATTERN, domainPart)) {
      email.setCustomValidity("domain part (after @) is not valid!");
      emailError.textContent = "domain part (after @) is not valid!";
    } else {
      email.setCustomValidity("");
      emailError.textContent = "";
    }
  }
});
