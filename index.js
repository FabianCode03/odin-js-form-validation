// Define the regex patterns as constants
const LOCAL_PART_PATTERN = /^[a-zA-Z0-9]+([._+-][a-zA-Z0-9]+)*$/;
const DOMAIN_PART_PATTERN = /^[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;

// Extract the validation logic into separate functions
function validateLocalPart(localPart) {
  return LOCAL_PART_PATTERN.test(localPart);
}

function validateDomainPart(domainPart) {
  return DOMAIN_PART_PATTERN.test(domainPart);
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
