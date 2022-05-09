export const isValidEmail = (emailAddress) => {
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailAddress.match(validRegex) === null ? false : true
}

export const isValidNumber = (string) => {
    let numbers = '0123456789'
    return string.split("").filter(ch => numbers.includes(ch)).length === string.length
}