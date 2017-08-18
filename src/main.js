import { format } from './format.js'

class NifValidator {
  static isValid (idNumber) {
    const reDNINIE = /^[XYZ]?\d{5,8}[A-Z]$/
    const reCIF = /^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/

    if (!idNumber) return false

    idNumber = format(idNumber)

    if (!reDNINIE.test(idNumber) && !reCIF.test(idNumber)) return false

    return true
  }
}

export default NifValidator
