export function isPhoneNumberValid(phoneNumber) {
  return phoneNumber.length === 8 && (phoneNumber.startsWith("2") || phoneNumber.startsWith("5") || phoneNumber.startsWith("9"));
}