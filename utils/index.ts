export const validateTextInput = (value: string | null, field: string): string | false => {
  if (!value || value.trim() === "") {
    return "Can't be blank";
  }

  if (field === "holder") {
    // Must NOT contain numbers
    if (/\d/.test(value)) {
      return "Wrong format";
    }
  } else {
    // Must contain ONLY digits (no letters or special chars)
    if (!/^\d+$/.test(value)) {
      return "Wrong format";
    }
  }

  return false;
};