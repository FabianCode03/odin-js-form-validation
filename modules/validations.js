// general validation functions
export const inputIsEmpty = inputValue => inputValue === "";

// email validation functions
export const hasAtSign = emailValue => emailValue.includes("@");

export const localePartIsValid = localPart => {
  const LOCAL_PART_PATTERN = /^[a-zA-Z0-9]+([._+-][a-zA-Z0-9]+)*$/;
  return LOCAL_PART_PATTERN.test(localPart);
};

export const domainPartIsValid = domainPart => {
  const DOMAIN_PART_PATTERN = /^[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
  return DOMAIN_PART_PATTERN.test(domainPart);
};
