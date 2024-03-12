// general validation functions
export function inputIsEmpty(inputValue) {
  return inputValue === "";
}

// email validation functions
export function hasAtSign(emailValue) {
  return emailValue.includes("@");
}

export function localePartIsValid(localPart) {
  const LOCAL_PART_PATTERN = /^[a-zA-Z0-9]+([._+-][a-zA-Z0-9]+)*$/;
  return LOCAL_PART_PATTERN.test(localPart);
}

export function domainPartIsValid(domainPart) {
  const DOMAIN_PART_PATTERN = /^[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
  return DOMAIN_PART_PATTERN.test(domainPart);
}
